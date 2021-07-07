<template>
  <div class="content">
    <div class="block main">
      <div class="text">
        <h2 class="title-1 _mb15">Lorem, ipsum dolor.</h2>
        <p class="text-1 ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
          quo nisi non suscipit rerum aliquam rem iste vel beatae omnis.
        </p>
      </div>
      <div class="img-wrap">
        <img
          :src="require(`@/assets/img/step-6-top-block.png`)"
          alt="phone"
          class="img"
        />
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
@media all and (max-width: 1024px) {
  .main {
    grid-column: full;
  }
  .block {
    grid-template-columns: repeat(2, 1fr);
  }
  .text {
    padding: 0;
    padding-left: 39px;
    grid-column: span 1;
  }
  .img-wrap {
    height: 280px;
    grid-column: span 1;
  }
}
@media all and (max-width: 767px) {
  .block {
    grid-template: 1fr min-content / 1fr;
    gap: 15px;
  }
  .text {
    padding-top: 45px;
    padding-left: 15px;
    padding-right: 15px;
  }
  .img-wrap {
    height: 220px;
  }
  .img {
    object-position: center;
  }
  ._mb15 {
    margin-bottom: 10px;
  }
}
</style>
