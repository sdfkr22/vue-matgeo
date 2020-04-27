<template>
<div>
  <div class="row border-bottom">
  
    
    <div class="col">
       <h5 class="font-weight-light text-success"> Soru {{qNum}} :</h5>
      <div v-katex="latexFormula"></div>
    <br />
    </div>
    <div class="col-3">
      <br>
       <button class="btn" :class="btncolor" @click="showHideSolution">{{buttonText}}</button>
    <br />
    <br />
    </div>
    <div class="col">
      <div v-if="show" class="solution">
        <br>
      <div v-katex="latexFormulaSol"></div>
    </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  components: {},

  data() {
    return {
      show: false,
      buttonText: "Çözümü Göster",
      btncolor: "btn-primary",
    };
  },
  props: {
    qNum: "",
    latexFormula: "",
    latexFormulaSol: ""
  },
  methods:{
    showHideSolution(){
      this.show=!this.show;
      if(this.show)
      {
        this.buttonText="Çözümü Gizle"
        this.btncolor="btn-danger"
      }
      else{
        this.buttonText="Çözümü Göster"
         this.btncolor="btn-primary"
      }
    }
  }
};
</script>
<style scoped>
.solution {
  background-color: ivory;
}
</style>