import request from '@/utils/request'

// 查询科目列表
export function listSubject(query) {
  return request({
    url: '/aiedu/subject/list',
    method: 'get',
    params: query
  })
}

// 查询科目详细
export function getSubject(subjectId) {
  return request({
    url: '/aiedu/subject/' + subjectId,
    method: 'get'
  })
}

// 新增科目
export function addSubject(data) {
  return request({
    url: '/aiedu/subject',
    method: 'post',
    data: data
  })
}

// 修改科目
export function updateSubject(data) {
  return request({
    url: '/aiedu/subject',
    method: 'put',
    data: data
  })
}

// 删除科目
export function delSubject(subjectId) {
  return request({
    url: '/aiedu/subject/' + subjectId,
    method: 'delete'
  })
}
