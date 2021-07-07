<template>
  <div class="content">
    <div class="block main">
      <div class="text">
        <h2 class="title-1 _mb15">title-1</h2>
        <p class="text-1 ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos cum sed
          eos sapiente ipsum corrupti porro velit, fugit tempora ipsam, iusto
          voluptate labore odio quam, sequi nam tenetur. Dolorum, recusandae.
        </p>
      </div>
      <div class="img-wrap">
        <img
          :src="require(`@/assets/img/step-2-top-block.png`)"
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
  padding: 60px 0;
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
@media all and (max-width: 1024px) {
  .main {
    grid-column: full;
  }
  .block {
    grid-template-columns: 1fr;
    grid-template-rows: min-content min-content;
    gap: 30px;
  }
  .text {
    padding: 0;
    padding: 0 39px;
    grid-column: span 1;
  }
  .img-wrap {
    height: 411px;
    grid-column: span 1;
    padding-right: 39px;
  }
}
@media all and (max-width: 767px) {
  .content {
    padding: 0;
  }
  .block {
    gap: 0;
  }
  .text {
    padding-top: 45px;
    padding-left: 15px;
    padding-right: 15px;
  }
  .img-wrap {
    height: 220px;
    padding-right: 15px;
  }
  .img {
    object-fit: contain;
  }
}
</style>
