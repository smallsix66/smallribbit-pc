import { findAllCategory } from '@/api/category'
import { topCategory } from '@/api/constants'

export default ({
  namespaced: true,
  state: () => {
    return {
      list: topCategory.map(item => ({ name: item }))
    }
  },
  mutations: {
    setList(state, headCategory) {
      state.list = headCategory
    },
    show(state, item) {
      const category = state.list.find(category => category.id === item.id)
      category.open = true
    },
    hide(state, item) {
      const category = state.list.find(category => category.id === item.id)
      category.open = false
    }
  },
  actions: {
    async getList({ commit }) {
      const {result} = await findAllCategory();
      // 给一级分类加上一个控制二级分类显示隐藏的数据open
      result.forEach(item => {
        item.open = false;
      });
      // 获取数据成功，提交mutations进行数据修改
      commit('setList', result)
    }
  }
})
