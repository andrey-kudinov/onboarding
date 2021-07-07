<template>
  <div class="content">
    <div class="finish main">
      <h2 class="title-1  _mb15">Lorem, ipsum Step {{ step }}</h2>
      <p class="text-2 _primary _mb45">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus
        modi maxime soluta dolore dolor placeat?
      </p>
      <div class="cards">
        <div
          class="card"
          v-for="c in cards"
          :key="c.icon"
          :class="{
            active: c.step == step,
            'active-opacity': c.step == step || c.step == step + 1,
            visible: c.step == step || c.step == step + 1,
          }"
          @click="next"
        >
          <div
            class="card__title title-5 _green bold _mb15"
            v-text="c.title"
          ></div>
          <div class="card__text title-2 _white bold" v-html="c.desc"></div>

          <picture>
            <source
              media="(max-width: 1024px)"
              :srcset="require(`@/assets/img/${c.imgTab}`)"
            />
            <source
              media="(max-width: 3000px)"
              :srcset="require(`@/assets/img/${c.img}`)"
            />
            <img
              :src="require(`@/assets/img/${c.img}`)"
              :alt="c.img"
              class="img"
            />
          </picture>

          <img
            :src="require(`@/assets/img/check.svg`)"
            alt="check"
            class="check"
            v-if="c.step == step"
          />
          <img
            :src="require(`@/assets/img/line-arrow.svg`)"
            alt="line-arrow"
            class="line"
            v-if="c.step == step"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {
      cards: [
        {
          title: "Step 1",
          desc: "lorem",
          img: "step-1-big.jpg",
          imgTab: "map-1-tab.jpg",
          step: 1,
        },
        {
          title: "Step 2",
          desc: "lorem",
          img: "step-2-big.jpg",
          imgTab: "map-2-tab.jpg",
          step: 2,
        },
        {
          title: "Step 3",
          desc: "lorem",
          img: "step-3-big.jpg",
          imgTab: "map-3-tab.jpg",
          step: 3,
        },
        {
          title: "Step 4",
          desc: "lorem",
          img: "step-4-big.jpg",
          imgTab: "map-4-tab.jpg",
          step: 4,
        },
        {
          title: "Step 5",
          desc: "lorem <br>lorem <br class='br'>lorem",
          img: "step-5-big.jpg",
          imgTab: "map-5-tab.jpg",
          step: 5,
        },
        {
          title: "Step 6",
          desc: "lorem <br>lorem",
          img: "step-6-big.jpg",
          imgTab: "map-6-tab.jpg",
          step: 6,
        },
      ],
    };
  },
  methods: {
    ...mapMutations(["increment"]),
    next() {
      this.increment();
      this.scroll();
    },
    scroll() {
      window.scroll({
        top: 0,
        left: 0,
        // behavior: "smooth",
      });
    },
  },
  computed: {
    ...mapGetters(["step"]),
  },
};
</script>

<style scoped>
.finish {
  padding-top: 60px;
  text-align: center;
}
.cards {
  display: flex;
  justify-content: space-between;
}
.card {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 485px;
  height: 254px;
  padding: 35px;
  border: 6px solid transparent;
  border-radius: 6px;
  opacity: 0.4;
  transition: 0.4s ease;
  display: none;
  cursor: pointer;
}
.active {
  border: 6px solid #27a248;
}
.active-opacity {
  opacity: 1;
}
.card:hover {
  border: 6px solid #27a248;
  border-radius: 10px;
}
.card__title {
  width: max-content;
  padding: 5px 10px;
  background: #ffffff;
  border-radius: 3px;
  z-index: 2;
}
.card__text {
  text-align: left;
  z-index: 2;
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
.check {
  position: absolute;
  right: -22px;
  top: -22px;
  width: 44px;
  height: 44px;
  object-fit: cover;
  object-position: center;
}
.line {
  position: absolute;
  left: calc(1170px / 2);
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  object-fit: cover;
  object-position: center;
  pointer-events: none;
}
.visible {
  display: flex;
}
@media all and (max-width: 1024px) {
  .card {
    width: 320px;
    height: 254px;
  }
  .line {
    width: 100px;
    left: calc((1024px - 39px - 39px) / 2);
  }
}
@media all and (max-width: 768px) {
  .finish {
    padding-top: 45px;
  }
  .card {
    width: 320px;
  }
  .line {
    width: 45px;
    left: calc(690px / 2);
  }
}
@media all and (max-width: 767px) {
  .content {
    display: none;
  }
  .finish {
    padding-top: 30px;
  }
}
</style>

<style>
.finish .card .card__text .br {
  display: none;
}
@media all and (max-width: 768px) {
  .finish .card .card__text .br {
    display: block;
  }
}
</style>
