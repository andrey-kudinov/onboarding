<template>
  <div class="content">
    <div class="social main">
      <h4 class="title-4 _mb15 _blue">
        Lorem ipsum, dolor sit amet consectetur adipisicing.
      </h4>
      <p class="text-1 _mb30">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, in.
        Quisquam tempore veniam reiciendis quas soluta. Id voluptatum,
        temporibus repellat maxime rerum, nemo deserunt ipsam explicabo
        laudantium minus libero voluptate.
      </p>

      <div class="links">
        <a
          class="links__link"
          v-for="(l, i) in links"
          :key="i"
          :class="`link_${i + 1}`"
          target="_blank"
          :href="`${l.prefix}${l.link}`"
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
          title: "Lorem™ в instagram",
          name: "@Lorem",
        },
        {
          icon: "step-1-link-2.png",
          link: "https://www.instagram.com/",
          prefix: "",
          title: "Lorem™ в instagram",
          name: "@Lorem",
        },
        {
          icon: "step-5-link-5.png",
          link: "https://www.instagram.com/",
          prefix: "",
          title: "Lorem™ в instagram",
          name: "@Lorem",
        },
        {
          icon: "step-1-link-3.svg",
          link: "https://www.facebook.com/",
          prefix: "",
          title: "Lorem™ в Facebook",
          name: "@Lorem",
        },
        {
          icon: "step-1-link-4.svg",
          link: "https://www.youtube.com/",
          prefix: "",
          title: "Lorem™ в YouTube",
          name: "@Lorem",
        },
      ],
    };
  },
};
</script>

<style scoped>
.content {
  background: #fff;
  padding: 60px 0;
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
  .content {
    padding: 30px 0;
  }
  .block {
    margin: 45px 0;
    padding: 30px 15px;
  }
}
.links {
  display: grid;
  grid-template: 1fr 1fr / repeat(6, max-content);
  gap: 15px;
}
@media all and (max-width: 1024px) {
  .links {
    display: grid;
    grid-template: 1fr 1fr 1fr / repeat(4, max-content);
    gap: 15px;
  }
}
@media all and (max-width: 767px) {
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
.link_1 {
  grid-column: 1/3;
  grid-row: 1/ 2;
}
.link_2 {
  grid-column: 3/5;
  grid-row: 1/ 2;
}
.link_3 {
  grid-column: 5/7;
  grid-row: 1/ 2;
}
.link_4 {
  grid-column: 2/4;
  grid-row: 2/ -1;
}
.link_5 {
  grid-column: 4/6;
  grid-row: 2/ -1;
}
@media all and (max-width: 1024px) {
  .link_1 {
    grid-column: 1/3;
    grid-row: 1/ 2;
  }
  .link_2 {
    grid-column: 3/5;
    grid-row: 1/ 2;
  }
  .link_3 {
    grid-column: 2/4;
    grid-row: 2/ 3;
  }
  .link_4 {
    grid-column: 1/3;
    grid-row: 3/ -1;
  }
  .link_5 {
    grid-column: 3/5;
    grid-row: 3/ -1;
  }
}
@media all and (max-width: 767px) {
  .link_1 {
    grid-column: 1/-1;
    grid-row: 1/ 2;
  }
  .link_2 {
    grid-column: 1/-1;
    grid-row: 2/ 3;
  }
  .link_3 {
    grid-column: 1/-1;
    grid-row: 3/ 4;
  }
  .link_4 {
    grid-column: 1/-1;
    grid-row: 4/ 5;
  }
  .link_5 {
    grid-column: 1/-1;
    grid-row: 5/ 6;
  }
  ._mb15 {
    margin-bottom: 10px;
  }
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
