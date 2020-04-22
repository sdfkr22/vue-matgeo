<template>
    <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item disabled">
            <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
          </li>
          <li class="page-item">
            <a class="page-link" @click="sendPageNum('q1')">1</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#q2">2</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#q3">3</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#q4">4</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
</template>
<script>
export default {
    data(){
        return{
        }
    },
    methods : {
        sendPageNum(q){
            console.log("question num : "+q);
            this.$emit("data", q);
        }
    }
    
}
</script>