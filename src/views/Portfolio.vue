<template function>
  <div id="portfolio">
    <h2 class="text-monospace page-head">Portfolio</h2>
    <div class="info">西村 直紀 が作っちゃったモノの解説です！</div>
    <div class="d-flex flex-wrap justify-content-around mx-lg-5 my-4">
      <div v-for="( product, i) in products" :key="i" class="d-flex flex-column align-items-center">
        <b-card
          border-variant="secondary"
          header-text-variant="white"
          header-bg-variant="dark"
          header-class="card-header"
          v-bind="product"
          style="max-width: 50em;"
          class="my-4 text-center">
            <b-row no-gutters>
              <b-col md="6" class="mx-3">
                <b-card-img :src="product.src" style="max-width: 27.6rem;" class="rounded-1 my-4 fade"></b-card-img>
              </b-col>
              <b-col>
                <b-card-text class="m-3 text-left">
                  {{ product.text }}
                </b-card-text>
              </b-col>
            </b-row>
            <div class="d-flex justify-content-center my-4">
              <b-button pill :href="product.href" size="lg" class="text-monospace button-link px-4">{{ product.link }}</b-button>
            </div>
        </b-card>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<style lang="scss" scoped>
.button-link {
  background-color: #f7be16;
  border:  none;
  transition: .4s;

  &:hover {
    background-color: #7a4d1d;
  }
}

</style>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'

export default {
  name: 'Portfolio',
  components: {
    Footer
  },
  el: "#portofolio",
  data() {
    return {
      products: [
        { header: '今ご覧のポートフォリオサイト',
            'sub-title':'制作環境：Vue.js(Vue/CLI)/BootstrapVue',
            src: require('@/assets/n2garage.jpg'),
            text:
              'フレームワークの理解を深めるために2週間ほどで制作したSPA。Vue.jsとBootstrapの導入、応用方法が把握できました。SPAがWeb制作の第一選択になるとは考えませんが、読み込み後の軽快さはこの上なく爽快です。自身の今後の引き出しにしておきたい素晴らしい仕組みだと感じました。これからSSRなどの制作も経験した上で、長所や短所をしっかり理解していきたいと思うところです。副次的な収穫として、npmとNode.jsに触れたことが後学のためにも大変よい経験になりました。',
            href: '/',
            link: '→ Top'
        },
        { header: 'なんちゃってスクラッチなサイト',
            'sub-title':'制作環境：HTML5/CSS3(SCSS)/JavaScript(ES6)',
            src: require('@/assets/cytal.jpg'),
            text:
              'Web制作の基礎工程を知るために1ヶ月ほどで制作したサイト。デザインは講座のコードをアレンジしたものですが、丁寧に理解しつつ作ることで、マークアップやJavaScriptプログラミングの理論をしっかりと把握できました。全体的にシンプルで泥臭い内容ですが、初期の開発経験としてはむしろベストな選択だったと思っています。デプロイ後、表示速度が遅くていろいろ試していたところ、webpackのバンドル処理で改善されたので、これまた思わぬ糧になりました。',
            href: 'https://portfolio-n2.netlify.app/',
            link: '→ Link'
        }
      ]
    }
  }
}
</script>
