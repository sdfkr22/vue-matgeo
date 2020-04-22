<template>
<div class="container-fluid">
  <div class="row">
    <div class="col-md-12">
      <br>
      <app-navbar></app-navbar>
      <br>
      <router-view></router-view>
    </div>
  </div>
</div>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  components : {
    appNavbar : Navbar,
  },

}
</script>

<style>

</style>
