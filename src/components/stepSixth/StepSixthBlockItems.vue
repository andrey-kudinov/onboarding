<template>
  <div class="content">
    <div class="items main">
      <div class="item" v-for="item in items" :key="item.icon">
        <div class="img-wrap _mb22">
          <img
            :src="require(`@/assets/img/${item.icon}`)"
            alt="icon"
            class="img"
          />
        </div>
        <h4 class="title-4 _blue _mb15" v-text="item.title"></h4>
        <p class="text-1 _mb15" v-text="item.p1"></p>
        <p class="text-1 _blue item_2" v-html="item.p2"></p>
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
          icon: "step-6-item-ico-1.svg",
          title: "Lorem",
          p1:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum dolorem ducimus corporis mollitia dolorum sunt cumque, facilis commodi perspiciatis alias veritatis ipsa voluptatum, ratione minima illo pariatur! Est, et quia",
          p2:
            '<a href="https://www.facebook.com/" class="item__link _blue" target="_blank">facebook</a>',
        },
        {
          icon: "step-6-item-ico-2.svg",
          title: "Lorem",
          p1:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum dolorem ducimus corporis mollitia dolorum sunt cumque, facilis commodi perspiciatis alias veritatis ipsa voluptatum, ratione minima illo pariatur! Est, et quia",
          p2:
            '<a href="https://www.instagram.com/" class="item__link _blue" target="_blank">@lorem</a><br><a href="https://www.instagram.com/" class="item__link _blue" target="_blank">@lorem</a>',
        },
        {
          icon: "step-6-item-ico-3.svg",
          title: "Lorem",
          p1:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum dolorem ducimus corporis mollitia dolorum sunt cumque, facilis commodi perspiciatis alias veritatis ipsa voluptatum, ratione minima illo pariatur! Est, et quia",
          p2:
            '<a href="https://www.youtube.com/" class="item__link _blue" target="_blank">youtube</a>',
        },
      ],
    };
  },
};
</script>

<style>
.content .items .item .item__link {
  text-decoration: underline;
}
.content .items .item .item__link:hover {
  text-decoration: none;
}
</style>

<style scoped>
.content {
  background-color: #f7f7f7;
  padding: 60px 0;
}
.items {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(370px, 1fr));
  gap: 30px;
}
.item {
  display: grid;
  grid-template-rows: max-content max-content max-content 1fr;
  padding: 40px 35px;
  background: #ffffff;
}
.item_2 {
  align-self: end;
}
.img-wrap {
  width: 80px;
  height: 80px;
}
.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
@media all and (max-width: 1024px) {
  .items {
    grid-template-columns: 1fr;
  }
  .item {
    grid-template: min-content min-content / min-content 1fr;
    column-gap: 25px;
  }
  .item > * {
    grid-column: 2/ -1;
  }
  .img-wrap {
    grid-column: 1/ 2;
    grid-row: 1/-1;
  }
}
@media all and (max-width: 767px) {
  .content {
    padding: 45px 0;
  }
  ._mb15,
  .img-wrap {
    margin-bottom: 10px;
  }
  .item {
    grid-template: min-content max-content max-content / min-content 1fr;
    column-gap: 25px;
    align-items: center;
    padding: 22px;
  }
  .item > * {
    grid-column: 1/ -1;
    align-items: center;
  }
  .title-4 {
    grid-column: 2/-1;
    grid-row: 1/2;
  }
  .img-wrap {
    width: 45px;
    height: 45px;
    grid-column: 1/ 2;
    grid-row: 1/2;
  }
}
</style>
