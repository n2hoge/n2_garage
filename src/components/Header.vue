<template>
  <div id="header">
    <!-- navigation bar -->
    <b-navbar class="py-3 d-flex align-item-center text-monospace fixed-top" toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand>
          <router-link to="/" class="h1 title text-light text-monospace"><b-img v-bind="mainProps" class="mx-3 mb-2" ></b-img>n2_Garage</router-link>
      </b-navbar-brand>

      <!-- responsive navigation-menu -->
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto" >
          <b-nav-item v-for="(item, i) in menus" :key="i" class="ml-auto px-4">
              <router-link :to="{ path:item.mark }" class="text-light text-monospace">{{ item.menu }}</router-link>
          </b-nav-item>

        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
  </div>
</template>

<style scoped>
.title {
  font-size: 1.5em;
}
</style>

<script>
export default {
  name: 'Header',
  el: '#header',
  data() {
    return {
      mainProps: {
        src: require('@/assets/icon.png'),
        width: 32,
        height: 32
      },
      menus: [
        { menu: 'Top', mark: '/'},
        { menu: 'Skill', mark: 'skill'},
        { menu: 'Portfolio', mark: 'portfolio'},
        { menu: 'About', mark: 'about'}
      ]
    }
  },
}
</script>
