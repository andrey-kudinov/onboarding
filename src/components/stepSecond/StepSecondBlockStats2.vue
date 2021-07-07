<template>
  <div class="content">
    <div class="stats main">
      <div class="desc">
        <img
          :src="require(`@/assets/img/step-2-stats-2.png`)"
          alt="logo"
          class="img"
        />
      </div>
      <div class="cards">
        <div class="card">
          <h4 class="title-2 _blue _mb5">
            50+
          </h4>
          <p class="text-1 _mb15 _light-blue">
            Lorem ipsum dolor sit amet.
          </p>
          <hr class="hr _mb15" />

          <h4 class="title-2 _blue _mb5">
            50
          </h4>
          <p class="text-1 _mb15 _light-blue">Lorem, ipsum dolor.</p>
          <hr class="hr _mb15" />

          <h4 class="title-2 _blue _mb5">
            5
          </h4>
          <p class="text-1 _light-blue">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
            enim.
          </p>
        </div>

        <div class="card-sm">
          <p class="title-4 _blue _mb30">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque,
            architecto. Explicabo deleniti sapiente eius soluta ducimus magni
            animi sunt, inventore in, commodi consequatur porro recusandae.
          </p>
          <p class="text-2">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
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
.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: column;
  place-items: center;
}
.desc {
  grid-column: span 1;
  height: 445px;
  padding-right: 30px;
}
.cards {
  grid-column: span 2;
  display: grid;
  grid-template: min-content min-content / 1fr 1fr;
  gap: 15px;
}
.logo {
  width: 100px;
  height: 30px;
}
.logo .img {
  object-fit: contain;
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
  height: 445px;
}
.card-sm {
  grid-column: 2 /-1;
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
@media all and (max-width: 1024px) {
  .stats {
    grid-template-columns: 1fr;
    grid-auto-flow: row;
    text-align: center;
  }
  .desc {
    grid-column: span 1;
    height: 360px;
    margin-bottom: 30px;
    padding-right: 0;
  }
  .cards {
    grid-column: span 1;
  }
  .card {
    height: 360px;
  }
}
@media all and (max-width: 767px) {
  .content {
    padding-top: 25px;
  }
  .cards {
    grid-template: auto / 1fr;
    gap: 22px;
  }
  .card {
    grid-column: span 1;
    grid-row: span 1;
    padding: 30px 22px;
    height: auto;
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
}
</style>
