import axiosInstance, {
  PASSPORTS_PATH,
  PASSPORTS_PUBLIC_PATH
} from './api'

class AdminService {
  getList (): Promise<{ data: any[] }> {
    return axiosInstance.get(PASSPORTS_PATH)
      .then(({ data }) => data)
  }

  getPassport (id: string): Promise<{ data: any }> {
    return axiosInstance.get(`${PASSPORTS_PATH}/${id}`)
      .then(({ data }) => data)
  }

  getPassportPublic (id: string): Promise<{ data: any }> {
    return axiosInstance.get(`${PASSPORTS_PUBLIC_PATH}/${id}`)
      .then(({ data }) => data)
  }
  
  createItem ({
    userId,
    organizationId,
    data
  }: {
    userId: string|null
    organizationId: string|null
    data: Record<string, any>
  }): Promise<Record<'data', any>> {
    return axiosInstance.post(PASSPORTS_PATH, {
      data: {
        type: 'voyage',
        attributes: {
          userId,
          organizationId,
          voyageNumber: (Math.random() * new Date().getTime()).toString(),
          customAttributes: {
            ...data
          }
        }
      }
    }).then(({ data }) => data)
  }

  updateItem ({
    id,
    data
  }: {
    id: string
    data: Record<string, any>
  }): Promise<Record<'data', any>> {
    return axiosInstance.patch(`${PASSPORTS_PATH}/${id}`, {
      data: {
        attributes: {
          customAttributes: {
            ...data
          }
        }
      }
    }).then(({ data }) => data)
  }

  removeItem (id: string): Promise<void> {
    return axiosInstance.delete(`${PASSPORTS_PATH}/${id}`)
  }
}

export default new AdminService();