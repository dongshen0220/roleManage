import MockAdapter from 'axios-mock-adapter'
// import Mock from 'mockjs'
// import { requestObject } from '@/network/network'
import { instance } from '@/network/network'

import user from './modules/user'
import role from './modules/role'
import abilityType from './modules/abilityType'

const modulesToMock = [
  ...role,
  ...user,
  ...abilityType
]

function mockInit () {
  let _mock = new MockAdapter(instance)

  modulesToMock.forEach(item => {
    if (item.method === 'get') {
      if (item.callback) {
        _mock.onGet(item.url).reply(item.callback)
      } else {
        _mock.onGet(item.url).reply(item.delay || 200, item.data)
      }
    } else if (item.method === 'post') {
      if (item.callback) {
        _mock.onPost(item.url).reply(item.callback)
      } else {
        _mock.onPost(item.url).reply(item.delay || 200, item.data)
      }
    }
  })
}

export default mockInit
