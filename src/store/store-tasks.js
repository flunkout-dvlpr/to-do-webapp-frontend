const state = {
  tasks: [
    {
      id: 1,
      name: 'Learn Vue.js',
      completed: false,
      dueDate: '2020/04/20',
      dueTime: '00:00'
    },
    {
      id: 2,
      name: 'Learn Quasar FrameWork',
      completed: true,
      dueDate: '2020/04/31',
      dueTime: '12:00'
    },
    {
      id: 3,
      name: 'Learn JavaScript',
      completed: false,
      dueDate: '2020/05/10',
      dueTime: '12:00'
    }
  ]
}

const mutations = {

}

const actions = {

}

const getters = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
