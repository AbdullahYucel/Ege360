<template>
  <div id="app">
    <div class="uyari">
      <h2>Please rotate your device for using this websites features complately!</h2>
      <img src="phone.png" class="phone" />
    </div>
    <Header />
    <NavBar @clicked="sendID" />
    <New :whereClick="whereClick" :classroom="classroom" />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import New from "./components/New.vue";

export default {
  name: "App",
  components: {
    NavBar,
    New,
    Footer,
    Header,
  },
  data() {
    return {
      cevap: [
        {
          baslik: "",
          image: "",
          aciklama: "",
        },
      ],
      classroom: [],
      handle: [],
      whereClick: "",
    };
  },
  watch: {
    whereClick: function () {},
  },

  methods: {
    sendID(e) {
      this.whereClick = e;
      return this.whereClick;
    },
  },

  created() {
    fetch("../data.json")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        return (this.classroom = res.siniflar);
      });
  },
};
</script>

<style>
/* body {
  margin: 0;
  padding: 0;
  background-image: linear-gradient(to top, #accbee 0%, #e7f0fd 100%);
  background-size: cover;
}
.deniyoruz {
  display: inherit;
  width: 100%;
  height: calc(100% - 150px);
  margin: auto;
} */
</style>
