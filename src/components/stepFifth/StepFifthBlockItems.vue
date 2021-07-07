<template>
  <div class="content block-items">
    <h2 class="title-4 _mb30 title">
      Lorem ipsum dolor sit amet.
    </h2>
    <div class="items main">
      <div class="item" v-for="item in items" :key="item.icon">
        <div class="img-wrap">
          <img
            :src="require(`@/assets/img/${item.icon}`)"
            alt="icon"
            class="img"
          />
        </div>
        <h4 class="title-4 _blue item__title _mb5" v-text="item.title"></h4>
        <h4 class="title-4 item__subtitle" v-text="item.subtitle"></h4>
        <p class="text-1" v-html="item.p1"></p>
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
          icon: "step-5-item-ico-1.svg",
          title: "Lorem, ipsum.",
          subtitle: "Lorem ipsum dolor sit.",
          p1:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, expedita quaerat fuga quidem fugit cumque nostrum deserunt obcaecati libero vero?",
        },
        {
          icon: "step-5-item-ico-2.svg",
          title: "Lorem, ipsum.",
          subtitle: "Lorem ipsum dolor sit.",
          p1:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, expedita quaerat fuga quidem fugit cumque nostrum deserunt obcaecati libero vero?",
        },
        {
          icon: "step-5-item-ico-3.svg",
          title: "Lorem, ipsum.",
          subtitle: "Lorem ipsum dolor sit.",
          p1:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, expedita quaerat fuga quidem fugit cumque nostrum deserunt obcaecati libero vero?",
        },
        {
          icon: "step-5-item-ico-4.svg",
          title: "Lorem, ipsum.",
          subtitle: "Lorem ipsum dolor sit.",
          p1:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, expedita quaerat fuga quidem fugit cumque nostrum deserunt obcaecati libero vero?",
        },
      ],
    };
  },
};
</script>

<style scoped>
.content {
  background-color: #f2f2f2;
  padding-bottom: 60px;
}
.title {
  grid-column: main;
  text-align: center;
}
.items {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 30px;
}
.item {
  display: grid;
  grid-template: min-content min-content max-content max-content / min-content 1fr;
  column-gap: 15px;
  padding: 40px 35px;
  background: #ffffff;
}
.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.item > * {
  grid-column: 1/ -1;
  align-items: center;
}
.item__title {
  grid-column: 2/-1;
  grid-row: 1/2;
  align-self: flex-end;
}
.item__subtitle {
  grid-column: 2/-1;
  grid-row: 2/3;
}
.img-wrap {
  width: 80px;
  height: 80px;
  grid-column: 1/ 2;
  grid-row: 1/3;
}
.text-1 {
  margin-top: 22px;
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
    grid-row: 1/3;
  }
  .text-1 {
    grid-column: 1/ -1;
  }
}
@media all and (max-width: 767px) {
  .items {
    gap: 30px;
  }
  .content {
    padding-bottom: 45px;
  }
  .item {
    grid-template: auto / 1fr;
    column-gap: 15px;
    align-items: center;
    padding: 15px;
  }
  .item > * {
    grid-column: 1/ -1;
    align-items: center;
  }
  .item__title {
    grid-row: 2/3;
    margin-top: 5px;
    margin-bottom: 0;
  }
  .text-1 {
    margin-top: 15px;
    font: normal 400 13px/18px "SourceSansPro";
  }
  .item__subtitle {
    grid-row: 3/4;
  }
  .img-wrap {
    width: 45px;
    height: 45px;
    grid-row: 1/2;
  }
}
</style>

<style>
@media all and (max-width: 767px) {
  .block-items .item .br {
    display: none;
  }
}
</style>
