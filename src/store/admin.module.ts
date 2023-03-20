/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import AdminService from '@/services/admin.service'
import TokenService from '@/services/token.service'
import guitarData from '@/data/guitar.json'

const initialState = {
  items: [] as any[],
  passport: {}
}

const getDefaultPassportData = () => {
  const attrs = guitarData.data.attributes
  const customAttrs = attrs.customAttributes
  const supplier = attrs.supplier

  return {
    name: attrs.name,
    model: customAttrs.model,
    modelType: 'Acoustic Guitar - SCCCE',
    code: customAttrs.code,
    style: customAttrs.style,
    owner: {
      firstName: customAttrs.ownerFirstName,
      lastName: customAttrs.ownerLastName
    },
    items: attrs.items,
    view: {
      front: '/images/sides/front.jpeg' || customAttrs.frontViewFile,
      back: '/images/sides/back.jpeg' || customAttrs.backViewFile,
      main: customAttrs.mainViewFile
    },
    supplier: {
      name: supplier.name,
      ...supplier.customAttributes
    }
  }
}

export type AdminState = typeof initialState

const AdminModule = {
  namespaced: true,
  state: initialState,
  actions: {
    async getPassport ({ commit }: any, id: string) {
      try {
        const { data } = await AdminService.getPassport(id)
        const passport = data?.attributes?.customAttributes || {}
        commit('setPassport', {
          ...getDefaultPassportData(),
          ...passport
        })
      } catch (err) {
        console.error(err)
        const passport = getDefaultPassportData()
        commit('setPassport', passport)
      }
    },

    async fetchItems ({ commit }: any) {
      try {
        const { data } = await AdminService.getList()
        commit('setItems', data)
      } catch (err) {
        console.error(err)
      }
    },
    async createItem ({ commit }: any, data: Record<string, any>) {
      try {
        const {
          userId,
          organizationId
        } = TokenService.getAuthData()
        const { data: item } = await AdminService.createItem({
          userId,
          organizationId,
          data
        })
        commit('addItem', item)
      } catch (err) {
        console.error(err)
      }
    },
    async updateItem ({ commit }: any, {
      id,
      data
    }: {
      id: string
      data: Record<string, any>
    }) {
      try {
        const { data: item } = await AdminService.updateItem({ id, data })
        commit('updateItem', item)
      } catch (err) {
        console.error(err)
      }
    },
    async removeItem ({ commit }: any, id: string) {
      try {
        await AdminService.removeItem(id)
        commit('removeItem', id)
      } catch (err) {
        console.error(err)
      }
    },
  },
  mutations: {
    setPassport (state: AdminState, passport: any) {
      state.passport = passport
    },
    setItems (state: AdminState, items: any[]) {
      state.items = items
    },
    addItem (state: AdminState, item: any) {
      state.items = [
        item,
        ...state.items
      ]
    },
    updateItem (state: AdminState, item: any) {
      state.items = state.items.map((i) => (item.id === i.id ? item : i))
    },
    removeItem (state: AdminState, id: string) {
      state.items = state.items.filter((i) => i.id !== id)
    }
  }
}

export default AdminModule