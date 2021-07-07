<template>
  <div class="content">
    <div class="products main">
      <div class="desc _mb45">
        <h2 class="title-1 _mb15">
          Lorem ipsum dolor sit amet.
        </h2>
        <p class="text-1 _mb15">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, nostrum.
        </p>
        <p class="title-4 _blue">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, architecto.
        </p>
      </div>
      <div class="cards">
        <div class="card" v-for="c in cards" :key="c.icon">
          <h3 class="title-2 _white" v-text="c.title"></h3>
          <picture>
            <source
              media="(max-width: 767px)"
              :srcset="require(`@/assets/img/${c.imgMob}`)"
            />
            <source
              media="(max-width: 3000px)"
              :srcset="require(`@/assets/img/${c.img}`)"
            />
            <img
              :src="require(`@/assets/img/${c.img}`)"
              :alt="c.img"
              class="img img-card"
            />
          </picture>
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
          title: "lorem",
          img: "step-1-card-1.jpg",
          imgMob: "step-1-card-1-mob.jpg",
        },
        {
          title: "lorem",
          img: "step-1-card-2.jpg",
          imgMob: "step-1-card-2-mob.jpg",
        },
        {
          title: "lorem",
          img: "step-1-card-3.jpg",
          imgMob: "step-1-card-3-mob.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.content {
  background: #f2f2f2;
  padding-bottom: 60px;
  place-items: center;
}
.products {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.desc {
  max-width: 770px;
  text-align: center;
}
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  width: 100%;
  gap: 15px;
}
.card {
  width: 100%;
  height: 420px;
  position: relative;
  padding: 45px 30px;
  text-align: center;
}
.title-2 {
  width: 100%;
  z-index: 2;
  position: relative;
}
.img-card {
  position: absolute;
  left: 0;
  top: 0;
}
@media all and (max-width: 768px) {
  .card {
    height: 300px;
    padding: 22px 30px;
  }
}
@media all and (max-width: 767px) {
  .content {
    padding-bottom: 45px;
  }
  .cards {
    grid-template-columns: 1fr;
  }
  /* .card {
    height: 300px;
    padding: 22px 30px;
  } */
}
@media all and (max-width: 320px) {
  .card {
    height: 220px;
  }
}
</style>
