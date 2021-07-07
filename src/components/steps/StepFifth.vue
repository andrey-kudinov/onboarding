<template>
  <div class="content">
    <step-fifth-block-top class="full" />
    <block-video class="full" />
    <step-fifth-block-items class="full" />
    <step-fifth-block-link class="full" />
    <step-fifth-block-social class="full" />
    <block-test class="full" />
  </div>
</template>

<script>
import StepFifthBlockTop from "@/components/stepFifth/StepFifthBlockTop.vue";
import StepFifthBlockItems from "@/components/stepFifth/StepFifthBlockItems.vue";
import StepFifthBlockLink from "@/components/stepFifth/StepFifthBlockLink.vue";
import StepFifthBlockSocial from "@/components/stepFifth/StepFifthBlockSocial.vue";
import BlockVideo from "@/components/base/BlockVideo.vue";
import BlockTest from "@/components/base/BlockTest.vue";

export default {
  components: {
    StepFifthBlockTop,
    BlockVideo,
    StepFifthBlockLink,
    StepFifthBlockSocial,
    BlockTest,
    StepFifthBlockItems,
  },
  metaInfo: {
    title: "Step 5",
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
