<template>
    <div>
     <!-- crousel starts here -->

<div id="demo" class="carousel slide container" data-ride="carousel">

<!-- Indicators -->
<ul class="carousel-indicators">
  <li data-target="#demo" data-slide-to="0" class="active"></li>
  <li data-target="#demo" data-slide-to="1"></li>
  <li data-target="#demo" data-slide-to="2"></li>
</ul>

<!-- The slideshow -->
<div class="carousel-inner">
  <div class="carousel-item active">
    <img src="../assets/GoveSchemeimg1.jpg" alt="img 1">
  </div>
  <div class="carousel-item">
    <img src="../assets/GoveSchemeimg2.jpg" alt="img 2">
  </div>
  <div class="carousel-item">
    <img src="../assets/GoveSchemeimg3.jpg" alt="img 3">
  </div>

</div>

<!-- Left and right controls -->
<a class="carousel-control-prev" href="#demo" data-slide="prev">
  <span class="carousel-control-prev-icon"></span>
</a>
<a class="carousel-control-next" href="#demo" data-slide="next">
  <span class="carousel-control-next-icon"></span>
</a>

</div>

     <!-- caroulse ends here -->
     <br>
     <br>
     <section class="container events bodr">

      <!-- first row -->
          <div class="d-flex row">
 
            <div class="col">
              <img src="../assets/schemeimg2.png" alt="" height="100px"><br><br>
              <button class="btn btn-primary"><small>More Details</small></button>
            </div>
            <div class="col">
              <img src="../assets/schemeimg3.png" alt="" height="100px"><br><br>
              <button class="btn btn-primary"><small>More Details</small></button>
            </div>
            <div class="col">
              <img src="../assets/schemeimg4.png" alt="" height="100px"><br><br>
              <button class="btn btn-primary"><small>More Details</small></button>
            </div>
            <div class="col">
              <img src="../assets/schemeimg2.png" alt="" height="100px"><br><br>
              <button class="btn btn-primary"><small>More Details</small></button>
            </div>

          </div>

          <!-- second row -->
              <div class="d-flex row">
 
            <div class="col">
              <img src="../assets/schemeimg2.png" alt="" height="100px"><br><br>
              <button class="btn btn-primary"><small>More Details</small></button>
            </div>
            <div class="col">
              <img src="../assets/schemeimg3.png" alt="" height="100px"><br><br>
              <button class="btn btn-primary"><small>More Details</small></button>
            </div>
            <div class="col">
              <img src="../assets/schemeimg4.png" alt="" height="100px"><br><br>
              <button class="btn btn-primary"><small>More Details</small></button>
            </div>
            <div class="col">
              <img src="../assets/schemeimg2.png" alt="" height="100px"><br><br>
              <button class="btn btn-primary"><small>More Details</small></button>
            </div>

          </div>


          <!-- third row -->

            <div class="d-flex row">
 
            <div class="col">
              <img src="../assets/schemeimg2.png" alt="" height="100px"><br><br>
              <button class="btn btn-primary"><small>More Details</small></button>
            </div>
            <div class="col">
              <img src="../assets/schemeimg3.png" alt="" height="100px"><br><br>
              <button class="btn btn-primary"><small>More Details</small></button>
            </div>
            <div class="col">
              <img src="../assets/schemeimg4.png" alt="" height="100px"><br><br>
              <button class="btn btn-primary"><small>More Details</small></button>
            </div>
            <div class="col">
              <img src="../assets/schemeimg2.png" alt="" height="100px"><br><br>
              <button class="btn btn-primary"><small>More Details</small></button>
            </div>

          </div>

          
         </section>

     <br>
     <br>
     <section style="background-color: orange;" class="pt-3 pb-1 my-2">
      <p style="text-align: center; color: white;"><i class="fa fa-copyright"></i> Copyright 2021 [Poltician Name] | Designed By <span style="color: black;">Saapttrini Software Solutions Pvt Ltd</span></p>
     </section>
     
    </div>
  </template>
  
  <script>
 
   
  export default {
    name: 'Jan_yojana_S',
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>

  .bodr div{
    margin-block: 5px;
  }
  .bodr div div{
    border: 1px solid black;
    margin-inline: 5px;
    padding-block: 5px;
    border-radius: 10px;
  }
  .bodr, div, div, img{
      text-align: center;
  }

  </style>