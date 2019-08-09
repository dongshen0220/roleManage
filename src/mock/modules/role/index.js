import CommonResp from '@/mock/common-resp'
// import developrole from '@/mock/data/developrole'
import addrole from '@/mock/data/addrole'
import roleforpage from '@/mock/data/roleforpage'
import deleterole from '@/mock/data/deleterole'
import queryRoleById from '@/mock/data/queryRoleById'
import updaterole from '@/mock/data/updaterole'

const defaultpagesize = 8

function getRoleInfo (request) {
  // let res = developrole[0]
  let requestData = JSON.parse(request.data)
  let res = roleforpage[0]
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

function addRoleInfo (request) {
  let requestData = JSON.parse(request.data)
  let res = addrole[0]
  res.name = requestData.val1
  res.roleWayList[0].name = requestData.val2
  roleforpage[0].data.data.push(res)
  if (res !== null) {
    let data = roleforpage[0]
    return [200, new CommonResp(null, '', data).toString()]
  } else {
    return [200, new CommonResp(null, '', null).toString()]
  }
}

// delete-role-info-by-id
function deleteRoleInfo (request) {
  let requestData = JSON.parse(request.data)
  let res = deleterole[0]
  let idx = []
  let roledata = roleforpage[0].data.data
  roledata.forEach((item, index) => {
    if (item.id === requestData) {
      idx.push(index)
    }
  })
  idx.forEach(idxToDel => {
    roledata.splice(idxToDel, 1)
  })
  let data = roleforpage[0]
  return [200, new CommonResp(res.code, res.msg, data).toString()]
}
// 根据ifd查询角色信息
function queryRoleInfoById (request) {
  let requestData = JSON.parse(request.data)
  let res = queryRoleById[0]
  let roledata = roleforpage[0].data.data
  let role = ''
  roledata.forEach((item, index) => {
    if (item.id === requestData) {
      role = {
        id: item.id,
        name: item.name,
        memo: item.memo
      }
    }
  })
  return [200, new CommonResp(res.code, res.msg, role).toString()]
}
// update role
function updateRoleInfo (request) {
  let requestData = JSON.parse(request.data)
  // let {id, val1, val2} = requestData
  let roledata = roleforpage[0].data.data
  roledata.forEach((item, index) => {
    if (item.id === requestData.id) {
      item.name = requestData.value.val1
      item.memo = requestData.value.val2
    }
  })
  let res = updaterole[0]
  if (res !== null) {
    let data = roleforpage[0]
    return [200, new CommonResp(null, '', data).toString()]
  } else {
    return [200, new CommonResp(null, '', null).toString()]
  }
}

const roleMocks = [{
  method: 'post',
  url: '/developrole',
  callback: getRoleInfo
},
{
  method: 'post',
  url: '/developrole/add',
  callback: addRoleInfo
},
{
  method: 'post',
  url: '/developrole/delete',
  callback: deleteRoleInfo
},
{
  method: 'post',
  url: '/developrole/queryRoleById',
  callback: queryRoleInfoById
},
{
  method: 'post',
  url: '/developrole/update',
  callback: updateRoleInfo
}
]
export default roleMocks
