<template>
  <div class="content">
    <div class="block main">
      <h2 class="title-1 _mb15 _white">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, expedita
        quaerat fuga quidem fugit cumque nostrum deserunt obcaecati libero vero?
      </h2>
      <p class="text-1 _white ">
        Lorem ipsum dolor sit amet.
      </p>
      <picture>
        <source
          media="(max-width: 767px)"
          :srcset="require(`@/assets/img/step-5-link-bg-mob.jpg`)"
        />
        <source
          media="(max-width: 1024px)"
          :srcset="require(`@/assets/img/step-5-link-bg-tab.jpg`)"
        />
        <source
          media="(max-width: 3000px)"
          :srcset="require(`@/assets/img/step-5-link-bg.jpg`)"
        />
        <img
          :src="require(`@/assets/img/step-5-link-bg.jpg`)"
          alt="orange"
          class="img"
        />
      </picture>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.content {
  padding-bottom: 60px;
  background-color: #f2f2f2;
}
.block {
  width: 100%;
  height: 241px;
  position: relative;
  padding: 45px 100px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
}
.title-1 {
  max-width: 770px;
}
@media all and (max-width: 1024px) {
  .block {
    padding: 45px 30px;
    height: 299px;
  }
}
.title-1,
.text-1 {
  z-index: 2;
  position: relative;
}
.img {
  position: absolute;
  left: 0;
  top: 0;
}
@media all and (max-width: 767px) {
  .content {
    padding-bottom: 45px;
  }
  .block {
    height: 345px;
    padding: 30px 15px;
  }
  .title-1,
  .text-1 {
    max-width: inherit;
  }
  ._mb15 {
    margin-bottom: 10px;
  }
}
</style>
