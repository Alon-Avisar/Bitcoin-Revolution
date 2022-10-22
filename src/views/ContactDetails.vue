<template>
    <div v-if="contact" class="contact-details">
        <div class="image-continer">
            <img v-bind:src="getImgUrl" />
            <h2>{{contact.name}}</h2>
        </div>
        <h3>{{contact.email}}</h3>
        <h3>{{contact.phone}}</h3>

        <button class="button-53" role="button">
            <RouterLink class="go-back" to="/contact">Back</RouterLink>
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
        if (!contact) {

            this.$router.back()
            return
        }
        this.contact = contact

    },
    computed: {
        getImgUrl() {
            return `https://joeschmoe.io/api/v1/${this.contact._id}mail@ashallendesign.co.uk`


        },
    },



}
</script>
        
<style lang="scss" scoped>

.go-back{
    z-index: 1;
}
img {
    height: 150px;
    border-radius: 10px;
    bottom: 40px;

}

.contact-details {
    color: #100a0a;
    background-color: rgb(233, 231, 231);
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    width: 400px;
    margin: auto;
    top: 70px;
    border-radius: 10px;
    box-shadow: 1px -4px 50px -15px rgb(255 255 255 / 76%);
    transition: box-shadow 0.3s ease-in-out;
a{
    color: black;
}

}

h1 {
    color: rgb(254, 254, 254);
}

.loading {
    color: white;

}
.button-53 {
  background-color: rgb(247 146 27);
  border: 0 solid #E5E7EB;
  box-sizing: border-box;
  color: #000000;
  display: flex;
  font-family: ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  font-size: 1rem;
  font-weight: 700;
  justify-content: center;
  line-height: 1.75rem;
  padding: .75rem 1.65rem;
  position: relative;
  text-align: center;
  text-decoration: none #000000 solid;
  text-decoration-thickness: auto;
  width: 50%;
  max-width: 460px;
  position: relative;
  cursor: pointer;
  transform: rotate(-2deg);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  top: 40px;
}

.button-53:focus {
  outline: 0;
}

.button-53:after {
  content: '';
  position: absolute;
  border: 1px solid #000000;
  bottom: 4px;
  left: 4px;
  width: calc(100% - 1px);
  height: calc(100% - 1px);
}

.button-53:hover:after {
  bottom: 2px;
  left: 2px;
}

@media (min-width: 768px) {
  .button-53 {
    padding: .75rem 3rem;
    font-size: 1.25rem;
  }
}
</style>
        