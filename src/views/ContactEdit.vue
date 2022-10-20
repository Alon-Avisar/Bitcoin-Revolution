<template>
    <div v-if="contact" class="contact-edit">
        <h1>Edit</h1>
        <input v-model="contact.name" type="text">
        <input v-model="contact.phone" type="number">
        <button @click="onSave">Save</button>
    </div>
    <!-- <div class="loader" v-else>Loading....</div> -->
</template>
        
<script>

import { contactService } from '../services/contactService.js'

export default {
    data() {
        return {
            contact: null,
        }
    },
    methods: {
        async onSave() {
        this.$store.dispatch({type:'saveContact' , contact})

        this.$router.back()
        }
    },
    async created() {
        const _id = this.$route.params._id
        if (_id) {
            this.contact = await contactService.getContactById(_id)
        } else {
            this.contact = await contactService.getEmptyContact()

        }

    },



}
</script>
        
<style lang="scss">
.contact-edit {
    background-color: rgb(169, 163, 52);
}
.loader{
    color: white;
}
</style>
        