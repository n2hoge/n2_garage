<template>
  <div id="footer">
    <div class="mt-5">
      <ul v-for="( menu, i ) in menus" :key="i" class="footer-menu">
          <router-link :to="{ path:menu.dest }" class="text-monospace footer-menu__item" tag="li">{{ menu.item }}</router-link>
      </ul>
    </div>
    <div class="info mt-5">※一部の素敵すぎる画像素材は、</div>
<div class="info mb-5">Unsplash様とICOOON MONO様からお借りしています。</div>
  </div>
</template>

<style lang="scss" scoped>
.footer-menu {
  list-style: none;
  width: 70px;
  margin: 10px auto;
  padding: 2px;
  text-align: center;
}

.footer-menu__item {
  &:hover {
    cursor: pointer;
    }
  }
</style>

<script>
export default {
  name: 'Footer',
  el: '#footer',
  data() {
    return {
      menus: [
        { item: 'Top', dest: '/'},
        { item: 'Skill', dest: 'skill'},
        { item: 'Portfolio', dest: 'portfolio'},
        { item: 'About', dest: 'about'}
      ]
    }
  }
}
</script>
