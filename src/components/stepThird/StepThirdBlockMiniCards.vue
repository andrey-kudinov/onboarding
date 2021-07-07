<template>
  <div class="content">
    <div class="block main">
      <div class="text">
        <h2 class="title-1 _mb45 ">
          Lorem, ipsum dolor?
        </h2>
      </div>
      <div class="cards">
        <div class="card" v-for="(c, i) in cards" :key="i">
          <div class="img-wrap">
            <img
              :src="require(`@/assets/img/${c.img}`)"
              alt="icon"
              class="img"
            />
          </div>
          <p class="text-1" v-text="c.text"></p>
        </div>
      </div>
      <!-- <button class="button button-primary">Lorem</button> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, eos.",
          img: "step-3-card-ico-1.svg",
        },
        {
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, eos.",
          img: "step-3-card-ico-2.svg",
        },
        {
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, eos.",
          img: "step-3-card-ico-3.svg",
        },
        {
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, eos.",
          img: "step-3-card-ico-4.svg",
        },
        {
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, eos.",
          img: "step-3-card-ico-5.svg",
        },
        {
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, eos.",
          img: "step-3-card-ico-6.svg",
        },
        {
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, eos.",
          img: "step-3-card-ico-7.svg",
        },
        {
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, eos.",
          img: "step-3-card-ico-8.svg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.content {
  background-color: #f7f7f7;
  padding-top: 45px;
}
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(370px, 1fr));
  gap: 30px;
}
.card {
  display: grid;
  grid-template: 1fr / min-content 1fr;
  gap: 15px;
  background-color: #fff;
  height: 89px;
  align-items: center;
  padding: 0 30px;
}
@media all and (max-width: 1024px) {
  .cards {
    grid-template-columns: repeat(auto-fit, minmax(175px, 1fr));
  }
  .card {
    height: auto;
    align-items: flex-start;
    padding: 0;
    background: #f7f7f7;
  }
}
@media all and (max-width: 767px) {
  .cards {
    grid-template-columns: 1fr;
    gap: 15px;
    padding-bottom: 0;
  }
  .card {
    grid-template: min-content 1fr / 1fr;
    text-align: center;
    justify-items: center;
    padding: 0px;
    padding-bottom: 15px;
    border-bottom: 1px solid #dadada;
  }
  .card:last-child {
    padding: 0px;
    border-bottom: none;
  }
}
.text {
  text-align: center;
}
.img-wrap {
  width: 30px;
  height: 30px;
}
.button {
  margin: 0 auto;
}
@media all and (max-width: 767px) {
  .button {
    width: 100%;
  }
}
</style>
