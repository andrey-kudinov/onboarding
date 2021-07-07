<template>
  <div class="content">
    <div class="cards main">
      <div
        class="card"
        v-for="(c, i) in cards"
        :key="i"
        :class="
          [
            {
              active: c.step == step,
              'active-opacity': c.step == step || steps[i].finish,
            },
          `card_${i+1}`]
        "
        @click="toCard(i)"
      >
        <div
          class="card__title title-5 bold"
          v-text="c.title"
          :class="c.class"
        ></div>
        <div class="card__text title-5 _white bold" v-html="c.desc"></div>
        <img :src="require(`@/assets/img/${c.img}`)" :alt="c.img" class="img" />
        <img
          :src="require(`@/assets/img/lock.svg`)"
          alt="lock"
          class="lock"
          v-if="c.step != step && !steps[i].finish"
        />
        <img
          :src="require(`@/assets/img/line.svg`)"
          alt="line"
          class="line"
          v-if="
            (c.step != step && c.step != 6) || (steps[i].finish && c.step != 6)
          "
        />
        <img
          :src="require(`@/assets/img/check.svg`)"
          alt="check"
          class="check"
          v-if="steps[i].finish && c.step != step"
        />
        <img
          :src="require(`@/assets/img/line-green.svg`)"
          alt="line-green"
          class="line"
          v-if="
            (c.step == step && c.step != 6) || (steps[i].finish && c.step != 6)
          "
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      cards: [
        {
          title: "Step 1",
          desc: "Lorem",
          img: "step-1.jpg",
          step: 1,
          class: "_red",
        },
        {
          title: "Step 2",
          desc: "Lorem",
          img: "step-2.jpg",
          step: 2,
          class: "_green",
        },
        {
          title: "Step 3",
          desc: "Lorem",
          img: "step-3.jpg",
          step: 3,
          class: "_orange",
        },
        {
          title: "Step 4",
          desc: "Lorem",
          img: "step-4.jpg",
          step: 4,
          class: "_yellow",
        },
        {
          title: "Step 5",
          desc: "Lorem",
          img: "step-5.jpg",
          step: 5,
          class: "_burgundy",
        },
        {
          title: "Step 6",
          desc: "Lorem",
          img: "step-6.jpg",
          step: 6,
          class: "_dark-blue",
        },
      ],
    };
  },
  mounted () {
    this.scroll(this.step);
  },
  methods: {
    ...mapMutations(["change"]),
    toCard(i) {
      if (!this.steps[i].finish) return;
      this.change({ value: i + 1 });
    },
    scroll(i) {
      document.querySelectorAll('.card')[i-1].scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
    },
  },
  computed: {
    ...mapGetters(["step", "steps"]),
  },
  watch: {
    'step': function() {
      this.scroll(this.step)
    }
  }
};
</script>

<style scoped>
.cards {
  display: grid;
  grid-auto-flow: column;
  gap: 18px;
  padding: 30px 0;
  justify-content: center;
}
.card {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 180px;
  height: 116px;
  padding: 15px;
  border: 3px solid transparent;
  border-radius: 6px;
  opacity: 0.4;
  transition: 0.4s ease;
  cursor: pointer;
}
.active {
  border: 3px solid #27a248;
}
.active-opacity {
  opacity: 1;
}
.card__title {
  width: max-content;
  padding: 5px 10px;
  background: #ffffff;
  border-radius: 3px;
  z-index: 2;
  margin-bottom: auto;
}
.card__text {
  z-index: 2;
  width: 150px;
}
.img {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 3px;
}
.lock {
  position: absolute;
  right: -10px;
  top: -10px;
  width: 20px;
  height: 20px;
  object-fit: cover;
  object-position: center;
}
.check {
  position: absolute;
  right: -10px;
  top: -10px;
  width: 20px;
  height: 20px;
  object-fit: cover;
  object-position: center;
}
.line {
  position: absolute;
  right: -35px;
  top: 50%;
  width: 45px;
  height: 3px;
  object-fit: cover;
  object-position: center;
  pointer-events: none;
  transform: scale(0.5);
}
.active-opacity:hover {
  border: 3px solid #27a248;
  border-radius: 6px;
}
@media all and (max-width: 1199px) {
  .cards {
    justify-content: flex-start;
    grid-column: full;
    padding: 30px;
    overflow-x: auto;
  }
}
@media all and (max-width: 767px) {
  .content {
    display: none;
  }
  .card__text {
    width: auto;
  }
}
</style>
