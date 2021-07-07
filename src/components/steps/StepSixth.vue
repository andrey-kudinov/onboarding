<template>
  <div class="content">
    <step-sixth-block-top class="full" />
    <step-sixth-block-items class="full" />
    <step-sixth-block-links class="full" />
    <block-video class="full" />
    <step-sixth-block-list class="full" />
    <block-test class="full" />
    <step-sixth-block-link class="full" />
  </div>
</template>

<script>
import StepSixthBlockTop from "@/components/stepSixth/StepSixthBlockTop.vue";
import StepSixthBlockItems from "@/components/stepSixth/StepSixthBlockItems.vue";
import StepSixthBlockLinks from "@/components/stepSixth/StepSixthBlockLinks.vue";
import StepSixthBlockList from "@/components/stepSixth/StepSixthBlockList.vue";
import StepSixthBlockLink from "@/components/stepSixth/StepSixthBlockLink.vue";
import BlockVideo from "@/components/base/BlockVideo.vue";
import BlockTest from "@/components/base/BlockTest.vue";


export default {
  components: {
    StepSixthBlockTop,
    StepSixthBlockItems,
    StepSixthBlockLinks,
    BlockVideo,
    StepSixthBlockList,
    BlockTest,
    StepSixthBlockLink,
  },
  metaInfo: {
    title: "Step 6",
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
