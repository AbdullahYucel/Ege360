<template>
  <div class="footer">
    <div class="team">
      <ul>
        <h3>AUTHORS</h3>
        <li v-for="isim in name" :key="isim.index">{{ isim }}</li>
      </ul>
    </div>
    <div class="contact">
      <h3>CONTACTS</h3>
      <p>{{ this.adress.adress }}</p>
      <p>{{ this.adress.eMail }}</p>
    </div>
    <div class="copyright">
      <p>
        COPYRIGHT {{ new Date().getFullYear() }} ©
        <br />FIVE FLOWERS BUSINESS GROUP.
        <br />ALL RIGHTS RESERVED.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: [],
      adress: [],
    };
  },

  created() {
    fetch("../data.json")
      .then((e) => {
        return e.json();
      })
      .then((e) => {
        return (this.name = e.projectTeam), (this.adress = e.contact[0]);
      });
  },
};
</script>

<style lang="css"></style>
