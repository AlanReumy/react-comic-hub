import { useQuery } from 'react-query'
import { getComics } from '../api/comics'

export const useFetchComics = (onSuccess, onError, params) => {
  return useQuery('comics', () => getComics(params), {
    enabled: false,
    onSuccess,
    onError
  })
}
