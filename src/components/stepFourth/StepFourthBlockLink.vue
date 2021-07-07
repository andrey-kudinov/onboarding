<template>
  <div class="content">
    <div class="block main">
      <h2 class="title-1 _mb15 _white">
        Lorem ipsum dolor sit amet. Rem, neque?
      </h2>
      <p class="text-1 _white _mb30">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi,
        exercitationem blanditiis?
      </p>
      <button class="button button-primary">lorem</button>
      <picture>
        <source
          media="(max-width: 767px)"
          :srcset="require(`@/assets/img/step-4-link-bg-mob.jpg`)"
        />
        <source
          media="(max-width: 1024px)"
          :srcset="require(`@/assets/img/step-4-link-bg-tab.jpg`)"
        />
        <source
          media="(max-width: 3000px)"
          :srcset="require(`@/assets/img/step-4-link-bg.jpg`)"
        />
        <img
          :src="require(`@/assets/img/step-4-link-bg.jpg`)"
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
  padding-top: 60px;
  padding-bottom: 45px;
  background-color: #f2f2f2;
}
.block {
  width: 100%;
  height: 300px;
  position: relative;
  padding: 45px 100px;
  display: flex;
  flex-direction: column;
}
.button {
  margin-top: auto;
}
@media all and (max-width: 1024px) {
  .block {
    padding: 45px 30px;
  }
}
.title-1,
.text-1,
.button {
  z-index: 2;
  position: relative;
  max-width: 470px;
}
.img {
  position: absolute;
  left: 0;
  top: 0;
}
@media all and (max-width: 767px) {
  .block {
    height: 267px;
    padding: 30px 15px;
  }
  .title-1,
  .text-1,
  .button {
    max-width: inherit;
  }
}
</style>
