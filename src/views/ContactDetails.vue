<template>
    <div v-if="contact" class="contact-details">
        <h1> Contact Details</h1>
        <h2>{{contact.name}}</h2>
        <h3>{{contact.email}}</h3>
        <h3>{{contact.phone}}</h3>
        <button>
            <RouterLink to="/contact"></RouterLink>
        </button>
    </div>
    <div class="loading" v-else>Loading contact details...</div>

</template>
        
<script>

import { contactService } from '../services/contactService.js'

export default {
    data() {
        return {
            contact: null,
        }
    },
    async created() {

        const _id = this.$route.params._id
         const contact = await contactService.getContactById(_id)
        console.log('this.contact:', contact.name)
        if(!contact){

            this.$router.back() 
            return
        } 
        this.contact = contact 

    },



}
</script>
        
<style lang="scss">
.contact-details {
    color: black;
    background-color: gainsboro;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 22px;
    width: 300px;
    margin: auto;
    top: 70px;
    border-radius: 10px;
    box-shadow: 1px -4px 50px -15px rgba(255, 255, 255, 0.76);

}

h1 {
    color: rgb(254, 254, 254);
}

.loading {
    color: white;

}
</style>
        