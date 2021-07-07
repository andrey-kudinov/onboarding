<template>
  <div class="content">
    <div class="stats main">
      <div class="desc">
        <h2 class="title-1 _mb15">
          Lorem, ipsum.
        </h2>
        <p class="text-1">
          Отримуємо дохід і допомагаємо іншим будувати стабільний бізнес.
        </p>
      </div>
      <div class="cards">
        <div class="card">
          <h3 class="title-4 _blue _mb22 _light-blue-mob">
            Lorem, ipsum.
          </h3>

          <h4 class="title-2 _blue _mb5">
            18
          </h4>
          <p class="text-1 _mb15 _light-blue _primary-mob">lorem</p>
          <hr class="hr _mb15" />

          <h4 class="title-2 _blue _mb5">
            200 000+
          </h4>
          <p class="text-1 _mb15 _light-blue _primary-mob">
            Lorem ipsum dolor sit amet.
          </p>
          <hr class="hr _mb15" />

          <h4 class="title-2 _blue _mb5">
            160+
          </h4>
          <p class="text-1 _mb15 _light-blue _primary-mob">lorem</p>
          <hr class="hr _mb15" />

          <h4 class="title-2 _blue _mb5">
            56
          </h4>
          <p class="text-1 _mb15 _light-blue _primary-mob">
            Lorem ipsum dolor sit amet.
          </p>
          <hr class="hr _mb15" />

          <h4 class="title-2 _blue _mb5">
            300 000+
          </h4>
          <p class="text-1 _light-blue _primary-mob">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            similique.
          </p>
        </div>

        <hr class="hr-mob" />

        <div class="card-sm">
          <h3 class="title-4 _blue _mb22 _light-blue-mob">
            Lorem, ipsum.
          </h3>
          <h4 class="title-2 _blue _mb5">
            1,3
          </h4>
          <p class="text-1 _light-blue _primary-mob">
            Lorem, ipsum.
          </p>
        </div>

        <hr class="hr-mob" />

        <div class="card-sm">
          <h3 class="title-4 _blue _mb22 _light-blue-mob">
            Lorem ipsum dolor sit amet.
          </h3>
          <h4 class="title-2 _blue">
            8,5
          </h4>
        </div>

        <hr class="hr-mob" />

        <div class="card-sm">
          <h3 class="title-4 _blue _mb22">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam,
            vel.
          </h3>
          <ul class="ul-disc">
            <li class="text-1 _mb5">
              Lorem ipsum dolor sit amet.
            </li>
            <li class="text-1 _mb5">
              Lorem ipsum dolor sit amet.
            </li>
            <li class="text-1">
              Lorem ipsum dolor sit amet.
            </li>
          </ul>
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
}
.cards {
  grid-column: span 2;
  display: grid;
  grid-template: min-content min-content min-content / 1fr 1fr;
  gap: 15px;
}
@media all and (max-width: 1024px) {
  .stats {
    grid-template-columns: 1fr;
    grid-auto-flow: row;
    text-align: center;
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
    padding: 45px 0;
  }
  .cards {
    grid-template: repeat(6, min-content) / 1fr;
    gap: 0;
  }
  .card {
    grid-column: span 1;
    grid-row: span 1;
    background: transparent;
    border: none;
    padding: 0;
  }
  .card-sm {
    grid-column: span 1;
    grid-row: span 1;
    background: transparent;
    border: none;
    padding: 0;
  }
  .hr {
    display: none;
  }
  .hr-mob {
    display: block;
  }
  .desc {
    margin-bottom: 30px;
  }
  ._primary-mob {
    color: #56565a;
  }
  ._light-blue-mob {
    color: #008fc5;
  }
}
</style>
