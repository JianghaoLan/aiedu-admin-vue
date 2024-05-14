import request from '@/utils/request'

// 查询课程课件图片列表
export function listCourseImage(query) {
  return request({
    url: '/aiedu/courseImage/list',
    method: 'get',
    params: query
  })
}

// 查询课程课件图片详细
export function getCourseImage(imageId) {
  return request({
    url: '/aiedu/courseImage/' + imageId,
    method: 'get'
  })
}

// 新增课程课件图片
export function addCourseImage(data) {
  return request({
    url: '/aiedu/courseImage',
    method: 'post',
    data: data
  })
}

// 修改课程课件图片
export function updateCourseImage(data) {
  return request({
    url: '/aiedu/courseImage',
    method: 'put',
    data: data
  })
}

// 删除课程课件图片
export function delCourseImage(imageId) {
  return request({
    url: '/aiedu/courseImage/' + imageId,
    method: 'delete'
  })
}
