<template>
  <div class="content" :class="{ 'bg-gray': step == 6 }">
    <div class="buttons main" v-if="step != 6">
      <button class="button button-white button_no-border" @click="prev()">
        <img
          :src="require(`@/assets/img/button-line.svg`)"
          alt=""
          width="20"
          height="20"
          class="btn-img"
        />
        back
      </button>
      <button class="button button-primary" @click="next()">
        next Step
      </button>
    </div>
    <div class="buttons main" v-else>
      <button class="button button-white" @click="prev()">
        <img
          :src="require(`@/assets/img/button-line.svg`)"
          alt=""
          width="20"
          height="20"
          class="btn-img"
        />
        back
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations(["increment", "decrement"]),
    next() {
      this.increment();
      this.scroll();
    },
    prev() {
      this.decrement();
      this.scroll();
    },
    scroll() {
      window.scroll({
        top: 0,
        left: 0,
        // behavior: "smooth",
      });
    },
  },
  computed: {
    ...mapGetters(["step"]),
  },
};
</script>

<style scoped>
.buttons {
  grid-column: main;
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  margin-top: 45px;
  margin-bottom: 60px;
}
.btn-img {
  margin-right: 10px;
  transition: 0.3s ease;
}
.bg-gray {
  background-color: #f7f7f7;
}
@media all and (min-width: 767px) {
  .button-white:hover .btn-img {
    transform: translateX(-5px);
  }
  .button-white:active .btn-img {
    transform: translateX(0px);
  }
}
@media all and (max-width: 767px) {
  .buttons {
    grid-column: main;
    display: flex;
    flex-direction: column-reverse;
    margin-top: 30px;
    margin-bottom: 15px;
    align-items: center;
  }
  .button {
    width: 100%;
  }
  .button-primary {
    margin-bottom: 15px;
  }
  .button_no-border {
    border-color: transparent;
  }
}
</style>
