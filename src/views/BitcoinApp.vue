<template>

    <ContactFilter @filter="onFilter" />
   <ContactList @contact-removed="onDeleteContact" :contacts="contactsTohow"/>
</template>

<script>

import {contactService} from '../services/contactService.js'
import {bitcoinService} from '../services/bitcoinService.js'
import ContactList from '../components/ContactList.vue'
import ContactFilter from '../components/ContactFilter.vue'


export default {
    data(){
        return {
            
            // contacts : [] ,
            filterBy : {},
        }
    },
    methods:{
        onDeleteContact(contactId){
            
            // contactService.deleteContact(contactId)
            // const idx = this.contacts.findIndex(contact => contact._id === contactId)
            // this.contacts.splice(idx, 1)
            this.$store.dispatch({type: 'removeContact' , contactId})
        },
        onFilter(filterBy){
            this.filterBy = filterBy
            console.log('filterBy:' , this.filterBy)
            
        }
       
    },
    computed:{
        contactsTohow(){
            const regex = new RegExp(this.filterBy.name , 'i')
            return this.contacts.filter(contact => regex.test(contact.name))
        },
        contacts(){
            return this.$store.getters.contacts
        }
       
    },
      async created(){
        this.$store.dispatch({type:'loadLoggedInUser'})

        this.$store.dispatch({type: 'loadContacts', })

        
    },
    components: {
    ContactList,
    ContactFilter,
}

}
</script>

<style lang="scss">


</style>
