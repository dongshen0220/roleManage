/*
 * @Description:
 * @Author: dongshen
 * @Date: 2019-06-01 12:06:29
 * @LastEditors: dongshen
 * @LastEditTime: 2019-08-15 12:03:03
 */
import users from '@/mock/data/user'
import CommonResp from '@/mock/common-resp'

function getUserInfo (request) {
  // let requestData = JSON.parse(request.data)
  let res = users[0]
  let msg = res.msg
  if (res !== null) {
    let data = res.data
    return [200, new CommonResp(10000, msg, data).toString()]
  } else {
    return [200, new CommonResp(10001, msg, null).toString()]
  }
}

const userMock = [{
  method: 'get',
  url: '/user/getUserInfo',
  callback: getUserInfo
}]

export default userMock
