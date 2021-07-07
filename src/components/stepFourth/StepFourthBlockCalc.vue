<template>
  <div class="content">
    <div class="block main">
      <h2 class="title-2 _mb30 _white">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore,
        debitis.
      </h2>
      <p class="text-1 _white _mb15">
        Lorem, ipsum.
      </p>
      <ul class="ul-disc _mb30">
        <li class="text-1 _white _mb5">Lorem ipsum dolor sit.</li>
        <li class="text-1 _white _mb5">
          Lorem ipsum dolor sit.
        </li>
        <li class="text-1 _white">
          Lorem ipsum dolor sit.
        </li>
      </ul>
      <button class="button button-white">lorem</button>
      <div class="text-2">
        Lorem, ipsum dolor.
      </div>
      <picture>
        <source
          media="(max-width: 767px)"
          :srcset="require(`@/assets/img/step-4-calc-bg-mob.jpg`)"
        />
        <source
          media="(max-width: 1024px)"
          :srcset="require(`@/assets/img/step-4-calc-bg-tab.jpg`)"
        />
        <source
          media="(max-width: 3000px)"
          :srcset="require(`@/assets/img/step-4-calc-bg.jpg`)"
        />
        <img
          :src="require(`@/assets/img/step-4-calc-bg.jpg`)"
          alt="woman"
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
  height: 432px;
  position: relative;
  padding: 45px 100px;
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
}
.text-2 {
  margin-top: auto;
  padding-bottom: 22px;
}
@media all and (max-width: 1024px) {
  .block {
    padding: 45px 30px;
    height: 462px;
    padding-bottom: 0;
  }
}
.title-2,
.text-1,
.button,
.text-2 {
  z-index: 2;
  position: relative;
  max-width: 600px;
}
.img {
  position: absolute;
  left: 0;
  top: 0;
}
@media all and (max-width: 768px) {
  .title-2,
  .text-1,
  .button,
  .text-2 {
    max-width: 470px;
  }
}
@media all and (max-width: 767px) {
  .block {
    height: 498px;
    padding: 30px 15px;
    padding-bottom: 0;
  }
  .title-2,
  .text-1,
  .button,
  .text-2 {
    max-width: 210px;
  }
  .text-2 {
    color: white;
  }
}
</style>
