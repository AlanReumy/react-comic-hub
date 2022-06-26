import { useQuery } from 'react-query'

export const useGetFetch = (queryKey, fetchFn, params, option) => {
  return useQuery(queryKey, () => fetchFn(params), {
    refetchOnWindowFocus: false,
    ...option
  })
}
