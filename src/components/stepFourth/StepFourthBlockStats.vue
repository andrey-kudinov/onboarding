<template>
  <div class="content">
    <div class="stats main">
      <div class="desc">
        <h2 class="title-1 _mb15">
          Lorem, ipsum dolor.
        </h2>
        <p class="text-1 _mb30">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
          blanditiis, harum vero sed aspernatur dicta.
        </p>
        <button class="button-primary button">
          Lorem, ipsum.
        </button>
      </div>
      <div class="cards">
        <div class="card-sm">
          <img
            :src="require(`@/assets/img/step-4-stats-ico-1.svg`)"
            alt="icon"
            width="30"
            height="30"
            class="_mb10"
          />
          <h3 class="title-4  _mb15 _bold">
            Lorem, ipsum dolor.
          </h3>
          <p class="text-1">Lorem ipsum dolor sit amet.</p>
        </div>

        <div class="card-sm">
          <img
            :src="require(`@/assets/img/step-4-stats-ico-2.svg`)"
            alt="icon"
            width="30"
            height="30"
            class="_mb10"
          />
          <h3 class="title-4  _mb15 _bold">
            Lorem, ipsum dolor.
          </h3>
          <p class="text-1">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
        </div>

        <div class="card">
          <img
            :src="require(`@/assets/img/step-4-stats-ico-3.svg`)"
            alt="icon"
            width="30"
            height="30"
            class="_mb10"
          />
          <h3 class="title-4  _mb15 _bold">
            Lorem ipsum dolor sit amet consectetur.
          </h3>
          <p class="text-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            repellendus, reiciendis dicta hic adipisci dignissimos.
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
  padding-right: 15px;
}
.cards {
  grid-column: span 2;
  display: grid;
  grid-template: 1fr 1fr / 1fr 1fr;
  gap: 15px;
}
.title-4 {
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 15px;
}
@media all and (max-width: 1024px) {
  .stats {
    grid-template-columns: 1fr;
    grid-auto-flow: row;
  }
  .desc {
    grid-column: span 1;
    margin-bottom: 45px;
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
.card-sm {
  grid-column: 1 / 2;
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
    padding: 45px 0;
  }
  .cards {
    grid-template: auto / 1fr;
    gap: 10px;
  }
  .card {
    grid-column: span 1;
    grid-row: span 1;
  }
  .card-sm {
    grid-column: span 1;
    grid-row: span 1;
    padding: 22px;
  }
  .hr {
    display: none;
  }
  .hr-mob {
    display: block;
  }
  .desc {
    margin-bottom: 30px;
    padding: 0;
  }
  .button-primary {
    width: 100%;
  }
}
</style>
