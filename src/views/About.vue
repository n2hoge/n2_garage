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
                <b-card-img :src="affair.src" class="about-image rounded-1 my-2 fade"></b-card-img>
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

<style lang="scss" scoped>
.about-image {
  max-width: 27.6rem;
  max-height: 18rem;
  object-fit: contain;
}
</style>

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
        { title: 'ゲーム開発',
            src: require('@/assets/hoge.png'),
            text: ' ちょっと頭がおかしいくらいのゲーマーです。長年やってるくせにプレイは下手くそですが、開発にも興味を持ち自主制作を始めました。当面の目標は、オリジナルタイトルを完成させて、インディーゲームイベントに参加することです。(ﾟ∀ﾟ)'
        },
        { title: 'モーターサイクル',
            src: require('@/assets/motorcycle.jpg'),
            text: 'システム開発にハマる前は、バイク（特に旧車）に夢中でした。乗るよりもイジる方が楽しかったので、一通りの整備やカスタムは自分で行ってしまう状態。エンジンの載せ替えまでやったときは、友人にドン引きされました。(*_*)'
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
