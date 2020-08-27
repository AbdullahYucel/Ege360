<template>
  <div class="contain">
    <div class="roof"></div>
    <div class="adress">
      <h4
        :id="info.key"
        v-for="info in information"
        :key="info.index"
        @click="sendID"
        class="yazi"
      >{{ info.baslik }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    fetch("../data.json")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        return (this.information = res.siniflar);
      });
  },
  data() {
    return {
      information: [],
      whereClick: "",
    };
  },
  methods: {
    sendID(e) {
      this.$emit("clicked", e.currentTarget.id);
    },
  },
};
</script>

<style></style>
