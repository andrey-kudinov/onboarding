<template>
  <div class="content">
    <div class="text main _mb15">
      <h2 class="title-1 _mb10">Lorem, ipsum Step {{ step }}</h2>
      <p class="text-2 _primary">
        Lorem ipsum dolor sit amet consectetur.
      </p>
    </div>
    <div class="example-3d full">
      <swiper
        class="swiper"
        ref="mySwiper"
        :options="swiperOption"
        @click-slide="toCard"
      >
        <swiper-slide
          class="card swiper"
          v-for="(c, i) in cards"
          :key="i"
          :class="{
            active: c.step == step,
            'active-opacity': c.step == step || steps[i].finish,
          }"
        >
          <div
            class="card__title title-5 _green bold _mb10"
            v-text="c.title"
          ></div>
          <div class="card__text _white bold" v-html="c.desc"></div>
          <img
            :src="require(`@/assets/img/${c.img}`)"
            :alt="c.img"
            class="img"
            :class="{ opr: c.step == 1 || c.step == 2 || c.step == 3 }"
          />
          <img
            :src="require(`@/assets/img/check.svg`)"
            alt="check"
            class="check"
            v-if="c.step == step"
          />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
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
          desc: "lorem",
          img: "step-1-cards-mob.jpg",
          step: 1,
        },
        {
          title: "Step 2",
          desc: "lorem",
          img: "step-2-cards-mob.jpg",
          step: 2,
        },
        {
          title: "Step 3",
          desc: "lorem",
          img: "step-3-cards-mob.jpg",
          step: 3,
        },
        {
          title: "Step 4",
          desc: "lorem",
          img: "step-4-cards-mob.jpg",
          step: 4,
        },
        {
          title: "Step 5",
          desc: "lorem <br>lorem",
          img: "step-5-cards-mob.jpg",
          step: 5,
        },
        {
          title: "Step 6",
          desc: "lorem",
          img: "step-6-cards-mob.jpg",
          step: 6,
        },
      ],
      swiperOption: {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
    };
  },
  methods: {
    ...mapMutations(["change"]),
    toCard(index) {
      if (!this.steps[index].finish) return;
      this.change({ value: index + 1 });
    },
  },
  computed: {
    ...mapGetters(["step", "steps"]),
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    this.swiper.slideTo(this.step - 1, 1000, false);
  },
  watch: {
    step: function() {
      this.swiper.slideTo(this.step - 1, 1000, false);
    },
  },
};
</script>

<style scoped>
.content {
  padding-top: 30px;
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
  width: 200px;
  height: 250px;
  padding: 22px;
  border: 3px solid transparent;
  border-radius: 6px;
  opacity: 0.4;
  transition: 0.4s ease;
  display: none;
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
}
.card__text {
  text-align: left;
  z-index: 2;
  font: normal 700 15px/20px "SourceSansPro";
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
  right: -10px;
  top: -10px;
  width: 20px;
  height: 20px;
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
}
.visible {
  display: flex;
}
.opr {
  object-position: 85%;
}
@media all and (min-width: 767px) {
  .content {
    display: none;
  }
}
@media all and (max-width: 767px) {
  ._mb15 {
    margin-bottom: 10px;
  }
}
</style>

<style lang="scss" scoped>
.example-3d {
  width: 100%;
  height: 300px;
}
.swiper {
  height: 100%;
  width: 100%;
  .swiper-slide {
    display: flex;
    width: 200px;
    height: 250px;
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    background-position: center;
    background-size: cover;
    color: #fff;
    margin-top: 10px;
  }
  .swiper-pagination {
    bottom: 0;
    /deep/ .swiper-pagination-bullet.swiper-pagination-bullet-active {
      background-color: #0a467e;
    }
    /deep/ .swiper-pagination-bullet {
      height: 15px;
      width: 15px;
      margin: 0 5px;
    }
  }
}
</style>
