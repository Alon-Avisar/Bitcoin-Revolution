<template>

    <section class="contact-filter">
        <input @input="onFilter" v-model="filterBy.name" type="text" placeholder="Search contact">
        <button>
            <RouterLink to="contact/edit"></RouterLink>Add a Contact  
        </button>
    </section>
</template>
    
<script>

export default {
    data() {
        return {
            filterBy: { name: '' }
        }
    },
    methods: {
        onFilter() {
            this.$emit('filter', this.filterBy)
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    top: 35px;
    z-index: 1;
    gap: 20px;

    button {
        font-size: 20px;
        border-radius: 5px;
        margin-right: 00px;
    }

    input {
        display: flex;
        width: 400px;
        border-radius: 10px;
        height: 30px;


    }
}

</style>
    