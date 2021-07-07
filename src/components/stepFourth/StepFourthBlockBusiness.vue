<template>
  <div class="content">
    <div class="text main">
      <h2 class="title-1 _mb15 ">
        Lorem ipsum dolor sit, amet consectetur adipisicing.
      </h2>
      <p class="text-1 _mb45">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere,
        obcaecati.
      </p>
      <h4 class="title-4 _bold _mb30 ">Lorem, ipsum dolor.</h4>
    </div>
    <div class="items main">
      <div class="item" v-for="item in items" :key="item.icon">
        <div class="img-wrap _mb15">
          <img
            :src="require(`@/assets/img/${item.icon}`)"
            alt="icon"
            class="img"
          />
        </div>
        <h4 class="title-4 _blue _mb10" v-text="item.title"></h4>
        <p class="text-1 _mb30" v-text="item.p1"></p>
        <button class="button button-white">lorem</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          icon: "step-4-business-ico-1.svg",
          title: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
          p1: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
        },
        {
          icon: "step-4-business-ico-2.svg",
          title: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
          p1: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.content {
  background-color: #f7f7f7;
  padding: 60px 0;
}
.items {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}
.item {
  display: grid;
  grid-template: min-content min-content 1fr / min-content 1fr;
  padding: 40px 35px;
  column-gap: 15px;
  background: #ffffff;
}
.img-wrap {
  width: 80px;
  height: 80px;
  grid-column: 1 / 2;
  grid-row: 1 / -1;
}
.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.text {
  text-align: center;
}
.button {
  align-self: flex-end;
}
.title-4,
.text-1,
.button {
  grid-column: 2 / -1;
}
@media all and (max-width: 767px) {
  .content {
    padding: 45px 0;
  }
  .items {
    grid-template-columns: 1fr;
    gap: 15px;
  }
  .item {
    grid-template: auto / 1fr;
    column-gap: 15px;
    row-gap: 0px;
    padding: 22px;
  }
  .item > * {
    grid-column: 1/ -1;
  }
  /* .title-4 {
    grid-column: 2/-1;
    grid-row: 1/2;
  }
  .img-wrap {
    width: 45px;
    height: 45px;
    grid-column: 1/ 2;
    grid-row: 1/2;
  } */
}
</style>
