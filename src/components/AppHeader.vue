<template>
    <header class="app-header">
        <RouterLink to="/"> <h1>Bitcoin Revolution</h1></RouterLink>


        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            <RouterLink to="/contact">Contacts</RouterLink>
            <RouterLink to="/stats">Statistics</RouterLink>
            <RouterLink to="/login">Login</RouterLink>
        </nav>
    </header>
</template>
    
<script>
import { userService } from '../services/userService.js'
import {bitcoinService} from '../services/bitcoinService.js'

export default {
    data() {
        return {
            user: [],
            rate:  [],
        }
    },
    async created() {
        this.user = await userService.getUser()
        console.log('this.user:', this.user)

       
        
        
        



    },
    methods:{
        

        }

    }


</script>
    
<style lang="scss">

@font-face {
  font-family: BitcoinBold;
  src: url(../assets/Ubuntu-BoldItalic.ttf);
}
.app-header {
    font-family: BitcoinBold;
    display: flex;
    background-color: black;
    align-items: center;
    justify-content: space-between;
    // height: 8vh;
    padding: 20px;
    padding-inline: 73px;
    box-shadow: 1px -4px 50px -15px rgba(0, 0, 0, 0.76);
    max-width: 1750px;
    min-width:700px;
    border-bottom: 1px solid rgba(248, 240, 240, 0.101);

    h1 {
        color: white;
        font-family: BitcoinBold ;
    }

    .btc {
        height: 65px;

    }

    p {
        color: white;
    }

}
</style>
    