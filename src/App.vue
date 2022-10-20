<script >
import AppHeader from './components/AppHeader.vue';

export default {
  components: { AppHeader,   }
}
</script>


<template>

  <AppHeader />

  <main class="main-container">
    <RouterView />
  </main>

</template>

<style lang="scss">
.main-container{
  max-width: 1750px;
background-color: black;
  
}
nav a.router-link-exact-active {
  color: white
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
