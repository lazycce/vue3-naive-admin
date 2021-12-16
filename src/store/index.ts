import { createStore } from 'vuex'
import permission from './modules/permission'
import user from './modules/user'
import tagsView from './modules/tagsView'

export default createStore({
  modules:{
    permission,
    user,
    tagsView
  }
})

