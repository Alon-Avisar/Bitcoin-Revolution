<template>
    <h2>{{contact.name}}</h2>
    <h4>{{contact.email}}</h4>
    <h4>{{contact.phone}}</h4>




</template>
        
<script>

export default {
    props: {
        contact: {
            type: Object,
            required: true,

        }
    },

}
</script>
        
<style lang="scss">

</style>
        