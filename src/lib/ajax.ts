import axios from 'axios'

axios.defaults.baseURL = isDev ? '/' : 'http://150.158.148.72:3000'
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.timeout = 10000

export const ajax = {
  get: (path: string) => {
    return axios.get(path)
  },
  post: () => { },
  patch: () => { },
  delete: () => { },
}
