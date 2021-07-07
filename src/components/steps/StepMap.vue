<template>
  <div class="content">
    <div class="map main">
      <div class="text _mb60">
        <h1 class="title-1 _mb30">title-1</h1>
        <p class="title-4 _blue _bold _mb15">title-4 _blue _bold _mb15</p>
        <p class="text-1">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus
          vitae tempora labore minus, aperiam vero ea, maxime magni eius commodi
          exercitationem molestiae cumque accusantium quisquam maiores sit animi
          placeat! Accusantium.
        </p>
      </div>
      <div class="cards">
        <!-- Линия 1 -->
        <img
          :src="require(`@/assets/img/map-line-1.svg`)"
          alt="line"
          class="line-1"
          :class="{ 'line-green': 1 < currentStep }"
        />
        <!-- Линия 2 -->
        <img
          v-if="isDesctop"
          :src="require(`@/assets/img/map-line-2.svg`)"
          alt="line"
          class="line-2"
          :class="{ 'line-green': 2 < currentStep }"
        />
        <img
          v-else
          :src="require(`@/assets/img/map-line-2-tab.svg`)"
          alt="line"
          class="line-2"
          :class="{ 'line-green': 2 < currentStep }"
        />
        <!-- Линия 3 -->
        <img
          :src="require(`@/assets/img/map-line-1.svg`)"
          alt="line"
          class="line-3"
          :class="{ 'line-green': 3 < currentStep }"
        />
        <!-- Линия 4 -->
        <img
          v-if="isDesctop"
          :src="require(`@/assets/img/map-line-2.svg`)"
          alt="line"
          class="line-4"
          :class="{ 'line-green': 4 < currentStep }"
        />
        <img
          v-else
          :src="require(`@/assets/img/map-line-2-tab.svg`)"
          alt="line"
          class="line-4"
          :class="{ 'line-green': 4 < currentStep }"
        />
        <!-- Линия 5 -->
        <img
          :src="require(`@/assets/img/map-line-1.svg`)"
          alt="line"
          class="line-5"
          :class="{ 'line-green': 5 < currentStep }"
        />
        <div
          class="card"
          v-for="(c, i) in cards"
          :key="i"
          :class="{
            'active-opacity': steps[i].finish || i == 0,
            active: currentStep == i + 1,
          }"
        >
          <div
            class="card__title title-5 bold _mb15"
            v-text="c.title"
            :class="c.class"
          ></div>
          <div class="card__text title-2 _white bold" v-html="c.desc"></div>
          <picture>
            <source
              media="(max-width: 767px)"
              :srcset="require(`@/assets/img/${c.imgMob}`)"
            />
            <source
              media="(max-width: 1199px)"
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
              :class="{
                opr:
                  (isMobile && c.step == 3) ||
                  (isMobile && c.step == 2) ||
                  (isMobile && c.step == 6),
              }"
            />
          </picture>
          <img
            :src="require(`@/assets/img/check.svg`)"
            alt="check"
            class="check"
            v-if="steps[i].finish"
          />
          <img
            :src="require(`@/assets/img/lock.svg`)"
            alt="lock"
            class="lock"
            v-if="c.step != step && !steps[i].finish"
          />
          <!-- горизонтальная линия мобилки -->
          <img
            :src="require(`@/assets/img/line-short.svg`)"
            alt="line"
            class="line-short"
            v-if="i != 5"
            :class="{ 'line-green': c.step < currentStep }"
          />
          <button
            class="button button-primary to-step"
            @click="toCard(i)"
            :class="{ 'scale-1': currentStep == i + 1 }"
            v-if="!isMobile || (isMobile && steps[i].finish)"
          >
            Lorem
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  metaInfo: {
    title: "Onboarding",
    meta: [
      {
        vmid: "description",
        property: "description",
        name: "description",
        content: "",
      },
    ],
    htmlAttrs: {
      lang: "ua",
    },
  },
  data() {
    return {
      isDesctop: window.innerWidth > 1199,
      isMobile: window.innerWidth < 767,
      cards: [
        {
          title: "Step 1",
          desc: "Lorem",
          img: "step-1-big.jpg",
          imgTab: "map-1-tab.jpg",
          imgMob: "map-1-mob.jpg",
          step: 1,
          class: "_red",
        },
        {
          title: "Step 2",
          desc: "Lorem",
          img: "step-2-big.jpg",
          imgTab: "map-2-tab.jpg",
          imgMob: "map-2-mob.jpg",
          step: 2,
          class: "_green",
        },
        {
          title: "Step 3",
          desc: "Lorem",
          img: "step-3-big.jpg",
          imgTab: "map-3-tab.jpg",
          imgMob: "map-3-mob.jpg",
          step: 3,
          class: "_orange",
        },
        {
          title: "Step 4",
          desc: "Lorem",
          img: "step-4-big.jpg",
          imgTab: "map-4-tab.jpg",
          imgMob: "map-4-mob.jpg",
          step: 4,
          class: "_yellow",
        },
        {
          title: "Step 5",
          desc: "Lorem",
          img: "step-5-big.jpg",
          imgTab: "map-5-tab.jpg",
          imgMob: "map-5-mob.jpg",
          step: 5,
          class: "_burgundy",
        },
        {
          title: "Step 6",
          desc: "Lorem",
          img: "step-6-big.jpg",
          imgTab: "map-6-tab.jpg",
          imgMob: "map-6-mob.jpg",
          step: 6,
          class: "_dark-blue",
        },
      ],
    };
  },
  methods: {
    ...mapMutations(["change"]),
    toCard(i) {
      if (!this.steps[i].finish) return;
      this.change({ value: i + 1 });
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
    ...mapGetters(["step", "steps"]),
    currentStep() {
      return Math.max(...this.steps.map((el) => el.finish && el.id), 0);
    },
  },
};
</script>

<style scoped>
.content {
  padding: 60px 0;
  text-align: center;
}
.map {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.text {
  max-width: 570px;
}
.cards {
  display: grid;
  grid-template: 1fr 1fr 1fr / 1fr 1fr;
  gap: 90px;
  position: relative;
}
.card {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 485px;
  height: 245px;
  padding: 35px;
  border: 6px solid transparent;
  border-radius: 6px;
  opacity: 0.4;
  transition: 0.4s ease;
  z-index: 2;
}
.active {
  border: 6px solid #27a248;
  border-radius: 10px;
}
.active-opacity {
  opacity: 1;
}
.active .check {
  transition: 0.3s ease;
  transform: scale(0);
}
.active-opacity:hover {
  border: 6px solid #27a248;
  border-radius: 10px;
}
.active-opacity:hover .check {
  transition: 0.3s ease;
  transform: scale(0);
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
.lock {
  position: absolute;
  right: -22px;
  top: -22px;
  width: 44px;
  height: 44px;
  object-fit: cover;
  object-position: center;
}
.line-1,
.line-2,
.line-3,
.line-4,
.line-5 {
  position: absolute;
  object-fit: cover;
  object-position: center;
}
.line-1 {
  left: 490px;
  top: 125px;
}
.line-2 {
  transform: scale(1.05);
  left: 0px;
  top: 138px;
}
.line-3 {
  left: 490px;
  top: 455px;
}
.line-4 {
  transform: scale(1.05);
  left: 0px;
  top: 475px;
}
.line-5 {
  left: 490px;
  top: 795px;
}
.line-short {
  display: none;
}
.line-green {
  filter: invert(40%) sepia(67%) saturate(504%) hue-rotate(85deg)
    brightness(82%) contrast(92%);
}
.visible {
  display: flex;
}
.to-step {
  z-index: 2;
  margin-top: auto;
  transform: scale(0);
  transition: 0.3s ease;
}
.active-opacity:hover .to-step {
  transform: scale(1);
}
.scale-1 {
  transform: scale(1);
}
.opr {
  object-position: right;
}
@media all and (max-width: 1199px) {
  .finish {
    padding-top: 30px;
  }
  .cards {
    column-gap: 50px;
    row-gap: 90px;
  }
  .card {
    width: 320px;
    padding: 22px;
  }
  .line-1 {
    left: 287px;
  }
  .line-2 {
    transform: scale(1.04);
    top: 125px;
  }
  .line-3 {
    left: 287px;
    top: 460px;
  }
  .line-4 {
    transform: scale(1.05);
    left: 0px;
    top: 460px;
  }
  .line-5 {
    left: 287px;
    top: 795px;
  }
}
@media all and (max-width: 767px) {
  .finish {
    padding-top: 30px;
  }
  .cards {
    grid-template: auto / 1fr;
    row-gap: 25px;
  }
  .card {
    width: 320px;
    height: 185px;
  }
  .card__text {
    max-width: 170px;
  }
  .line-1 {
    display: none;
  }
  .line-2 {
    display: none;
  }
  .line-3 {
    display: none;
  }
  .line-4 {
    display: none;
  }
  .line-5 {
    display: none;
  }
  .line-short {
    display: block;
    position: absolute;
    bottom: -31px;
    left: 50%;
    width: 3px;
  }
  .check {
    right: -10px;
    top: -10px;
    width: 20px;
    height: 20px;
  }
  .lock {
    right: -10px;
    top: -10px;
    width: 20px;
    height: 20px;
  }
  .card {
    border: 3px solid transparent;
    border-radius: 6px;
    width: 90vw;
  }
  .active {
    border: 3px solid #27a248;
    border-radius: 6px;
  }
  .active-opacity:hover {
    border: 3px solid #27a248;
    border-radius: 6px;
  }
  .to-step {
    transform: scale(1);
  }
}
</style>
