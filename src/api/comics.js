import { http } from '../util/http'

export const getComics = ({ key, from = 1, size = 10 }) => {
  return http.httpGet(
    `https://api.pingcc.cn/comic/search/${key}/${key}/${from}/${size}`
  )
}
