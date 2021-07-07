<template>
  <div class="" v-if="step || step == 0">
    <top-cards class="" v-if="step != 0" />
    <top-cards-mob class="" v-if="step != 0" />
    <transition name="fade" mode="out-in">
      <component :is="isStep"></component>
    </transition>
    <bottom-cards class="" v-if="step != 0 && step != 6" />
    <bottom-cards-mob class="" v-if="step != 0 && step != 6" />
    <bottom-buttons v-if="step != 0" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import TopCards from "@/components/base/TopCards.vue";
import StepMap from "@/components/steps/StepMap.vue";
import StepFirst from "@/components/steps/StepFirst.vue";
import StepSecond from "@/components/steps/StepSecond.vue";
import StepThird from "@/components/steps/StepThird.vue";
import StepFourth from "@/components/steps/StepFourth.vue";
import StepFifth from "@/components/steps/StepFifth.vue";
import BottomButtons from "@/components/base/BottomButtons.vue";
import BottomCards from "@/components/base/BottomCards.vue";
import BottomCardsMob from "@/components/base/BottomCardsMob.vue";
import StepSixth from "@/components/steps/StepSixth.vue";
import TopCardsMob from "@/components/base/TopCardsMob.vue";

export default {
  components: {
    TopCards,
    StepMap,
    StepFirst,
    StepSecond,
    StepThird,
    StepFourth,
    StepFifth,
    BottomButtons,
    BottomCards,
    BottomCardsMob,
    StepSixth,
    TopCardsMob,
  },
  computed: {
    ...mapGetters(["step"]),
    isStep() {
      switch (this.step) {
        case 0:
          return "step-map";
        case 1:
          return "step-first";
        case 2:
          return "step-second";
        case 3:
          return "step-third";
        case 4:
          return "step-fourth";
        case 5:
          return "step-fifth";
        case 6:
          return "step-sixth";
        default:
          break;
      }
      return "step-sixth";
    },
  },
  methods: {
    time() {
      let timezone_offset_min = new Date().getTimezoneOffset(),
        offset_hrs = parseInt(Math.abs(timezone_offset_min / 60)),
        offset_min = Math.abs(timezone_offset_min % 60),
        timezone_standard;

      if (offset_hrs < 10) offset_hrs = "0" + offset_hrs;

      if (offset_min < 10) offset_min = "0" + offset_min;

      // Add an opposite sign to the offset
      // If offset is 0, it means timezone is UTC
      if (timezone_offset_min < 0)
        timezone_standard = "+" + offset_hrs + ":" + offset_min;
      else if (timezone_offset_min > 0)
        timezone_standard = "-" + offset_hrs + ":" + offset_min;
      else if (timezone_offset_min == 0) timezone_standard = "Z";

      // Timezone difference in hours and minutes
      // String such as +5:30 or -6:00 or Z

      let dt = new Date(),
        current_date = dt.getDate(),
        current_month = dt.getMonth() + 1,
        current_year = dt.getFullYear(),
        current_hrs = dt.getHours(),
        current_mins = dt.getMinutes(),
        current_secs = dt.getSeconds(),
        current_datetime;

      // Add 0 before date, month, hrs, mins or secs if they are less than 0
      current_date = current_date < 10 ? "0" + current_date : current_date;
      current_month = current_month < 10 ? "0" + current_month : current_month;
      current_hrs = current_hrs < 10 ? "0" + current_hrs : current_hrs;
      current_mins = current_mins < 10 ? "0" + current_mins : current_mins;
      current_secs = current_secs < 10 ? "0" + current_secs : current_secs;

      // Current datetime
      // String such as 2016-07-16T19:20:30
      current_datetime =
        current_year +
        "-" +
        current_month +
        "-" +
        current_date +
        "T" +
        current_hrs +
        ":" +
        current_mins +
        ":" +
        current_secs;
      console.log(`Время: ${current_datetime + timezone_standard}`);
    },
  },
};
</script>

<style scoped></style>
