<template>
  <div id="app">
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
  transition: all .5s 0s ease;
}
.v-enter-to .v-leave {
  opacity: 1;
}
.v-leave-to {
  opacity: 0;
}
.v-leave-active {
  transition: all .3s 0s ease;
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
