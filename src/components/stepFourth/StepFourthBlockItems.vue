<template>
  <div class="content">
    <div class="text main _mb30">
      <p class="text-1">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, labore?
      </p>
    </div>
    <div class="items main">
      <div class="item" v-for="item in items" :key="item.icon">
        <div class="img-wrap">
          <img
            :src="require(`@/assets/img/${item.icon}`)"
            alt="icon"
            class="img"
          />
        </div>
        <h4 class="title-4 _blue" v-text="item.title"></h4>
        <p class="text-1" v-text="item.p1"></p>
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
          icon: "step-4-item-ico-1.svg",
          title: "Lorem ipsum dolor sit amet.",
          p1:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, neque.",
        },
        {
          icon: "step-4-item-ico-2.svg",
          title: "Lorem ipsum dolor sit amet.",
          p1:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, neque.",
        },
        {
          icon: "step-4-item-ico-3.svg",
          title: "Lorem ipsum dolor sit amet.",
          p1:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, neque.",
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
.items {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(370px, 1fr));
  gap: 30px;
}
.text {
  text-align: center;
  display: flex;
  justify-content: center;
}
.text .text-1 {
  max-width: 770px;
}
.item {
  display: grid;
  grid-template: min-content min-content / min-content 1fr;
  gap: 15px;
  padding: 40px 35px;
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

.title-4,
.text-1 {
  grid-column: 2 / -1;
}
@media all and (max-width: 1024px) {
  .items {
    grid-template-columns: 1fr;
  }
  .item {
    grid-template: min-content min-content 1fr / min-content 1fr;
    column-gap: 25px;
    row-gap: 10px;
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
  .items {
    gap: 15px;
  }
  .content {
    padding-bottom: 45px;
  }
  .item {
    grid-template: min-content max-content max-content / min-content 1fr;
    column-gap: 15px;
    row-gap: 10px;
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
