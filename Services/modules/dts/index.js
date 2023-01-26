import { api } from '../../api'
import fetchOne from './fetchOne'
import fetchDetail from './fetchDetail'

export const dtsApi = api.injectEndpoints({
  endpoints: build => ({
    fetchOne: fetchOne(build),
    fetchDetail: fetchDetail(build),
  }),
  overrideExisting: false,
  
})

export const { useLazyFetchOneQuery, useLazyFetchDetailQuery } = dtsApi
