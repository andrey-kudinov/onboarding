<template>
  <div class="content">
    <div class="block main">
      <div class="text">
        <h2 class="title-1 _mb15">title-1</h2>
        <p class="text-1 _mb15">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione,
          voluptates.
        </p>
        <p class="text-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          ratione voluptatem obcaecati facilis eius rerum ad? Illo optio, odio
          dolorum quidem placeat labore maiores veniam deserunt dignissimos enim
          nemo amet.
        </p>
      </div>
      <div class="cards">
        <div class="card card_1">
          <h3 class="title-4 _blue _mb22 card_1__title">
            title-4
          </h3>

          <h4 class="title-2 _blue _mb5 card_1__num-1">
            4
          </h4>
          <p class="text-2 _primary _mb15 card_1__text-1">
            Lorem ipsum dolor sit amet.
          </p>
          <hr class="hr _mb15 card_1__hr" />

          <h4 class="title-2 _blue _mb5 card_1__num-2">
            100
          </h4>
          <p class="text-2 _primary card_1__text-2">
            Lorem ipsum dolor sit amet.
          </p>
        </div>

        <div class="card card_2">
          <h3 class="title-4 _blue _mb22 card_2__title">
            Lorem, ipsum dolor.
          </h3>

          <h4 class="title-2 _blue _mb5 card_2__num-1">
            60+
          </h4>
          <p class="text-2 _mb15 _light-blue card_2__text-1">
            Lorem ipsum dolor sit.
          </p>
          <hr class="hr _mb15" />

          <h4 class="title-2 _blue _mb5 card_2__num-2">
            100+
          </h4>
          <p class="text-2 _mb15 _light-blue card_2__text-2">lorem</p>
          <hr class="hr _mb15" />

          <h4 class="title-2 _blue _mb5 card_2__num-3">
            400+
          </h4>
          <p class="text-2 _light-blue card_2__text-3">
            lorem
          </p>
        </div>

        <div class="card card_3">
          <div class="img-wrap _mb5">
            <img
              :src="require(`@/assets/img/step-1-logo.png`)"
              alt="logo"
              class="img"
            />
          </div>
          <p class="text-2 _mb15 _primary">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni.
          </p>

          <a
            class="text-2 _blue card__link"
            href="https://www.directsellingnews.com/global-100-lists"
          >
            lorem
          </a>
        </div>
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
  height: 550px;
  padding: 60px 0;
  color: #ededed;
}
.text {
  padding: 70px 0;
  padding-right: 10px;
}
.card {
  background: #f7f7f7;
  border: 1px solid #ededed;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 30px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  position: absolute;
}
.hr {
  border: 1px solid #e5e5e5;
  width: 100%;
}
.cards {
  grid-column: span 2;
  position: relative;
  width: 100%;
  height: 100%;
}
.img-wrap {
  width: 98px;
  height: 48px;
}
.card_1 {
  width: 300px;
  left: 0;
  bottom: 0;
  background-color: #f2f2f2;
}
.card_2 {
  width: 320px;
  left: 35%;
  top: 0;
  z-index: 2;
  background: #fff;
}
.card_3 {
  width: 200px;
  right: 0;
  bottom: 0;
  padding: 30px 15px;
  z-index: 3;
  box-shadow: 0px 10px 36px -10px rgba(108, 108, 108, 0.25);
}
.card__link {
  word-break: break-all;
}
@media all and (max-width: 1024px) {
  .text {
    padding-top: 0;
    padding-bottom: 30px;
  }
  .block {
    grid-template-columns: 1fr;
    grid-template-rows: min-content min-content;
    height: auto;
  }
  .cards {
    position: relative;
    width: 100%;
    height: 450px;
  }
}
@media all and (max-width: 767px) {
  .block {
    padding: 45px 0;
  }
  .cards {
    height: auto;
    display: grid;
    row-gap: 15px;
  }
  .card {
    position: relative;
    padding: 22px;
    width: 100%;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  .card > * {
    margin: 0;
  }
  .card_2 {
    align-items: flex-start;
  }
  .hr {
    display: none;
  }
  .card_1 {
    display: grid;
    grid-template: max-content max-content max-content / 1fr 1fr;
    gap: 10px;
  }
  .card_1__title {
    grid-column: 1 / -1;
    grid-row: 1 / 2;
  }
  .card_1__num-1 {
    grid-column: 1/2;
    grid-row: 2/3;
  }
  .card_1__num-2 {
    grid-column: 2/-1;
    grid-row: 2/3;
  }
  .card_1__text-1 {
    grid-column: 1/2;
    grid-row: 3/-1;
  }
  .card_1__text-2 {
    grid-column: 2/-1;
    grid-row: 3/-1;
  }
  /* .card_1__hr {
    display: block;
    position: absolute;
    transform: rotate(90deg);
    width: 25%;
    left: 37%;
    top: 65%;
  } */
  .card_2 {
    display: grid;
    grid-template: max-content max-content max-content / 1fr 1fr 1fr 1fr;
    column-gap: 5px;
    row-gap: 10px;
  }
  .card_2__title {
    grid-column: 1 / -1;
    grid-row: 1/2;
  }
  .card_2__num-1 {
    grid-column: 1 / 3;
    grid-row: 2/3;
  }
  .card_2__num-2 {
    grid-column: 3 / 4;
    grid-row: 2/3;
  }
  .card_2__num-3 {
    grid-column: 4 / -1;
    grid-row: 2/3;
  }
  .card_2__text-1 {
    grid-column: 1 / 3;
    grid-row: 3 / -1;
  }
  .card_3 {
    display: grid;
    gap: 15px;
    place-items: center;
  }
}
</style>
