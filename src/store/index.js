
import { createStore } from "vuex"
import contact from './modules/contact.js'
import {userService} from '../services/userService.js'


const storeOption = {
  strict: true,
    state () {
      return {
        user: null
      }
    },
    mutations: {
      setUser(state, payload) {
        state.user = payload.loggedInUser;
      },
    },
    modules:{
      contact,
    },
    actions:{
      async login(context, { cred }) {
        const loggedInUser = await userService.getUser();
        context.commit({ type: 'setUser', loggedInUser });
      },
    }
  }

  const store = createStore(storeOption)

  export default store
