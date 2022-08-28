<template>
  <div id="header">
    <!-- navigation bar -->
    <b-navbar class="py-2 d-flex align-item-center text-monospace fixed-top" toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand>
          <h1 class="title text-light text-monospace"><b-img v-bind="mainProps" class="mx-3 mb-2" ></b-img>n2_Garage</h1>
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

</style>

<script>
export default {
  name: 'Header',
  el: '#header',
  data() {
    return {
      mainProps: {
        src: require('@/assets/icon.png'),
        width: 24,
        height: 24
      },
      menus: [
        { menu: 'Top', mark: '/'},
        { menu: 'Skill', mark: 'skill'},
        { menu: 'Experience', mark: 'experience'},
        { menu: 'About', mark: 'about'}
      ]
    }
  },
}
</script>
