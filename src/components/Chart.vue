<template function>
  <div id="chart">
    <container class="row chart-content mx-1">
        <div class="col-xl">
            <h3 class="chart-category text-monospace">Code</h3>
            <wrapper v-for="( code, i ) in codes" :key="i" class="graph">
              <div class="text-monospace bar" :class="code.number" >{{ code.skill }}</div>
            </wrapper>
            <h3 class="chart-category text-monospace">Framework/Library</h3>
            <wrapper v-for="( fwk, i ) in fwks" :key="i" class="graph">
              <div class="text-monospace bar" :class="fwk.number" >{{ fwk.skill }}</div>
            </wrapper>
        </div>
        <div class="col-xl">
          <h3 class="chart-category text-monospace">Other</h3>
          <wrapper v-for="( other, i ) in others" :key="i" class="graph">
            <div class="text-monospace bar" :class="other.number" >{{ other.skill }}</div>
          </wrapper>
        </div>
    </container>
  </div>
</template>

<style lang="scss" scoped>
.chart-category {
    margin: 15px auto 5px;
    text-align: center;
  }

// rendering bar
.bar {
  height: 50px;
  max-width: 800px;
  margin: 0 auto 10px auto;
  line-height: 50px;
  font-size: 1.2rem;
  color: white;
  padding: 0 0 0 10px;
  position: relative;

    &::before {
      content: '';
      width: 100%;
      position: absolute;
      left: 0;
      height: 50px;
      top: 0;
      z-index: -2;
      background: #ecf0f1;
    }

    &::after {
      content: '';
      background: #d89216;
      height: 50px;
      transition: 0.7s ease;
      display: block;
      width: 100%;
      animation: bar-before 1 5s ease 1s backwards;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
    }
}

// animating bar
@keyframes bar-before {
  0%{
    width: 0px;
  }
  100%{
    width: 100%;
  }
}

// size the bars
// codes
.bar1::after{
  max-width: 90%;
}
.bar2::after {
  max-width: 90%;
}
.bar3::after {
  max-width: 90%;
}
.bar4::after {
  max-width: 70%;
}
.bar5::after {
  max-width: 70%;
}
.bar6::after {
  max-width: 30%;
}

// frameworks
.bar11::after {
  max-width: 70%;
}
.bar12::after {
  max-width: 50%;
}
.bar13::after {
  max-width: 50%;
}
.bar14::after {
  max-width: 50%;
}

// others
.bar21::after{
  max-width: 50%;
}
.bar22::after{
  max-width: 40%;
}
.bar23::after {
  max-width: 35%;
}
.bar24::after {
  max-width: 60%;
}
.bar25::after {
  max-width: 80%;
}
.bar26::after {
  max-width: 80%;
}
.bar27::after {
  max-width: 60%;
}
.bar28::after {
  max-width: 60%;
}
.bar29::after {
  max-width: 60%;
}
</style>

<script>
export default {
  name: 'Chart',
  el: '#chart',
    data() {
      return {
        codes: [
          {skill: 'HTML5', number:'bar1' },
          {skill: 'CSS3(SCSS)', number:'bar2'},
          {skill: 'JavaScript(ES6)', number:'bar3'},
          {skill: 'TypeScript', number:'bar4'},
          {skill: 'PHP', number:'bar5'},
          {skill: 'C++', number:'bar6'},
        ],
        fwks: [
          {skill: 'React', number:'bar11' },
          {skill: 'Vue', number:'bar12' },
          {skill: 'Redux', number:'bar13'},
          {skill: 'Laravel', number:'bar14'},
        ],
        others: [
          {skill: 'Unity', number:'bar21' },
          {skill: 'UnrealEngine', number:'bar22' },
          {skill: 'AdobeXD', number:'bar23' },
          {skill: 'GoogleAnalytics', number:'bar24'},
          {skill: 'WordPress', number:'bar25'},
          {skill: 'Git', number:'bar26'},
          {skill: 'Linux', number:'bar27'},
          {skill: 'Docker', number:'bar28'},
          {skill: 'AWS', number:'bar29'},
        ]
      }
    }
}
</script>
