<template>
  <div class="content">
    <div class="block main">
      <h2 class="title-1 _mb15 ">
        Lorem, ipsum dolor <br class="br" />Lorem, ipsum dolor.
      </h2>
      <p class="title-5 _blue _mb10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea facere
        molestias quod laboriosam totam accusantium?
      </p>
      <p class="text-1 _mb10">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis
        sequi explicabo quia. Enim id amet nesciunt dolorem fugit iusto hic
        labore recusandae sed maxime perspiciatis, aperiam nihil aliquid qui
        architecto?
      </p>
      <p class="text-1 _mb45">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis
        praesentium fugiat suscipit accusamus ad repellendus quaerat minus nisi
        delectus explicabo nihil recusandae optio porro perferendis dolorem
        rerum itaque, ratione iure nulla reprehenderit tempore illo quis magni
        temporibus. Corrupti, autem pariatur!
      </p>
      <p class="title-4 _mb22  ">
        Lorem, ipsum dolor sit amet consectetur adipisicing.
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
          <button class="button-white button">lorem</button>
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
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
          img: "step-6-link-ico-1.svg",
        },
        {
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
          img: "step-6-link-ico-2.svg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.content {
  padding-top: 60px;
}
@media all and (max-width: 767px) {
  .content {
    padding-top: 45px;
  }
}
.block {
  max-width: 770px;
}
.cards {
  display: grid;
  column-gap: 33px;
  row-gap: 15px;
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
  row-gap: 30px;
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
@media all and (max-width: 1024px) {
  .card {
    row-gap: 22px;
  }
}
@media all and (max-width: 767px) {
  .br {
    display: none;
  }
  .card {
    gap: 15px;
  }
  ._mb15 {
    margin-bottom: 10px;
  }
}
</style>
