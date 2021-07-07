<template>
  <div class="content">
    <step-fourth-block-top class="full" />
    <step-fourth-block-link class="full" />
    <step-fourth-block-items class="full" />
    <step-fourth-block-stats class="full" />
    <step-fourth-block-business class="full" />
    <step-fourth-block-calc class="full" />
    <block-test class="full" />
  </div>
</template>

<script>
import StepFourthBlockTop from "@/components/stepFourth/StepFourthBlockTop.vue";
import StepFourthBlockLink from "@/components/stepFourth/StepFourthBlockLink.vue";
import StepFourthBlockItems from "@/components/stepFourth/StepFourthBlockItems.vue";
import StepFourthBlockStats from "@/components/stepFourth/StepFourthBlockStats.vue";
import StepFourthBlockBusiness from "@/components/stepFourth/StepFourthBlockBusiness.vue";
import StepFourthBlockCalc from "@/components/stepFourth/StepFourthBlockCalc.vue";
import BlockTest from "@/components/base/BlockTest.vue";

export default {
  components: {
    StepFourthBlockTop,
    BlockTest,
    StepFourthBlockLink,
    StepFourthBlockItems,
    StepFourthBlockStats,
    StepFourthBlockBusiness,
    StepFourthBlockCalc,
  },
  metaInfo: {
    title: "Step 4",
    meta: [
      {
        vmid: "description",
        property: "description",
        name: "description",
        content: "",
      },
    ],
    htmlAttrs: {
      lang: "ua",
    },
  },
};
</script>

<style scoped></style>
