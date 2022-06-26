import { http } from '../util/http'

export const getComics = ({ key, from = 1, size = 10 }) => {
  return http.httpGet(
    `https://api.pingcc.cn/comic/search/${key}/${key}/${from}/${size}`
  )
}

export const getComicChapter = (cartoonId) => {
  return http.httpGet(`https://api.pingcc.cn/comicChapter/search/${cartoonId}`)
}

export const getComicContent = (chapterId) => {
  return http.httpGet(`https://api.pingcc.cn/comicContent/search/${chapterId}`)
}
