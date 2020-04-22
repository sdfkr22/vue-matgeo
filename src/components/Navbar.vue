<template>
        <nav class="navbar navbar-expand-lg navbar-light bg-light" style="background-color: #e3f2fd;">
  <a class="navbar-brand" href="#">Mat-Geo</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
         <router-link 
            to="/"
            tag="li"
            class="nav-item active">
            <a class="nav-link text-success">Home<span class="sr-only">(current)</span></a>
        </router-link>
        <router-link 
            to="/matematik"
            tag="li"
            class="nav-item">
            <a class="nav-link text-success">Matematik</a>
        </router-link>
     <router-link 
            to="/geometri"
            tag="li"
            class="nav-item">
            <a class="nav-link text-success">Geometri</a>
        </router-link>
    </ul>
    <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Ara" aria-label="Search">
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Ara</button>
  </form>
  </div>
</nav>
</template>