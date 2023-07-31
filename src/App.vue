<template>
  <div>

    <!-- header starts here -->

    <div class=" row" style="background-color: green; position: sticky; top: 0px; z-index: 2;">

    
<!-- first div starts here -->
<div class="col">
<nav class="navbar navbar-expand-lg navbar-light" style="background-color: green;">

<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>


<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav " >

    <!-- Home -->
  
    <li class="nav-item active my-1">
      <button style="border: none; background-color: green;" class="m-0 p-0"><router-link to="/" style="text-decoration: none;"><span style="color: white;">Home</span></router-link></button>
      <!-- <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> -->
    </li>
  

     <!-- about -->
  
    <li class="nav-item dropdown my-1">
      <a class="nav-link dropdown-toggle my-0 py-0" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span style="color: white;" class="m-0 p-0">About</span>
      </a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdown" >
        <button style="border: none; background-color: white; " class="mt-2"><router-link to="/about_Party" style="text-decoration: none;"><span style="color: black;">Bhartiya Janta Party</span> </router-link></button><br>
        <button style="border: none; background-color: white; " class="mt-2"><router-link to="/about_Person" style="text-decoration: none;"><span style="color: black;">About Politician</span></router-link></button><br>
      </div>
    </li>


    <!-- ProgressiveWork -->

    <li class="nav-item my-1">
      <button style="border: none; background-color: green; margin-left: -2px;" class="m-0 p-0"><router-link  to="/ProgressiveWork"  style="text-decoration: none;" class="m-0 p-0"><span style="color: white;" class="m-0 p-0">Progressive Work</span></router-link></button>
    </li>



    <!-- Gallery -->
  
    <li class="nav-item dropdown my-1">
      <a class="nav-link dropdown-toggle my-0 py-0" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span style="color: white;">Gallery</span>
      </a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <button style="border: none;  background-color: white;" class="mt-2"><router-link to="/Social_Event" style="text-decoration: none;"><span style="color: black;">Social Events</span> </router-link></button><br>
        <button style="border: none;  background-color: white;" class="mt-2"><router-link to="/VideosC" style="text-decoration: none;"> <span style="color: black;">Videos</span> </router-link></button><br>
        <button style="border: none;  background-color: white;" class="mt-2"><router-link to="/NewsC" style="text-decoration: none;"> <span style="color: black;">News</span> </router-link></button><br>
      </div>
    </li>

   

    <!-- Jan_yojana_S -->
   
    <li class="nav-item dropdown my-1">
      <a class="nav-link dropdown-toggle m-0 p-0" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
        <span style="color: white;" class="m-0 p-0">Jan Yojana</span>
      </a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <button style="border: none; background-color: white;" class=""><router-link to="/Jan_yojana_S" style="text-decoration: none;"> <span style="color: black;">Goverment Schemes</span></router-link></button>
      </div>
    </li>


  </ul> 
</div>

</nav>

</div>
<!-- The first div ends here -->

<!-- second div starts here -->
<div class="col" >
<button class=" p-0 mt-3 mr-5" style="float: right;">
<select name="lang" id="" v-model="lang" class="px-2 py-1">
<option value="English_p" >English</option>
<option value="Hindi_p" >hindi</option>
 </select>
</button>
</div>
<!-- second div end here -->

</div>

    <!-- header ends here -->

     <div>
      <router-view :lang="lang" />
     </div>
    
  </div>
</template>

<script>
// import HeaderC from './MyNeta/HeaderC.vue'
export default {
  name: 'App',
  components:{
     
    },
    data(){
      return{
        lang: 'English_p'
      }
    }
}
</script>

<style>

</style>
