<template>
  <div class="content">
    <div class="main">
      <h1 class="title-1 _mb15 _tac">title-1</h1>
      <p class="text-1 _mb60 _tac">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, nisi.
      </p>
      <div class="stats">
        <div class="desc">
          <img
            :src="require(`@/assets/img/step-2-stats-1.png`)"
            alt="logo"
            class="img"
          />
        </div>
        <div class="cards">
          <div class="card">
            <div class="logo _mb30 logo_0">
              <img
                :src="require(`@/assets/img/step-2-stats-1.png`)"
                alt="logo"
                class="img"
              />
            </div>
            <h3 class="title-4 _blue _mb22">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
              nisi.
            </h3>

            <h4 class="title-2 _blue _mb5">
              85+
            </h4>
            <p class="text-1 _mb15 _light-blue">Lorem, ipsum.</p>
            <hr class="hr _mb15" />

            <h4 class="title-2 _blue _mb5">
              500 000
            </h4>
            <p class="text-1 _mb30 _light-blue">Lorem, ipsum dolor.</p>
            <p class="text-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium sint sapiente saepe ducimus! Tempore, culpa. Enim
              saepe quis iste maiores.
            </p>
          </div>

          <div class="card-sm">
            <div class="logo _mb15 logo_1">
              <img
                :src="require(`@/assets/img/step-2-stats-1.png`)"
                alt="logo"
                class="img"
              />
            </div>
            <p class="text-1 _light-blue">
              Lorem ipsum dolor sit amet.
            </p>
          </div>

          <div class="card-sm">
            <div class="logo _mb15 logo_2">
              <img
                :src="require(`@/assets/img/step-2-stats-1.png`)"
                alt="logo"
                class="img"
              />
            </div>
            <p class="text-1 _light-blue">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
              consequatur fugit explicabo ratione ut quas.
            </p>
          </div>
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
  padding-top: 60px;
}
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: column;
  place-items: center;
}
.desc {
  grid-column: span 1;
  height: 420px;
  padding-right: 30px;
}
.cards {
  grid-column: span 2;
  display: grid;
  grid-template: min-content min-content / 1fr 1fr;
  gap: 15px;
}
.logo_0 {
  width: 120px;
  height: 104px;
}
.logo_1 {
  width: 120px;
  height: 120px;
}
.logo_2 {
  width: 120px;
  height: 63px;
}
.logo .img {
  object-fit: contain;
}
@media all and (max-width: 1024px) {
  .stats {
    grid-template-columns: 1fr;
    grid-auto-flow: row;
    text-align: center;
  }
  .desc {
    grid-column: span 1;
    height: 323px;
    margin-bottom: 30px;
    padding-right: 0;
  }
  .cards {
    grid-column: span 1;
  }
}
.card {
  grid-column: 1 / 2;
  grid-row: 1 / -1;
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
}
.card-sm {
  grid-column: 2 / -1;
  grid-row: span 1;
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
}

.hr {
  border: 1px solid #e5e5e5;
  width: 100%;
}
.hr-mob {
  display: none;
  border: 1px solid #e5e5e5;
  width: 100%;
  margin: 22px 0px;
}
@media all and (max-width: 767px) {
  .content {
    padding-top: 45px;
  }
  .cards {
    grid-template: auto / 1fr;
    gap: 22px;
  }
  .card {
    grid-column: span 1;
    grid-row: span 1;
    padding: 30px 22px;
  }
  .card-sm {
    grid-column: span 1;
    grid-row: span 1;
    padding: 30px 22px;
  }
  .hr-mob {
    display: block;
  }
  .desc {
    margin-bottom: 15px;
    padding: 0;
  }
  ._mb60 {
    margin-bottom: 0;
  }
  ._tac {
    text-align: center;
  }
}
</style>
