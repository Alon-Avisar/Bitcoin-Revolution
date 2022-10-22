<template>

    <section v-if="contacts">
        <div class="contact-details">

            <div class="section-2">
                <h1 class="wallet">Wallet Transactions</h1>
                <label for="amount">
                    <h1>Amount:</h1>
                </label>

                <input id="amount" type="number" ref="input" v-model.number="amount" />
                <span>
                    <h1> Transfer to:</h1>
                </span>
                <select id="" name="">
                    <option v-for="contact in contacts" :key="contact._id">{{contact.name}}</option>
                </select>

            </div>

            <button class="button-53" @click="onTransfer">Transfer</button>
        </div>
    </section>
    <!-- <div class="loader" v-else>Loading....</div> -->
</template>
        
<script>

import { contactService } from '../services/contactService.js'

export default {
    data() {
        return {
            contacts: null
        }
    },
    async created() {
        const contacts = await contactService.getContacts()
        this.contacts = contacts
        console.log(this.contacts);


    },
    methods: {
        onTransfer() {

        }

    }

}
</script>
        

<style lang="scss">
.wallet {
    font-size: 30px;
    bottom: 50px
}
.section-2{
    display: flex;
    flex-direction: column;
    bottom: 32px;
    gap:15px
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
    gap: 20px;

    input{
        border-radius: 10px;
    }
    select{
        border-radius: 10px;
    }
    a {
        color: black;
    }

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
    font-family: ui-sans-serif, system-ui, -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
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
        