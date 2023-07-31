<template>
    <div>
      <div :style="{'background-image':  'url(' + require('../../assets/BGIMGbjp.jpg') + ')'}" style="background-repeat: no-repeat; background-size: 100%; height: 230px; " class="container">
         <br>
         <p style="color: white; font-weight: 900; font-size: xx-large;" class="text-center">Newspaper</p>
        </div>
        <br>
        <h3 style="font-weight: 900; color: orange; font-size: xx-large;" class="text-center">Social News</h3>
        <br>

         <section class="container events">
          <div class="d-flex row">
              <div class="col"><img src="../../assets/PoliticianImg.jpg" alt="" height="140px"></div>
              <div class="col"><img src="../../assets/PoliticianImg.jpg" alt="" height="140px"></div>
              <div class="col"><img src="../../assets/PoliticianImg.jpg" alt="" height="140px"></div>
              <div class="col"><img src="../../assets/PoliticianImg.jpg" alt="" height="140px"></div>
          </div>
          <div class="d-flex row">
              <div class="col"><img src="../../assets/PoliticianImg.jpg" alt="" height="140px"></div>
              <div class="col"><img src="../../assets/PoliticianImg.jpg" alt="" height="140px"></div>
              <div class="col"><img src="../../assets/PoliticianImg.jpg" alt="" height="140px"></div>
              <div class="col"><img src="../../assets/PoliticianImg.jpg" alt="" height="140px"></div>
          </div>
          <div class="d-flex row">
              <div class="col"><img src="../../assets/PoliticianImg.jpg" alt="" height="140px"></div>
              <div class="col"><img src="../../assets/PoliticianImg.jpg" alt="" height="140px"></div>
              <div class="col"><img src="../../assets/PoliticianImg.jpg" alt="" height="140px"></div>
              <div class="col"><img src="../../assets/PoliticianImg.jpg" alt="" height="140px"></div>
          </div>
          <div class="d-flex row">
              <div class="col"><img src="../../assets/PoliticianImg.jpg" alt="" height="140px"></div>
              <div class="col"><img src="../../assets/PoliticianImg.jpg" alt="" height="140px"></div>
              <div class="col"><img src="../../assets/PoliticianImg.jpg" alt="" height="140px"></div>
              <div class="col"><img src="../../assets/PoliticianImg.jpg" alt="" height="140px"></div>
          </div>
          <div class="d-flex row">
              <div class="col"><img src="../../assets/PoliticianImg.jpg" alt="" height="140px"></div>
              <div class="col"><img src="../../assets/PoliticianImg.jpg" alt="" height="140px"></div>
              <div class="col"><img src="../../assets/PoliticianImg.jpg" alt="" height="140px"></div>
              <div class="col"><img src="../../assets/PoliticianImg.jpg" alt="" height="140px"></div>
          </div>
          
         </section>

         <section style="background-color: orange;" class="pt-3 pb-1 my-2">
      <p style="text-align: center; color: white;"><i class="fa fa-copyright"></i> Copyright 2021 [Poltician Name] | Designed By <span style="color: black;">Saapttrini Software Solutions Pvt Ltd</span></p>
     </section>
     
    </div>
  </template>
  
  <script>
 
   
  export default {
    name: 'NewsC',
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>

.events div{
    margin: 5px;
  }
  .events div div{
   border: 4px solid orange;
   box-shadow: 1px 1px 3px 2px #888888;
  }

  </style>