<template function>
  <div id="about">
    <h2 class="text-monospace page-head">About</h2>
    <div class="info">西村 直紀 がどういうヤツかのご説明です！</div>
    <div class="d-flex flex-wrap justify-content-around mx-lg-5 my-4">
      <div v-for="( affair, i) in affairs" :key="i" class="d-flex flex-column align-items-center">
        <b-card
          border-variant="secondary"
          style="max-width: 48rem;"
          class="my-4 text-center">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img :src="affair.src" style="max-width: 27.6rem;" class="rounded-1 my-2 fade"></b-card-img>
              </b-col>
              <b-col>
                <b-card-body :title="affair.title" >
                  <b-card-text class="text-left ml-lg-3">
                    {{ affair.text }}
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
        </b-card>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'

export default {
  name: 'About',
  components: {
    Footer
  },
  el: '#about',
  data() {
    return {
      affairs: [
        { title: '自分から見た性格',
            src: require('@/assets/cooking.jpg'),
            text: '試行錯誤しながら積極的にどんどん行動していくことが大好き。やたらと好奇心が強く、人付き合いを含め新しい発見に大きな感動を覚えます。仕事はマジメに楽しくがモットー。実は心配性という面もあるので、すぐに報連相したがります。(^-^;'
        },
        { title: 'アフィリエイト事業',
            src: require('@/assets/smartphone.jpg'),
            text: 'WordPressで制作したサイトを5年ほど運営しています。月間で 10 ～ 15万円ほどの収益化に成功しており現在も継続中。元々コンテンツ制作や作業効率化への興味が強いため、ここから改めてプログラミングを学んでいます。(ﾟ∀ﾟ)'
        },
        { title: '受託案件',
            src: require('@/assets/dog.jpg'),
            text: '企業様からの委託でVtuberまとめサイトの記事コンテンツを制作しました。WordPress → djangoCMSへの移行時にはデータ管理やデバッグ作業も担当。現在はプロジェクトが終了しているので画像やリンクを貼れないのが残念です。(*_*)'
        },
        { title: '柔道整復師',
            src: require('@/assets/patrolteam.jpg'),
            text: '大学卒業後に国家資格を取得して12年間ほど携わったお仕事です。病院のリハビリスタッフ、接骨院の分院長などを経験しました。中でもスキー場での救護は、チームの役割の大切さを痛感した一番思い出深い現場です。(´▽｀)'
        },
      ]
    }
  }
}
</script>
