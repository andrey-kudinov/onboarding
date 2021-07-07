<template>
  <div class="content">
    <div class="block main">
      <h2 class="title-1 _mb15 _white">
        Lorem ipsum dolor sit amet consectetur.
      </h2>
      <p class="text-1 _white _mb30">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos
        ut cumque reiciendis illum perspiciatis, officia quidem repellat ab
        dolorem reprehenderit suscipit mollitia neque possimus vel natus earum
        esse ex.
      </p>
      <button class="button button-white">Lorem, ipsum dolor.</button>
      <picture>
        <source
          media="(max-width: 767px)"
          :srcset="require(`@/assets/img/step-6-link-bg-mob.jpg`)"
        />
        <source
          media="(max-width: 1024px)"
          :srcset="require(`@/assets/img/step-6-link-bg-tab.jpg`)"
        />
        <source
          media="(max-width: 3000px)"
          :srcset="require(`@/assets/img/step-6-link-bg.jpg`)"
        />
        <img
          :src="require(`@/assets/img/step-6-link-bg.jpg`)"
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
  background-color: #f7f7f7;
}
.block {
  width: 100%;
  height: 400px;
  position: relative;
  padding: 45px 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.title-1 {
  max-width: 770px;
}
@media all and (max-width: 1024px) {
  .block {
    padding: 45px 30px;
    height: 456px;
  }
}
.title-1,
.text-1,
.button {
  z-index: 2;
  position: relative;
  max-width: 359px;
}
.img {
  position: absolute;
  left: 0;
  top: 0;
}
@media all and (max-width: 767px) {
  .block {
    height: 545px;
    padding: 30px 15px;
    justify-content: start;
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
