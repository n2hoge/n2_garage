<template function>
  <div id="experience">
    <h2 class="text-monospace page-head">Experience</h2>
    <div class="info">西村 直紀 が作っちゃったモノの解説です！</div>
    <h3 class="text-monospace page-head text-center">Web</h3>
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
                <b-card-img
                  :src="product.src"
                  style="max-width: 27.6rem;"
                  class="rounded-1 my-4 fade">
                </b-card-img>
              </b-col>
              <b-col>
                <b-card-text class="m-3 text-left">
                  {{ product.text }}
                </b-card-text>
              </b-col>
            </b-row>
            <div class="d-flex justify-content-center my-4">
              <b-button v-if="product.self" pill :href="product.href" size="lg" class="text-monospace button-link px-4">{{ product.link }}</b-button>
              <b-button v-if="product.brank" pill :href="product.href" target="brank" size="lg" class="text-monospace button-link px-4">{{ product.link }}</b-button>
            </div>
        </b-card>
      </div>
    </div>
    <h3 class="text-monospace page-head text-center">Content</h3>
    <div class="d-flex flex-column justify-content-around my-4">
      <div v-for="( content, i) in contents" :key="i" class="d-flex flex-column align-items-center">
        <b-card
          border-variant="secondary"
          header-text-variant="white"
          header-bg-variant="dark"
          header-class="card-header"
          v-bind="content"
          style="max-width: 70rem;"
          class="my-4 text-center">
            <b-col no-gutters>
              <b-col>
                <video
                  :src="content.src"
                  controls
                  autoplay
                  muted
                  loop
                  playsinline
                  width="100%"
                  class="rounded-1 my-4 fade embed-responsive-item"
                  ></video>
              </b-col>
              <b-col>
                <b-card-text class="m-3 text-left">
                  {{ content.text }}
                </b-card-text>
                <b-card-text v-if="content.attention" class="m-3 text-left">
                  <p>{{ content.attention }}</p>
                  <ul>
                    <li class="ml-2"><a v-bind:href="content.url1" target="brank">{{content.ref1}}</a></li>
                    <li class="ml-2"><a v-bind:href="content.url2" target="brank">{{content.ref2}}</a></li>
                  </ul>
                </b-card-text>
              </b-col>
            </b-col>
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
  name: 'Experience',
  components: {
    Footer
  },
  el: "#experience",
  data() {
    return {
      products: [
        { header: '現所属会社での案件1（客先常駐）',
            'sub-title':'制作環境：Laravel/WordPress/jQuery/Docker/Linux',
          src: require('@/assets/smartphone.jpg'),
          text:
            '現在の所属会社で約1年ほど携わった案件。互助会を運営する企業様のWeb開発チームにおいて、デザイナーさんと連携しつつAdobeXDデザインモックからUIを構築するのが、主な業務でした。レガシーな構成で不便なことが多かった印象ですが、そのぶん良い経験になった現場です。フロントエンドだけでなくバックエンドやインフラ寄りの作業も一部任せていただけたお陰で、中規模Webシステムの構成を大まかに把握することができました。',
        },
        { header: '現所属会社での案件2（客先常駐）',
            'sub-title':'制作環境：Typescript/Vue/Loopback.js/Java/Linux',
          src: require('@/assets/dog.jpg'),
          text:
            '現在の所属会社で3か月ほど携わった某大手企業様のスポット案件。サーバインストール型製造工程管理ツールのポーティング作業で、詳細設計からフロントエンド・バックエンド（API）開発を担当しました。諸事情により3か月の間、常に超スピード（自主的に土日も返上）でキャッチアップを行う必要があり、自分でも信じられないくらい技術レベルが伸びました。案件終了後も一週間くらいトランス状態が続いていたほどで、忘れられない現場です（笑）。',
        },
        { header: '今ご覧のポートフォリオサイト',
            'sub-title':'制作環境：Vue/Docker/Netlify',
          src: require('@/assets/n2garage.jpg'),
          text:
            '2年ほど前に「フロントエンドやってるわけだし、今時なSPAのポートフォリオサイトを作っておきてえ！」と思って制作したサイト。自身のスキルアップに伴ってちょくちょく更新しています。制作当初はSPA開発自体が初めてで困惑することもありましたが、現在は「手前味噌ながら慣れたもんだなあ」と思いつつ手を加えている状態です。最近、VueよりReactの方が扱いやすく感じているので、まるっと刷新する予定（未定）を立てています。',
          href: '/',
          link: '→ Top',
          self: 'true',
        },
        { header: 'なんちゃってスクラッチなサイト',
            'sub-title':'制作環境：HTML/SCSS/JavaScript(ES6)/Netlify',
          src: require('@/assets/cytal.jpg'),
          text:
            '2年半ほど前に「フレームワークを使わずJavaScriiptのみで、くるくる動くサイトを制作しておきてえ！」と思って制作した温故知新なサイト。デザインは講座の内容をアレンジしたものですが、「昔はこうやってwebサイトを作っていたんだなあ」と、しみじみ実感。こういう泥臭い作業も結構好きです。フレームワークを使わずに、ピュアなJavaScriptでブラウザのAPIを呼び出しDOMを操作するという実装は、今でも小技として業務に役立っています。',
          href: 'https://portfolio-n2.netlify.app/',
          link: '→ Link',
          brank: 'true',
        },
      ],
      contents: [
        { header: '3Dキャラクターモデル',
            'sub-title':'制作環境：Unity2019/Blender/VroidStudio',
          src: require('@/assets/movie/unity_girl.mp4'),
          text:
            '昨年、プライベートでUnityを弄っていたところ、知人経由で某エンタメ系企業様からご依頼をいただいたスポット案件。メタバース形式のECサイトで使用されるアバター用3Dモデルを6体ほど作成しました。工数がかなりタイトだったため、VroidStudioから出力したキャラクタモデルを、Blenderに取り込み微調整後、Unity上で動作するように実装。基本的に服装などの指定がなく自由だったので、先方と擦り合わせは行いつつも、それぞれ完全に自身の好みの外見に仕上がりました（笑）。',
        },
        { header: '2Dアクションゲーム（製作中）',
            'sub-title':'制作環境：UnrealEngine4',
          src: require('@/assets/movie/ue_cirno.mp4'),
          text:
            '「今年はUnrealEngineに強くなりてえ！」という熱い目標と、「そろそろ一本ゲーム作れるんじゃね？」という甘い考えから現在着手中のもの。動作ロジックの組み方に慣れることが主目的なので、画像素材はフリーのものをお借りしています。個人的にゲーム制作においては、UnityよりUnrealEngineの方が分かりやすいかもという印象。更にUEならC++での実装を実践できる点も魅力に感じます。それにしても、やっぱりドット絵が細かく動く様は、見ていてたまらなく楽しいです。',
          attention:'※素材をお借りしたサイト様',
          ref1:'雑草小屋 様',
          url1:'http://zassoh.starfree.jp/',
          ref2:'白螺子屋 様',
          url2:'http://hi79.web.fc2.com/',
        },
      ]
    }
  }
}
</script>
