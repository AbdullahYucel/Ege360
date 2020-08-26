<template>
  <div class="acilis">
    <div class="goster" v-if="!flag">
      <h1>{{ cevap[0].baslik }}</h1>

      <p>{{ cevap[0].aciklama }}</p>
      <iframe :src="imageShow()"></iframe>
    </div>
    <div class="else" v-else>
      <h1>~ WELCOME ~</h1>

      <p>
        This website designed for introduce physiqual facility of Ege University
        - Faculty of Education.
      </p>
      <iframe
        src="https://momento360.com/e/u/c40df28750f34cae83be6a6291130046"
      ></iframe>
    </div>
  </div>
</template>

<script>
import App from '../App.vue'
import NavBar from './NavBar.vue'

export default {
  component: {
    App,
    NavBar,
  },
  props: {
    whereClick: String,
    classroom: Array,
  },
  data() {
    return {
      cevap: [
        {
          baslik: 'External View',
          image: 'https://momento360.com/e/u/c40df28750f34cae83be6a6291130046',
          aciklama: "Ege University Education Faculty's External View",
        },
      ],
      flag: true,
    }
  },
  watch: {
    whereClick() {
      this.showTitle()
    },
  },
  methods: {
    showTitle() {
      var baslik
      var image
      var aciklama
      this.classroom.find((e) => {
        e.key === this.whereClick
          ? ((baslik = e.baslik), (image = e.image), (aciklama = e.aciklama))
          : ''
      })
      this.cevap[0].baslik = baslik
      this.cevap[0].image = image
      this.cevap[0].aciklama = aciklama
      this.flag = false
    },
    imageShow() {
      return this.cevap[0].image
    },
  },
  mounted: function mounted() {
    this.showTitle()
    this.flag = true
  },
}
</script>

<style scope lang="css">
/* @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@700&display=swap');

.acilis {
  position: relative;
  height: 100%;
  width: calc(100% - 450px);
  overflow: hidden;
  margin-left: 5%;
  padding-top: 115px;
}
.goster {
  margin-left: 20;
  padding-top: 100;
  text-align: center;
  padding: 20px;
  font-family: 'Ubuntu', san-serif;
}
.else {
  margin-left: 20;
  padding-top: 100;
  text-align: center;
  padding: 20px;
  font-family: 'Ubuntu', san-serif;
}
iframe {
  height: 500px;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  display: block;
  border: 5px;
  border-color: black;
}
h1 {
  text-align: center;
  font-size: 3.5em;
  font-weight: bold;
}
p {
  text-align: center;
  font-size: 1.5em;
  font-weight: bold;
} */
</style>
