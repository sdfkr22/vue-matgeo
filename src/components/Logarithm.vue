<template>
  <div class="row justify-content-around">
    <div class="col-md-4">
      <h3 class="font-weight-light text-success">Logaritma</h3>
      <h5 class="font-weight-light">Kurallar</h5>
      <p></p>
    </div>
    <div class="col-md-8 border-left">
      
      <appSection :latexFormula="formula1" :latexFormulaSol="formula1s" :qNum="1"></appSection>
      <appSection :latexFormula="formula2" :latexFormulaSol="formula2s" :qNum="2"></appSection>
      <appSection :latexFormula="formula3" :latexFormulaSol="formula3s" :qNum="3"></appSection>
      <appSection :latexFormula="formula4" :latexFormulaSol="formula4s" :qNum="4"></appSection>
    </div>
  </div>
</template>
<script>
import Section from "./Section";
export default {
  components: {
    appSection: Section
  },

  data() {
    return {
      pageNum: "",
      show: false,
      latexFormula: "",
      latexFormulaSol: "",
      formula1: "\\log_2{8} = x ",
      formula1s:
        "\\begin{aligned} \\log_2{2^3}&=x \\cr 3\\log_2{2}&=x \\cr 3.1&=x \\cr x&=3 \\end{aligned}",
      formula2: "\\log_3{81} = x",
      formula2s:
        "\\begin{aligned} \\log_3{3^4} &= x \\cr 4\\log_3{3} &= x \\cr 4.1 &= x \\cr x &= 4 \\end{aligned}",
      formula3: "\\log_3{(5x+7)} = 3 \\text{ ise x=?}",
      formula3s:
        "\\begin{aligned} 3^3 &= 5x+7 \\cr 27 &= 5x+7 \\cr 20 &= 5x \\cr x &= 4 \\end{aligned}",
      formula4: "\\log_5{(4x-15)} = 1 \\text{ ise x=?}",
      formula4s:
        "\\log_a{a} = 1 \\text{ oldugundan ;} \\newline \\newline \\begin{aligned} 4x-15 &= 5 \\cr 4x &= 20 \\cr x &= 5\\end{aligned}"
    };
  }
};
</script>
<style scoped>
.target {
  text-align: center;
}

.target > div:target {
  display: block;
}
</style>