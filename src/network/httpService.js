/*
 * @Description:
 * @Author: dongshen
 * @Date: 2019-05-10 10:10:51
 * @LastEditors: dongshen
 * @LastEditTime: 2019-08-10 22:30:28
 */
/**
 * 公共接口集合
 */
// import network from './network' requestObject
import { requestObject } from './network'

// 获取用户信息
export function login (res) {
  let url = '/user/getUserInfo'
  return requestObject.get(url, res)
}
// 角色信息
export function developinfo (res) {
  let url = '/developrole'
  return requestObject.post(url, res)
}
//  新增角色
export function addrole (res) {
  let url = '/developrole/add'
  return requestObject.post(url, res)
}
//  新增角色路径
export function addrolepath (res) {
  let url = '/developrole/addrolepath'
  return requestObject.post(url, res)
}
//  删除角色
export function deleterole (res) {
  let url = '/developrole/delete'
  return requestObject.post(url, res)
}
// 根据id查询角色信息
export function queryRoleById (res) {
  let url = '/developrole/queryRoleById'
  return requestObject.post(url, res)
}
// update角色信息
export function updateRole (res) {
  let url = '/developrole/update'
  return requestObject.post(url, res)
}

// 能力类型接口集合：

// 获取能力类型列表信息
export function getAbilityTypeList (res) {
  let url = '/abilityType/getAbilityTypeList'
  return requestObject.post(url, res)
}
//  新增能力类型
export function abilityTypeAdd (res) {
  let url = '/abilityType/add'
  return requestObject.post(url, res)
}

//  删除能力类型
export function abilityTypeDelete (res) {
  let url = '/abilityType/delete'
  return requestObject.post(url, res)
}
// 根据id查询能力类型
export function queryAbilityTypeById (res) {
  let url = '/abilityType/queryAbilityTypeById'
  return requestObject.post(url, res)
}
// 修改能力类型
export function abilityTypeUpdate (res) {
  let url = '/abilityType/update'
  return requestObject.post(url, res)
}
