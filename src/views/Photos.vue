<template>
  <div class="about">
    <h1 class="primary--text pl-10"> Vuetify Photos</h1>
<div class="pl-9" >
  <v-btn
      class="mx-2"
      fab
      dark
      small
      color="pink"
     v-on:click.native='btnIconClick'>
      <v-icon dark>
        mdi-heart
      </v-icon>
    </v-btn>
<p class="pl-3 ">Icons</p>
<p class="pl-2 primary--text" id="icon"></p>
 <v-btn 
      depressed
      color="primary"
    v-on:click.native='btnClick'>
      Like
    </v-btn>
    <p class="pl-3 primary--text" id="demo"></p>
<p class="pl-2 ">Photos</p>
</div>
 
  </div>
</template>

<script>


export default {
  name: 'Photos',
 methods: {
   btnClick(){

  var like = "Go to Photo!";
  var result = like.link("https://pixabay.com/");
  document.getElementById("demo").innerHTML = result;
},
btnIconClick(){

  var like = "Go to Icon!";
  var result = like.link("https://materialdesignicons.com/");
  document.getElementById("icon").innerHTML = result;
}
 }
 }
</script>