<template>
  <div class="content" :class="{ 'bg-white': step == 6, 'bg-grey': step == 3 }">
    <div class="main">
      <h1 class="title-1 _mb35" v-if="step == 3">
        Lorem ipsum dolor sit amet.
      </h1>
      <div class="video ">
        <img :src="require(`@/assets/img/${image}`)" class="img" alt="video" />
        <button class="video__button" aria-label="Запустить видео">
          <svg width="68" height="48" viewBox="0 0 68 48">
            <path
              class="video__button-shape"
              d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
            ></path>
            <path class="video__button-icon" d="M 45,24 27,14 27,34"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["step"]),
    image() {
      let img = "";
      if (this.step) {
        switch (this.step) {
          case 1:
            img = "step-1-video-1.jpg";
            break;
          case 2:
            img = "video-none.png";
            break;
          case 3:
            img = "video-none.png";
            break;
          case 5:
            img = "video-none.png";
            break;
          case 6:
            img = "video-none.png";
            break;
        }
      }
      return img;
    },
  },
};
</script>

<style scoped>
.content {
  background: #f2f2f2;
  padding: 60px 0;
}
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.bg-white {
  background-color: #fff;
}
.bg-grey {
  background: #f7f7f7;
}
.video {
  height: 500px;
  position: relative;
}
@media all and (max-width: 767px) {
  .video {
    height: 290px;
  }
  .content {
    padding: 45px 0;
  }
}
.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.video__button {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  display: block;
  padding: 0;
  width: 68px;
  height: 48px;
  border: none;
  background-color: transparent;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
.video__button-shape {
  fill: #212121;
  fill-opacity: 0.8;
}
.video__button-icon {
  fill: #ffffff;
}
.video__button:focus {
  outline: none;
}
.video__button:hover .video__button-shape,
.video__button:focus .video__button-shape {
  fill: #ff0000;
  fill-opacity: 1;
}
</style>
