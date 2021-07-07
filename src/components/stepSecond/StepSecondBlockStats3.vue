<template>
  <div class="content">
    <div class="stats main">
      <div class="desc">
        <img
          :src="require(`@/assets/img/step-2-stats-3.png`)"
          alt="logo"
          class="img"
        />
      </div>
      <div class="cards">
        <div class="card-bg">
          <div class="card-bg__item">
            <div class="img-wrap img-wrap_1">
              <img
                :src="require(`@/assets/img/step-2-stats-3.png`)"
                alt="logo"
                class="img"
              />
            </div>
          </div>
          <div class="card-bg__item">
            <div class="img-wrap img-wrap_2">
              <img
                :src="require(`@/assets/img/step-2-stats-3.png`)"
                alt="logo"
                class="img"
              />
            </div>
          </div>
          <div class="card-bg__item">
            <div class="img-wrap img-wrap_3">
              <img
                :src="require(`@/assets/img/step-2-stats-3.png`)"
                alt="logo"
                class="img"
              />
            </div>
          </div>
          <div class="card-bg__item">
            <div class="img-wrap img-wrap_4">
              <img
                :src="require(`@/assets/img/step-2-stats-3.png`)"
                alt="logo"
                class="img"
              />
            </div>
          </div>
        </div>

        <div class="card">
          <h3 class="title-4 _blue _mb5">
            Lorem, ipsum dolor.
          </h3>
          <p class="text-1 _mb5 _light-blue">
            Lorem, ipsum.
          </p>
          <p class="text-1 _mb15 _light-blue">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque,
            consequuntur officiis veniam id nisi quas! Blanditiis alias
            exercitationem rem ex.
          </p>

          <hr class="hr _mb15" />

          <h3 class="title-4 _blue _mb5">
            lorem
          </h3>
          <p class="text-1 _mb5 _light-blue">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non alias
            consequuntur ea enim maxime dignissimos!
          </p>
          <p class="text-2 _mb15">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto,
            molestias?
          </p>

          <hr class="hr _mb15" />

          <h3 class="title-4 _blue _mb5">
            Lorem, ipsum.
          </h3>
          <p class="text-1 _mb15 _light-blue">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            nisi harum repudiandae placeat aspernatur sed? Molestias ipsa
            exercitationem placeat iste ducimus. Cupiditate, itaque dignissimos?
            Odio dolore explicabo soluta mollitia a.
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
  padding: 60px 0;
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
@media all and (max-width: 1024px) {
  .stats {
    grid-template-columns: 1fr;
    grid-auto-flow: row;
    text-align: center;
  }
  .desc {
    grid-column: span 1;
    height: 350px;
    margin-bottom: 30px;
    padding-right: 0;
  }
  .cards {
    grid-column: span 1;
  }
}
.card {
  grid-column: 2 / -1;
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
.card-bg {
  grid-column: 1 / 2;
  grid-row: 1 / -1;
  display: grid;
  grid-template: 1fr 1fr / 1fr 1fr;
  gap: 10px;
}
.card-bg__item {
  background: #f7f7f7;
  border: 1px solid #ededed;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
}
.img-wrap {
  width: 100px;
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
    padding-top: 25px;
    padding-bottom: 45px;
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
  .card-bg {
    grid-template: max-content max-content / 1fr 1fr;
  }
  .img-wrap {
    margin: 30px 0px;
  }
}
.img-wrap_1 {
  width: 100px;
  height: 100px;
}
.img-wrap_2 {
  width: 73px;
}
.img-wrap_3 {
  width: 66px;
  height: 114px;
}
.img-wrap_4 {
  width: 114px;
  height: 114px;
}
</style>
