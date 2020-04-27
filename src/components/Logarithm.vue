<template>
  <div class="row justify-content-around">
    <div class="col-md-4">
      <h3 class="font-weight-light text-success">Logaritma</h3>
      <h5 class="font-weight-light">Kurallar</h5>
      <ul>
        <li><div v-katex="'\\log_a{a} = 1'"></div></li>
        <br>
        <li><div v-katex="'\\log_a{1} = 0'"></div></li>
        <br>
        <li><div v-katex="'\\log_{a^n}{b^m} = \\frac{m}{n}.\\log_a{b}'"></div></li>
        <br>
        <li><div v-katex="'\\log_{a^n}{b} = \\frac{1}{n}.\\log_a{b}'"></div></li>
        <br>
        <li><div v-katex="'\\log_{a}{b^m} = m.\\log_a{b}'"></div></li>
        <br>
        <li><div v-katex="'\\log_{a}{x} + \\log_{a}{y}= \\log_{a}{(x.y)}'"></div></li>
        <br>
        <li><div v-katex="'\\log_{a}{x} - \\log_{a}{y}= \\log_{a}{(\\frac{x}{y})}'"></div></li>
        <br>
        <li><div v-katex="'\\log_{a}{b} = \\frac{log_b}{log_a}'"></div></li>
        <br>
        <li><div v-katex="'\\log_{10}{x} = \\log{x}'"></div></li>
        <br>
        <li><div v-katex="'\\log_{e}{x} = \\ln{x}'"></div></li>
      </ul>
      
    </div>
    <div class="col-md-8 border-left">
      
      <appSection :latexFormula="formula1" :latexFormulaSol="formula1s" :qNum="1"></appSection>
      <appSection :latexFormula="formula2" :latexFormulaSol="formula2s" :qNum="2"></appSection>
      <appSection :latexFormula="formula3" :latexFormulaSol="formula3s" :qNum="3"></appSection>
      <appSection :latexFormula="formula4" :latexFormulaSol="formula4s" :qNum="4"></appSection>
      <appSection :latexFormula="formula5" :latexFormulaSol="formula5s" :qNum="5"></appSection>
      <appSection :latexFormula="formula6" :latexFormulaSol="formula6s" :qNum="6"></appSection>
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
      formula1: "\\log_2{8} = x \\text{ ise x=?}",
      formula1s:
        "\\begin{aligned} \\log_2{2^3}&=x \\cr 3\\log_2{2}&=x \\cr 3.1&=x \\cr x&=3 \\end{aligned}",
      formula2: "\\log_3{81} = x \\text{ ise x=?}",
      formula2s:
        "\\begin{aligned} \\log_3{3^4} &= x \\cr 4\\log_3{3} &= x \\cr 4.1 &= x \\cr x &= 4 \\end{aligned}",
      formula3: "\\log_3{(5x+7)} = 3 \\text{ ise x=?}",
      formula3s:
        "\\begin{aligned} 3^3 &= 5x+7 \\cr 27 &= 5x+7 \\cr 20 &= 5x \\cr x &= 4 \\end{aligned}",
      formula4: "\\log_5{(4x-15)} = 1 \\text{ ise x=?}",
      formula4s:
        "\\log_a{a} = 1 \\text{ oldugundan ;} \\newline \\newline \\begin{aligned} 4x-15 &= 5 \\cr 4x &= 20 \\cr x &= 5\\end{aligned}",
      formula5: "\\log_{16}{64} + \\log_{27}{81} = \\text{ ?}",
      formula5s:
        "\\begin{aligned} &= \\log_{2^4}{2^6} + \\log_{3^3}{2^4} \\cr &= \\frac{6}{4}.\\log_2{2} + \\frac{4}{3}.\\log_3{3} \\cr &= \\frac{6}{4}.1 + \\frac{4}{3}.1 \\cr &= \\frac{3}{2} + \\frac{4}{3} \\cr &=\\frac{9}{6} + \\frac{8}{6} \\cr &=\\frac{17}{6}\\end{aligned}",
      formula6: "\\log_{3}{(23 + \\log_2{(7x+2)})} = 3 \\text{ ise x=?}",
      formula6s:
        "\\begin{aligned} 3^3 &= 23 + \\log_2{(7x+2)} \\cr 27 &= 23 + \\log_2{(7x+2)} \\cr 4 &= \\log_2{(7x+2)} \\cr 2^4 &= 7x + 2 \\cr 16 &= 7x + 2 \\cr 14 &= 7x \\cr x &= 2\\end{aligned}",
    };
  }
};
</script>
<style>

.katex { 
  font-size: 1.1em; 
  }
li 
  {
    background-color:#f7f7f7
  }
</style>