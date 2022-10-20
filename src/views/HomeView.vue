<template>
    <div class="home-page">

        <div class="welcome-user">
            <h1 v-if="rate">Bitcoin Price ${{rate.last}}</h1>

            <h2> Welcome back {{user.name}},
                <br> Your current balance is ${{user.balance}}.
            </h2>
        </div>

        <img src="../assets/background2.jpg" alt="">
    </div>
</template>



<script >
import { userService } from '../services/userService.js'
import { bitcoinService } from '../services/bitcoinService.js'



export default {
    data() {
        return {
            user: [],
            rate: [],

        }
    },
    async created() {
        this.user = await userService.getUser()
        console.log('this.user:', this.user)


        this.rate = await bitcoinService.getRate()
        console.log('this.rate:', this.rate)

    },



}

</script>


<style lang="scss">
.home-page {

    color: white;
    letter-spacing: 1.2px;

    .welcome-user {
        display: flex;
        top: 100px;
        margin-right: 40px;

        min-width: 1500px;
        max-width: 1500px;
        white-space: 0px;
        align-content: flex-start;
        flex-direction: column;
        align-items: center;
        gap: 18px;
    }

    h2 {
        z-index: 1;
        
    }

    img {
        width: 1010px;
        margin-left: 240px;
        top: 12px;
    }

}
</style>
    