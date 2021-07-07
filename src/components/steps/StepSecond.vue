<template>
  <div class="content">
    <step-second-block-top class="full" />
    <block-video class="full" />

    <step-second-block-stats class="full" />
    <step-second-block-stats-2 class="full" />
    <step-second-block-stats-3 class="full" />

    <step-second-block-social class="full" />
    <block-test class="full" />

  </div>
</template>
<script>
import StepSecondBlockTop from "@/components/stepSecond/StepSecondBlockTop.vue";
import BlockVideo from "@/components/base/BlockVideo.vue";
import BlockTest from "@/components/base/BlockTest.vue";
import StepSecondBlockSocial from "@/components/stepSecond/StepSecondBlockSocial.vue";
import StepSecondBlockStats from "@/components/stepSecond/StepSecondBlockStats.vue";
import StepSecondBlockStats2 from "@/components/stepSecond/StepSecondBlockStats2.vue";
import StepSecondBlockStats3 from "@/components/stepSecond/StepSecondBlockStats3.vue";

export default {
  components: {
    StepSecondBlockTop,
    BlockVideo,
    StepSecondBlockStats,
    StepSecondBlockStats2,
    StepSecondBlockStats3,
    StepSecondBlockSocial,
    BlockTest,
  },
  metaInfo: {
    title: "Step 2",
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
