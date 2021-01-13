<template>
  <div id="portfolio">
    <h2 class="text-monospace mt-3">Portfolio</h2>
    <div class="info">西村 直紀 が制作してしまったモノの解説です！</div>
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
                <b-card-img :src="product.src" style="max-width: 27.6rem;" class="rounded-1 my-4"></b-card-img>
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
            'sub-title':'制作環境：Vue.js(Vue/CLI)/Node.js(npm)/BootstrapVue',
            src: require('@/assets/n2garage.jpg'),
            text:
              'フレームワークの理解を深めるために2週間ほどで制作したSPA。Vue.jsとBootstrapの導入、応用方法が把握できました。SPAがWeb制作の第一選択になるとは考えませんが、読み込み後の軽快さはこの上なく爽快です。自身の今後の引き出しにしておきたい素晴らしい仕組みだと感じました。今後、SSRなどの制作経験も積んだ上で比較して、メリットとデメリットをしっかり理解したいと思うところです。npmの利用でNode.jsに触れたことも非常に大きな経験となっています。',
            href: '/',
            link: '→ Top'
        },
        { header: 'なんちゃってスクラッチなサイト',
            'sub-title':'制作環境：HTML5/CSS3(SCSS)/JavaScript(ES6)',
            src: require('@/assets/cytal.jpg'),
            text:
              'Web制作の基礎工程を知るために1ヶ月ほどで制作したサイト。デザインやコードは学んだ講座の内容をアレンジしたものでしたが、丁寧に理解しながら作っていくことで、マークアップとJavaScriptプログラミングの理論が把握できました。利用ライブラリはSwiper.jsとbootstrap-reboot.cssのみという非常に泥臭い方法（笑）。しかし初期のWeb制作経験としてはむしろベストな選択だったと思っています。GitHubの利用方法も身に付いたので、その後の学習や制作がよりスムーズになりました。',
            href: 'https://portfolio-n2.netlify.app/',
            link: '→ Link'
        }
      ]
    }
  }
}
</script>
