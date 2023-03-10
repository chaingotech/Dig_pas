/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import AdminService from '@/services/admin.service'
import TokenService from '@/services/token.service'

const initialState = {
  items: [] as any[]
}

export type AdminState = typeof initialState

const AdminModule = {
  namespaced: true,
  state: initialState,
  actions: {
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