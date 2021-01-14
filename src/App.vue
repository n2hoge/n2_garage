<template>
  <div id="app v-cloak">
    <!-- route header -->
    <Header/>
    <!-- route top page containts -->
    <div>
      <router-link to="/"></router-link>
    </div>
    <!-- page transition animation -->
    <transition appear mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<style scoped>
.v-enter {
  transform: translate(0, 30px);
  opacity: 0;
}
.v-enter-active {
  transition: all .7s .6s ease;
}
.v-enter-to {
  opacity: 1;
}

</style>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>
