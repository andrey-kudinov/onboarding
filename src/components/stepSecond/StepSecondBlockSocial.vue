<template>
  <div class="content">
    <div class="social main">
      <h4 class="title-4 _mb30 ">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, sint!
      </h4>
      <div class="links">
        <a
          class="links__link"
          v-for="l in links"
          :key="l.icon"
          :href="`${l.prefix}${l.link}`"
          target="_blank"
        >
          <div class="img-wrap">
            <img
              :src="require(`@/assets/img/${l.icon}`)"
              :alt="l.icon"
              class="img"
            />
          </div>
          <h4 class="title-4 link-title" v-text="l.title"></h4>
          <p v-text="l.name" class="link-link text-1 text-link"></p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          icon: "step-1-link-1.png",
          link: "https://www.instagram.com/",
          prefix: "",
          title: "Lorem ipsum",
          name: "@Lorem",
        },
        {
          icon: "step-1-link-2.png",
          link: "https://www.instagram.com/",
          prefix: "",
          title: "Lorem ipsum",
          name: "@Lorem",
        },
        {
          icon: "step-1-link-3.svg",
          link: "https://www.facebook.com/",
          prefix: "",
          title: "Lorem ipsum",
          name: "@Lorem",
        },
        {
          icon: "step-1-link-4.svg",
          link: "https://www.youtube.com/",
          prefix: "",
          title: "Lorem ipsum",
          name: "@Lorem",
        },
      ],
    };
  },
};
</script>

<style scoped>
.content {
  background: #f7f7f7;
  padding-top: 60px;
}
.social {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.block {
  background: #f2f2f2;
  border: 1px solid #dadada;
  box-sizing: border-box;
  border-radius: 5px;
  text-align: center;
  padding: 40px 15px;
  margin: 60px 0;
  width: 100%;
}
@media all and (max-width: 767px) {
  .block {
    margin: 45px 0;
    padding: 30px 15px;
  }
}
.links {
  display: grid;
  grid-template: 1fr 1fr / 1fr 1fr;
  gap: 15px;
}
@media all and (max-width: 767px) {
  .content {
    padding-top: 45px;
  }
  .links {
    display: grid;
    grid-template: auto / 1fr;
    gap: 15px;
    align-self: flex-start;
  }
}
.links__link {
  display: grid;
  grid-template: 1fr 1fr / min-content max-content;
  column-gap: 15px;
}
.img-wrap {
  width: 48px;
  height: 48px;
  grid-column: 1 / 2;
  grid-row: span 2;
}
.img {
  width: 100%;
  height: 100%;
  object-position: center;
  object-fit: cover;
}
.link-title {
  grid-column: 2 / -1;
  grid-row: 1 / 2;
  margin-bottom: 5px;
}
.link-link {
  grid-column: 2 / -1;
  grid-row: 2 / -1;
  text-align-last: left;
}
.links__link:hover .text-link {
  text-decoration: none;
  color: #0a467e;
}
</style>
