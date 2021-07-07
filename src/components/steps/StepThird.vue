<template>
  <div class="content">
    <step-third-block-top class="full" />
    <block-items class="full" />
    <step-third-block-links class="full" />
    <step-third-block-mini-cards class="full" />
    <block-video class="full" />
    <step-third-block-list class="full" />
    <block-test class="full" />
  </div>
</template>

<script>
import StepThirdBlockTop from "@/components/stepThird/StepThirdBlockTop.vue";
import BlockVideo from "@/components/base/BlockVideo.vue";
import BlockTest from "@/components/base/BlockTest.vue";
import BlockItems from "@/components/base/BlockItems.vue";
import StepThirdBlockMiniCards from "@/components/stepThird/StepThirdBlockMiniCards.vue";
import StepThirdBlockList from "@/components/stepThird/StepThirdBlockList.vue";
import StepThirdBlockLinks from "@/components/stepThird/StepThirdBlockLinks.vue";

export default {
  components: {
    StepThirdBlockTop,
    BlockVideo,
    BlockTest,
    BlockItems,
    StepThirdBlockList,
    StepThirdBlockMiniCards,
    StepThirdBlockLinks,
  },
  metaInfo: {
    title: "Step 3",
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
