<template>
  <div class="content">
    <div class="block main">
      <div class="text">
        <h2 class="title-1 _mb15">Lorem, ipsum dolor.</h2>
        <p class="text-1">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          aut iusto eligendi earum. Quae sunt inventore, tempore maxime
          voluptatum eos?
        </p>
      </div>
      <div class="img-wrap">
        <picture>
          <source
            media="(max-width: 767px)"
            :srcset="require(`@/assets/img/step-3-top-block-mob.png`)"
          />
          <source
            media="(max-width: 3000px)"
            :srcset="require(`@/assets/img/step-3-top-block.png`)"
          />
          <img
            :src="require(`@/assets/img/step-3-top-block.png`)"
            alt="woman"
            class="img"
          />
        </picture>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.content {
  background-color: #ededed;
}
.block {
  display: grid;
  place-items: center;
  grid-auto-flow: column;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  color: #ededed;
}
.text {
  padding: 70px 0;
}
.img-wrap {
  height: 450px;
}
.text-1 {
  max-width: 370px;
}
@media all and (max-width: 768px) {
  .main {
    grid-column: full;
    padding-left: 39px;
  }
  .text-1 {
    max-width: 340px;
  }
}
@media all and (max-width: 767px) {
  .main {
    grid-column: main;
    padding-left: 0;
  }
  .block {
    grid-template: 1fr min-content / 1fr;
    padding-top: 45px;
    gap: 15px;
  }
  .text {
    padding: 0;
  }
  .img {
    object-fit: contain;
  }
  .img-wrap {
    height: 169px;
  }
}
</style>
