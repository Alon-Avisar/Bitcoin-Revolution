<template>
    <section class="contact-list">



        <ul>
            <TransitionGroup name="list">
                <li v-for="contact in contacts" :key="contact._id">
                    <ContactPreview :contact="contact" />
                    <section class="actions">
                        <button>
                            <RouterLink :to="`/contact/${contact._id}`"> Details</RouterLink>
                        </button>

                        <button>
                            <RouterLink :to="`/contact/edit/${contact._id}`"> Edit</RouterLink>
                        </button>

                        <button>
                            <RouterLink to="contact/edit">Add a Contact</RouterLink>
                        </button>
                        <button class="delete" @click="onDeleteContact(contact._id)">x</button>

                    </section>
                </li>
            </TransitionGroup>
        </ul>
    </section>
</template>
    
<script>

import ContactPreview from './ContactPreview.vue'

export default {
    props: {
        contacts: {
            type: Array,
            required: true
        }
    },
    data() {
        return {

        }
    },

    components: {
        ContactPreview,
    },
    methods: {
        onDeleteContact(contactId) {
            this.$emit('contact-removed', contactId)
        },
    },
}
</script>
    
<style lang="scss">
.contact-list ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(555px, 1fr));
    padding: 70px;
    height: 1000px;
    gap: 10px;
    list-style-type: none;




    li {
        background-color: rgb(230, 230, 236);
        padding: 10px;
        border-radius: 3px;
        background-color: rgb(230, 230, 236);
        padding: 10px;
        border-radius: 3px;
        display: flex;
        flex-direction: column;
        align-items: center;


    }

    .actions {
        display: flex;
        justify-content: center;
        margin-block-start: 1em;
        gap: 10px;

    }

    .delete {
        // bottom: 98px;
        // left: 36%;
        background: none;
        border: none;
        font-size: 20px;
    }

    button {
        a {
            color: black;
        }

        background: none;
        border: none;
        font-size: 15px;
    }
}

.list-move,
/* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
    transition: all 0.15s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
</style>
    