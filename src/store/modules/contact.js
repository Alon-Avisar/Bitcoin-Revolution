import {contactService} from '../../services/contactService.js'
import {userService} from '../../services/userService.js'
import {storageService} from '../../services/storage.service'



export default {
    state:{
        contact:[]
    },

    // must be synchronous can't be async !!
    mutations:{
        setContacts(state ,{contacts}){
            state.contacts = contacts 

        },
        removeContact(state ,{contactId}){
        const idx  = state.contacts.findIndex(contact => contact._id === contactId)   
        state.contacts.splice(idx,1)
         
        },
        saveContact(state,{contact}){
            const contactId = contact._id
            const idx  = state.contacts.findIndex(contact => contact._id === contactId)   
            state.contacts.splice(idx,1, contact)
             
        }

    },
    // all the async go to the action!!

    //  אחרי שהאקשן קיבל את מה שהאו צריך מהסוויס בהצלחה הוא יפעל לפי איזשהו מיוטיישן, כדי שהמיוטשן יעדכן את הסטייט של האפליקציה
    actions:{
      async loadContacts(context ){
      const contacts = await contactService.getContacts() 
      context.commit({type:'setContacts' , contacts})
      
        },
        async removeContact({commit} , {contactId}){
        await contactService.deleteContact(contactId)    
        commit({type:'removeContact' , contactId})
        },
        async saveContact({commit} , {contact}){
            await contactService.saveContact(contact)    
            commit({type:'saveContact' , contact})
        },
        async login(context, { cred }) {
            const loggedInUser = await userService.login(cred);
            console.log(':loggedInUser' , loggedInUser)
            
            storageService.save()
            context.commit({ type: 'setUser', loggedInUser });
        },

    },
    getters:{
        contacts(state){
            return state.contacts
        },
            loggedInUser(state) {
              return state.user;
         },
    }
}