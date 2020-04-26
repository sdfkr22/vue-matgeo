<template>
<div>
  <br>
 
<h5 class="font-weight-light text-success"> Soru {{qNum}} :</h5>
  <div class="row border-bottom">
   
    
    <div class="col">
      <div v-katex="latexFormula"></div>
    <br />
    <br />
    </div>
    <div class="col-3">
       <button class="btn" :class="btncolor" @click="showHideSolution">{{buttonText}}</button>
    <br />
    <br />
    </div>
    <div class="col">
      <div v-if="show" class="solution">
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