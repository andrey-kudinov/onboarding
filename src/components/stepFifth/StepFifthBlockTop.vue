<template>
  <div class="content">
    <div class="block main">
      <div class="text">
        <h2 class="title-1 _mb15">Lorem, ipsum.</h2>
        <p class="text-1 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
          maxime.
        </p>
      </div>
      <div class="img-wrap">
        <img
          :src="require(`@/assets/img/step-5-top-block.png`)"
          alt="desctop"
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
  height: 500px;
  grid-column: span 2;
}
/* .img {
  object-fit: contain;
} */
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
    height: 360px;
    grid-column: span 1;
  }
  .img {
    object-position: left;
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
}
</style>
