<template>
  <div class="content">
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
        <p class="text-1" v-text="item.p2"></p>
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
          icon: "item-ico-1.png",
          title: "lorem",
          p1:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi porro molestiae, atque aspernatur iure vitae!",
          p2:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi porro molestiae, atque aspernatur iure vitae!",
        },
        {
          icon: "item-ico-2.png",
          title: "lorem",
          p1:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi porro molestiae, atque aspernatur iure vitae!",
          p2:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi porro molestiae, atque aspernatur iure vitae!",
        },
        {
          icon: "item-ico-3.png",
          title: "lorem",
          p1:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi porro molestiae, atque aspernatur iure vitae!",
          p2:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi porro molestiae, atque aspernatur iure vitae!",
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
  grid-template-columns: repeat(auto-fit, minmax(370px, 1fr));
  gap: 30px;
}
.item {
  display: grid;
  gap: 15px;
  padding: 40px 35px;
  background: #ffffff;
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
  .items {
    gap: 22px;
  }
  .item {
    grid-template: min-content max-content max-content / min-content 1fr;
    column-gap: 25px;
    align-items: center;
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
