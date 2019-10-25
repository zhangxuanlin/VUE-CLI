import request from '@/http/http'

export function login(url, data) {
  return request({
    url: url,
    method: 'post',
    data
  })
}


export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}