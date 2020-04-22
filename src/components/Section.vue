<template>
  <div>
    <div v-katex="latexFormula"></div>
    <br />
    <br />
    <button class="btn btn-primary" @click="show=!show">Çözümü Göster</button>
    <br />
    <br />
    <div v-if="show" class="solution">
      <br />
      <div v-katex="latexFormulaSol"></div>
    </div>
    <br />
  </div>
</template>
<script>
export default {
  components: {},

  data() {
    return {
      show: false
    };
  },
  props: {
    latexFormula: "",
    latexFormulaSol: ""
  }
};
</script>
<style scoped>
.solution {
  background-color: ivory;
}
</style>