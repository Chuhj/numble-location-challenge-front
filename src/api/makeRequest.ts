import axiosInstance from './config/axios'

interface Mutation {
  endpoint: string
  body: any
}

export const makeGet = async (endpoint: string) => {
  const { data } = await axiosInstance.get(endpoint)
  return data
}

export const makePost = ({ endpoint, body }: Mutation) => axiosInstance.post(endpoint, body)

export const makePatch = ({ endpoint, body }: Mutation) => axiosInstance.patch(endpoint, body)

export const makeDelete = (endpoint: string) => axiosInstance.delete(endpoint)

export const makePut = ({ endpoint, body }: Mutation) => axiosInstance.put(endpoint, body)
