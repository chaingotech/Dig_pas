import axiosInstance, {
  PASSPORTS_PATH
} from './api'

class AdminService {
  getList (): Promise<Record<'data', any[]>> {
    return axiosInstance.get(PASSPORTS_PATH)
  }
  
  createItem (data: Record<string, any>): Promise<Record<'data', any>> {
    return axiosInstance.post(PASSPORTS_PATH, {
      data: {
        type: 'voyage',
        attributes: {
          customAttributes: {
            ...data
          }
        }
      }
    })
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
    })
  }

  removeItem (id: string): Promise<void> {
    return axiosInstance.delete(`${PASSPORTS_PATH}/${id}`)
  }
}

export default new AdminService();