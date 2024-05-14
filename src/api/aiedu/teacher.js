import request from '@/utils/request'

// 查询教师列表
export function listTeacher(query) {
  return request({
    url: '/aiedu/teacher/list',
    method: 'get',
    params: query
  })
}

// 查询教师详细
export function getTeacher(teacherId) {
  return request({
    url: '/aiedu/teacher/' + teacherId,
    method: 'get'
  })
}

// 新增教师
export function addTeacher(data) {
  return request({
    url: '/aiedu/teacher',
    method: 'post',
    data: data
  })
}

// 修改教师
export function updateTeacher(data) {
  return request({
    url: '/aiedu/teacher',
    method: 'put',
    data: data
  })
}

// 删除教师
export function delTeacher(teacherId) {
  return request({
    url: '/aiedu/teacher/' + teacherId,
    method: 'delete'
  })
}
