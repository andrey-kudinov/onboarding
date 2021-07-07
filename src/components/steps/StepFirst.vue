<template>
  <div class="step content">
    <step-first-block-top class="full" />
    <block-video class="full" />
    <step-first-block-products class="full" />
    <step-first-block-stats class="full" />
    <step-first-block-social class="full" />
    <block-test class="full" />
  </div>
</template>

<script>
import StepFirstBlockTop from "@/components/stepFirst/StepFirstBlockTop.vue";
import BlockVideo from "@/components/base/BlockVideo.vue";
import StepFirstBlockProducts from "@/components/stepFirst/StepFirstBlockProducts.vue";
import StepFirstBlockStats from "@/components/stepFirst/StepFirstBlockStats.vue";
import StepFirstBlockSocial from "@/components/stepFirst/StepFirstBlockSocial.vue";
import BlockTest from "@/components/base/BlockTest.vue";

export default {
  components: {
    StepFirstBlockTop,
    BlockVideo,
    StepFirstBlockProducts,
    StepFirstBlockStats,
    StepFirstBlockSocial,
    BlockTest,
  },
  metaInfo: {
    title: "Step 1",
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

<style scoped>
.stepFirst {
}
</style>
