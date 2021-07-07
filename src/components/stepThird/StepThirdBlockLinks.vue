<template>
  <div class="content">
    <div class="block main">
      <h2 class="title-1 _mb15 ">
        Lorem ipsum dolor sit amet.
      </h2>
      <p class="title-4 _blue _mb45">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit incidunt ullam consequuntur ducimus veniam iste.
      </p>
      <h3 class="title-2  _mb15">Lorem, ipsum dolor.</h3>
      <p class="text-1 _mb30">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, non!
      </p>
      <p class="title-4 _mb22 ">
        Lorem, ipsum dolor.
      </p>
      <div class="cards">
        <div class="card" v-for="(c, i) in cards" :key="i">
          <div class="img-wrap">
            <img
              :src="require(`@/assets/img/${c.img}`)"
              alt="icon"
              class="img"
            />
          </div>
          <p class="title-4 _blue" v-text="c.text"></p>
          <button class="button-white button">Lorem</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          text: "Lorem, ipsum dolor?",
          img: "step-3-link-ico-1.svg",
        },
        {
          text: "Lorem, ipsum dolor",
          img: "step-3-link-ico-2.svg",
        },
        {
          text: "Lorem, ipsum dolor?",
          img: "step-3-link-ico-3.svg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.content {
  padding: 60px 0;
}
@media all and (max-width: 767px) {
  .content {
    padding: 45px 0;
  }
}
.cards {
  display: grid;
  column-gap: 33px;
  row-gap: 22px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 368px));
}
@media all and (max-width: 1024px) {
  .cards {
    grid-template-columns: 1fr;
  }
}
.card {
  display: grid;
  gap: 15px;
  grid-template: 1fr min-content / min-content 1fr;
  background: #f7f7f7;
  padding: 30px;
}
.button-white {
  grid-column: 1 / -1;
  grid-row: 2 / -1;
}
.img-wrap {
  width: 30px;
  height: 30px;
}
</style>
