import CommonResp from '@/mock/common-resp'
// import developrole from '@/mock/data/developrole'
import addAbility from '@/mock/data/abilityTypeData/addAbility'
import abilityTypelist from '@/mock/data/abilityTypeData/abilityTypelist'
import deleteAbility from '@/mock/data/abilityTypeData/deleteAbility'
import queryRoleById from '@/mock/data/queryRoleById'
import updateAbility from '@/mock/data/abilityTypeData/updateAbility'

const defaultpagesize = 8

function getAbilityTypeList (request) {
  // let res = developrole[0]
  let requestData = JSON.parse(request.data)
  let res = abilityTypelist[0]
  let msg = res.msg
  let [...datalistCopy] = res.data.data
  let li = requestData * defaultpagesize
  let hi = (requestData + 1) * defaultpagesize - 1
  let _res = datalistCopy.filter((item, idx) => {
    return idx >= li && idx <= hi
  })

  if (res !== null) {
    // let data = res.data
    // data.data = _res
    let data = {
      returnData: {
        datalist: _res,
        data: res.data
      }
    }
    return [200, new CommonResp(10000, msg, data).toString()]
  } else {
    return [200, new CommonResp(10001, msg, null).toString()]
  }
}

function abilityTypeAdd (request) {
  let requestData = JSON.parse(request.data)
  let res = addAbility[0]
  res.name = requestData.val1
  res.memo = requestData.val2
  abilityTypelist[0].data.data.push(res)
  if (res !== null) {
    let data = abilityTypelist[0]
    return [200, new CommonResp(null, '', data).toString()]
  } else {
    return [200, new CommonResp(null, '', null).toString()]
  }
}

// delete-role-info-by-id
function abilityTypeDelete (request) {
  let requestData = JSON.parse(request.data)
  let res = deleteAbility[0]
  let idx = []
  let roledata = abilityTypelist[0].data.data
  roledata.forEach((item, index) => {
    if (item.id === requestData) {
      idx.push(index)
    }
  })
  idx.forEach(idxToDel => {
    roledata.splice(idxToDel, 1)
  })
  let data = abilityTypelist[0]
  return [200, new CommonResp(res.code, res.msg, data).toString()]
}
// 根据ifd查询角色信息
function queryAbilityTypeById (request) {
  let requestData = JSON.parse(request.data)
  let res = queryRoleById[0]
  let roledata = abilityTypelist[0].data.data
  let role = ''
  roledata.forEach((item, index) => {
    if (item.id === requestData) {
      role = {
        id: item.id,
        name: item.name,
        memo: item.memo,
        nodelist: item.nodelist
      }
    }
  })
  return [200, new CommonResp(res.code, res.msg, role).toString()]
}
// update role
function abilityTypeUpdate (request) {
  let requestData = JSON.parse(request.data)
  // let {id, val1, val2} = requestData
  let roledata = abilityTypelist[0].data.data
  roledata.forEach((item, index) => {
    if (item.id === requestData.id) {
      item.name = requestData.value.val1
      item.memo = requestData.value.val2
    }
  })
  let res = updateAbility[0]
  if (res !== null) {
    let data = abilityTypelist[0]
    return [200, new CommonResp(null, '', data).toString()]
  } else {
    return [200, new CommonResp(null, '', null).toString()]
  }
}

const abilityMocks = [{
  method: 'post',
  url: '/abilityType/getAbilityTypeList',
  callback: getAbilityTypeList
},
{
  method: 'post',
  url: '/abilityType/add',
  callback: abilityTypeAdd
},
{
  method: 'post',
  url: '/abilityType/delete',
  callback: abilityTypeDelete
},
{
  method: 'post',
  url: '/abilityType/queryAbilityTypeById',
  callback: queryAbilityTypeById
},
{
  method: 'post',
  url: '/abilityType/update',
  callback: abilityTypeUpdate
}
]
export default abilityMocks
