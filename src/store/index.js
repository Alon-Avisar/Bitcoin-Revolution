
import { createStore } from "vuex"
import contact from './modules/contact.js'


const storeOption = {
  strict: true,
    state () {
      return {
        user: null
      }
    },
    mutations: {
      increment (state) {
        state.count++
      }
    },
    modules:{
      contact,
    },
    actions:{
      async login(context, { cred }) {
        const loggedInUser = await userService.login(cred);
        context.commit({ type: 'setUser', loggedInUser });
      },
    }
  }

  const store = createStore(storeOption)

  export default store
