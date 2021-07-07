<template>
  <transition name="pic" mode="out-in">
    <div class="content" v-if="test" :key="currentQuestion">
      <div class="test main">
        <!-- тест -->
        <div
          class="test__test"
          v-for="(q, j) in test"
          :key="q.desc"
          :class="{ visible: q.id == currentQuestion }"
        >
          <h2 class="title-2 _mb10">Lorem, ipsum.</h2>
          <!-- вопрос -->
          <p class="text-1 _mb22" v-text="q.question"></p>

          <!-- ответы -->
          <label
            class="checkbox-container _mb15"
            v-for="(a, i) in q.answers"
            :key="i"
            @change="click(i, j)"
            :class="`label_${j}`"
          >
            <div
              class="text-1 answer"
              :class="`answer_${j}`"
              v-text="a.answer"
            ></div>
            <input type="checkbox" class="input" :class="`input_${j}`" />
            <div
              class="text-2 _green"
              :class="`correct_${j}`"
              v-text="a.comment"
            ></div>
            <div
              class="text-2 _red"
              :class="`wrong_${j}`"
              v-text="a.comment"
            ></div>
            <div class="checkmark"></div>
          </label>
          <button
            class="button button-primary to-next"
            @click="toNext"
            v-if="currentQuestion != test.length"
            :class="{
              opacity_1: isButton,
            }"
          >
            Lorem, ipsum.
          </button>
          <p
            class="text-1 _green text-success"
            v-if="currentQuestion == test.length"
            :class="{
              opacity_1: isButton,
            }"
          >
            {{
              currentQuestion == 6
                ? "Lorem ipsum dolor sit amet."
                : "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet!"
            }}
          </p>
          <button
            class="button button-primary to-next-mob"
            @click="toNext"
            v-if="currentQuestion != test.length && !isDesctop"
            :class="{
              d_block: isButton,
            }"
          >
            Lorem, ipsum.
          </button>
          <p
            class="text-1 _green text-success-mob"
            v-if="currentQuestion == test.length && !isDesctop"
            :class="{
              d_block: isButton,
            }"
          >
            {{
              currentQuestion == 6
                ? "Lorem ipsum dolor sit amet."
                : "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet!"
            }}
          </p>
        </div>
        <!-- картинки -->
        <div
          v-for="(p, i) in test"
          class="test__img"
          :key="i"
          :class="{ 'visible-img': p.id == currentQuestion }"
        >
          <picture>
            <source
              media="(max-width: 767px)"
              :srcset="require(`@/assets/img/${p.mob}`)"
            />
            <source
              media="(max-width: 1024px)"
              :srcset="require(`@/assets/img/${p.tab}`)"
            />
            <source
              media="(max-width: 3000px)"
              :srcset="require(`@/assets/img/${p.desc}`)"
            />
            <img
              :src="require(`@/assets/img/${p.desc}`)"
              alt="test image"
              class="img img-test-js"
            />
          </picture>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      currentQuestion: 1,
      isButton: false,
      isDesctop: window.innerWidth > 1024,
    };
  },
  methods: {
    toNext() {
      this.isButton = false;
      this.currentQuestion++;
    },
    click(i, j) {
      document.querySelectorAll(`.answer_${j}`)[i].classList.add("_semi-bold");
      if (this.test[j].answers[i].correct) {
        document.querySelectorAll(`.correct_${j}`)[i].style.display = "block";
        document.querySelectorAll(`.input_${j}`)[i].checked = true;
        document
          .querySelectorAll(`.input_${j}`)[i].classList.add(`correct_${j}-js`);
        if (
          document.querySelectorAll(`.correct_${j}-js`).length ==
          this.test[j].answers.filter((el) => el.correct).length
        ) {
          document
            .querySelectorAll(`.label_${j}`)
            .forEach((el) => el.classList.add("pen"));
          this.isButton = true;
        }
      }
      if (!this.test[j].answers[i].correct) {
        document.querySelectorAll(`.wrong_${j}`)[i].style.display = "block";
        document.querySelectorAll(`.input_${j}`)[i].checked = true;
        document.querySelectorAll(`.input_${j}`)[i].disabled = true;
        document.querySelectorAll(`.answer_${j}`)[i].classList.add("_gray");
      }
    },
  },
  computed: {
    ...mapGetters([
      "testStepOne",
      "testStepTwo",
      "testStepThree",
      "testStepFour",
      "testStepFive",
      "testStepSix",
      "step",
    ]),
    test() {
      let arr;
      switch (this.step) {
        case 1:
          arr = this.testStepOne;
          break;
        case 2:
          arr = this.testStepTwo;
          break;
        case 3:
          arr = this.testStepThree;
          break;
        case 4:
          arr = this.testStepFour;
          break;
        case 5:
          arr = this.testStepFive;
          break;
        case 6:
          arr = this.testStepSix;
          break;
      }
      return arr;
    },
  },
};
</script>

<style scoped>
.content {
  background: #f7f7f7;
  padding: 60px 0;
}
@media all and (max-width: 767px) {
  .content {
    padding: 45px 0;
  }
}
.test {
  display: grid;
  grid-template: 1fr / 1fr 1fr;
  width: 100%;
}
.test__test {
  grid-column: 1 / 2;
  flex-direction: column;
  justify-content: start;
  padding: 45px 45px 45px 80px;
  background-color: #fff;
  display: none;
}
.visible {
  display: flex;
}
.test__img {
  grid-column: 2 / -1;
  width: 100%;
  height: 100%;
  transition: 0.5s ease;
  display: none;
}
.visible-img {
  display: block;
}
.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.text-2 {
  /* position: absolute;
  bottom: -20px; */
  margin-top: 5px;
  width: max-content;
  display: none;
}
.to-next {
  opacity: 0;
  pointer-events: none;
  transition: 0.3s ease;
  margin-top: 8px;
  align-self: end;
}
.text-success {
  opacity: 0;
  padding: 12px 0;
  transition: 0.3s ease;
  margin-top: 8px;
  max-width: 300px;
}
.to-next-mob {
  transition: 0.3s ease;
  margin-top: 8px;
  align-self: end;
  display: none;
}
.text-success-mob {
  transition: 0.3s ease;
  margin-top:15px;
  max-width: 300px;
  display: none;
}
@media all and (max-width: 1024px) {
  .to-next {
    display: none;
  }
  .text-success {
    display: none;
  }
}
.opacity_1 {
  opacity: 1;
  pointer-events: inherit;
}
.pen {
  pointer-events: none;
}
.d_block {
  display: block;
}
@media all and (max-width: 1024px) {
  .test {
    grid-template: 1fr max-content / 1fr;
  }
  .test__test {
    grid-column: 1 / -1;
    grid-row: 1 / 2;
    justify-content: inherit;
    padding: 30px 45px 30px 80px;
  }
  .test__img {
    grid-column: 1 / -1;
    grid-row: 2 / -1;
    height: 300px;
  }
}
@media all and (max-width: 767px) {
  .test__test {
    padding: 30px 15px;
  }
  .test__img {
    height: 200px;
  }
  .to-next {
    width: 100%;
    margin-top: 15px;
  }
}
</style>

<style scoped>
/* Customize the label (the container) */
.checkbox-container {
  display: block;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: #858585;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: fit-content;
}

/* Hide the browser's default checkbox */
.checkbox-container .input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  /* top: 50%;
  transform: translateY(-50%); */
  top: 4px;
  left: 0;
  height: 16px;
  width: 16px;
  background-color: transparent;
  border: 1px solid #858585;
  border-radius: 2px;
  transition: 0.3s ease;
}

/* On mouse-over, add a grey background color */
.checkbox-container:hover .input ~ .checkmark {
  /* background-color: #dadada; */
}

/* When the checkbox is checked, add a blue background */
.checkbox-container .input:checked ~ .checkmark {
  background-color: #008fc5;
  border: 1px solid transparent;
}

.checkbox-container .input:disabled ~ .checkmark {
  background-color: #008fc5;
  border: 1px solid transparent;
  opacity: 0.5;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.checkbox-container .input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.checkbox-container .checkmark:after {
  left: 35%;
  top: 5%;
  width: 5px;
  height: 10px;
  border: solid #fff;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
