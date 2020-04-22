<template>
  <div class="shadow-lg p-3 mb-5 bg-white rounded text-center">
    <div class="col-md-4">
      <h5>Taban Aritmetiği</h5>
      <hr />
      <br />
      <p class="mb-0 text-success">2'lik tabanda sayı girin</p>
      <input
        @input="$v.binNum.$touch()"
        :class="{'is-invalid' : !$v.binNum.regex}"
        class="form-control"
        v-model="binNum"
        @keypress="onKeyPressForBinary"
      />
      <br />
      <p class="mb-0 text-success">10'luk tabanda sayı girin</p>
      <input
        class="form-control"
        :value="convertToDec()"
        @input="convertDecToBin($event.target.value)"
        @keypress="onKeyPressForDecimal"
      />
      <br />
      <p class="mb-0 text-success">16'lık tabanda sayı girin</p>
      <input
        class="form-control"
        :value="convertToHex()"
        @input="convertHexToBin($event.target.value)"
        @keypress="onKeyPressForHexaDecimal"
      />
    </div>
   
  </div>
</template>

<script>
import { required, numeric, between, helpers } from "vuelidate/lib/validators";
const regex = helpers.regex(this.binNum, /[0-1]*/);
export default {
  components: {
  },
  data() {
    return {
      binNum: null,
      decNum: null,
      hexNum: null,
    };
  },

  validations: {
    binNum: {
      numeric,
      regex
    }
  },
  methods: {
    convertToDec() {
      if (this.binNum) {
        return (this.decNum = parseInt(this.binNum, 2).toString(10));
      }
      this.decNum = null;
    },
    convertToHex() {
      if (this.binNum) {
        return (this.hexNum = parseInt(this.binNum, 2)
          .toString(16)
          .toUpperCase());
      }
      this.hexNum = null;
    },
    convertDecToBin(decNum) {
      if (decNum) {
        return (this.binNum = parseInt(decNum, 10).toString(2));
      }
      this.binNum = null;
    },
    convertHexToBin(hexNum) {
      if (hexNum) {
        return (this.binNum = parseInt(hexNum, 16).toString(2));
      }
      this.binNum = null;
    },

    onKeyPressForBinary(event) {
      const char = String.fromCharCode(event.keyCode);
      if (!/[0-1]/.test(char)) {
        event.preventDefault();
      }
    },

    onKeyPressForDecimal(event) {
      const char = String.fromCharCode(event.keyCode);
      if (!/[0-9]/.test(char)) {
        event.preventDefault();
      }
    },

    onKeyPressForHexaDecimal(event) {
      const char = String.fromCharCode(event.keyCode);
      console.log("inside");
      if (!/[0-9A-Fa-f]/.test(char)) {
        event.preventDefault();
      }
    }
  }
};
</script>
<style scoped>

</style>