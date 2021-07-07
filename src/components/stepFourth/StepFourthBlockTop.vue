<template>
  <div class="content">
    <div class="block main">
      <div class="text">
        <h2 class="title-1 _mb15">title-1</h2>
        <p class="text-1 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          animi!
        </p>
      </div>
      <div class="img-wrap">
        <picture>
          <source
            media="(max-width: 1024px)"
            :srcset="require(`@/assets/img/step-4-top-block-mob.png`)"
          />
          <source
            media="(max-width: 3000px)"
            :srcset="require(`@/assets/img/step-4-top-block.png`)"
          />
          <img
            :src="require(`@/assets/img/step-4-top-block.png`)"
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
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  color: #ededed;
}
.text {
  padding: 70px 0;
  grid-column: span 1;
}
.img-wrap {
  height: 450px;
  grid-column: span 2;
}
.img {
  object-fit: contain;
}
@media all and (max-width: 1024px) {
  .block {
    grid-template-columns: repeat(2, 1fr);
  }
  .text {
    padding: 0 15px 0 0;
    grid-column: span 1;
  }
  .img-wrap {
    height: 450px;
    grid-column: span 1;
  }
}
@media all and (max-width: 767px) {
  .block {
    grid-template: 1fr min-content / 1fr;
    padding: 45px 0;
    gap: 15px;
  }
  .text {
    padding: 0;
  }
  .img-wrap {
    height: 169px;
  }
}
</style>
