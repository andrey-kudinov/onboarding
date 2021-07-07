<template>
  <div class="content">
    <div class="cards main">
      <div
        class="card card-mobile"
        v-for="(c, i) in cards"
        :key="i"
        :class="{
          'active-opacity': c.step == step || steps[i].finish,
        }"
        @click="toCard(i)"
      >
        <div
          class="card__title title-5 bold"
          v-text="c.title"
          :class="`card__title-${i + 1}`"
        ></div>
        <div class="card__text title-5 bold" v-html="c.desc"></div>
        <div
          class="img-wrap"
          :class="{
            active: c.step == step,
          }"
        >
          <img
            :src="require(`@/assets/img/${c.img}`)"
            :alt="c.img"
            class="img"
          />
          <img
            :src="require(`@/assets/img/lock.svg`)"
            alt="lock"
            class="lock"
            v-if="c.step != step && !steps[i].finish"
          />
          <img
            :src="require(`@/assets/img/check.svg`)"
            alt="check"
            class="check"
            v-if="steps[i].finish && c.step != step"
          />
        </div>
        <img
          :src="require(`@/assets/img/line.svg`)"
          alt="line"
          class="line"
          v-if="
            (c.step != step && c.step != 6) || (steps[i].finish && c.step != 6)
          "
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
          img: "step-1-mob.jpg",
          step: 1,
        },
        {
          title: "Step 2",
          desc: "Lorem",
          img: "step-2-mob.jpg",
          step: 2,
        },
        {
          title: "Step 3",
          desc: "Lorem",
          img: "step-3-mob.jpg",
          step: 3,
        },
        {
          title: "Step 4",
          desc: "Lorem",
          img: "step-4-mob.jpg",
          step: 4,
        },
        {
          title: "Step 5",
          desc: "Lorem",
          img: "step-5-mob.jpg",
          step: 5,
        },
        {
          title: "Step 6",
          desc: "Lorem",
          img: "step-6-mob.jpg",
          step: 6,
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
      document.querySelectorAll('.card-mobile')[i-1].scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
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
.content {
  display: none;
}
.cards {
  display: grid;
  grid-template: min-content / repeat(6, max-content);
  gap: 30px;
  justify-content: center;
  padding: 22px 0;
  align-items: center;
  justify-items: start;
  justify-content: flex-start;
  overflow-x: auto;
  grid-column: full;
}
.card {
  display: grid;
  grid-template: min-content min-content / min-content 1fr;
  opacity: 0.4;
  transition: 0.4s ease;
  cursor: pointer;
  column-gap: 10px;
  position: relative;
  padding: 0 15px;
  border: none;
}
.active {
  border: 3px solid #27a248;
  border-radius: 50%;
}
.active-opacity {
  opacity: 1;
}
.card__title {
  width: max-content;
  background: #ffffff;
  border-radius: 3px;
  z-index: 2;
  grid-column: 2 / -1;
  grid-row: 1 / 2;
  align-self: flex-end;
}
.card__text {
  z-index: 2;
  grid-column: 2 / -1;
  grid-row: 2 / -1;
  white-space: nowrap;
}
.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 3px;
}
.lock {
  position: absolute;
  right: -0;
  top: -0;
  width: 20px;
  height: 20px;
  object-fit: cover;
  object-position: center;
}
.check {
  position: absolute;
  right: -0;
  top: -0;
  width: 20px;
  height: 20px;
  object-fit: cover;
  object-position: center;
}
.line {
  position: absolute;
  right: -34px;
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
  height: 3px;
  object-fit: cover;
  object-position: center;
}
.img-wrap {
  width: 56px;
  height: 56px;
  grid-column: 1 / 2;
  grid-row: 1 / -1;
  border-radius: 50%;
  position: relative;
}
.img-wrap .img {
  border-radius: 50%;
}
@media all and (max-width: 767px) {
  .content {
    display: block;
  }
}
.card__title-1 {
  color: #d21242;
}
.card__title-2 {
  color: #20883e;
}
.card__title-3 {
  color: #ff973b;
}
.card__title-4 {
  color: #ffbf3b;
}
.card__title-5 {
  color: #731472;
}
.card__title-6 {
  color: #002f58;
}
</style>
