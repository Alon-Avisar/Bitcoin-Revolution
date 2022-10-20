<template>

    <section class="contact-filter">
        
        <input @input="onFilter" v-model="filterBy.name" type="text" placeholder="Search contact">
    </section>
</template>
    
<script>

export default {
    data() {
        return {
            filterBy: { name: '' }
        }
    },
    methods:{
        onFilter() {
        this.$emit('filter' , this.filterBy)            
        }
    }

}
</script>
    
<style lang="scss" scoped>
h1 {
    color: white;
}

.contact-filter {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    top: 35px;

    input {
        display: flex;
        width: 400px;
        border-radius: 10px;
        height: 30px;


    }
}
</style>
    