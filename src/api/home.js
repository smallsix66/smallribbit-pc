import request from '@/utils/request'
//品牌推荐
export const findBrand = (limit) => {
  return request('/home/brand', 'get', {limit})
}

/**
 * 获取广告图
 * @returns Promise
 */
 export const findBanner = () => {
  return request('/home/banner', 'get')
}
// 新鲜好物
export const findNew = () => {
  return request('home/new', 'get')
}
// 人气推荐
export const findHot = () => {
  return request('home/hot', 'get')
}

//获取商品信息
export const findGoods = () => {
  return request('home/goods', 'get')
}

// 获取最新专题
export const findSpecial = () => {
  return request('home/special', 'get')
}
