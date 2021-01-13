<template>
  <div id="skill">
    <h2 class="text-monospace page-head">Skill</h2>
    <div class="info">西村 直紀 のおすすめスキルセット一覧です！</div>
    <Chart/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'
import Chart from '@/components/Chart.vue'

export default {
  name: 'Skill',
  components: {
    Footer,
    Chart
  }
}
</script>
