<template>
    <div>
      <!-- <div>
      <HeaderC />
     </div> -->


      <!--------------------------------------- Banner section Carousel starts here ----------------------------------------------->

<div style="" class="img-fluid container">

  <!-- first div starts here -->
<div id="demo" class="carousel slide" data-ride="carousel">

<!-- Indicators -->
<ul class="carousel-indicators">
  <li data-target="#1demo" data-slide-to="0" class="active"></li>
  <li data-target="#1demo" data-slide-to="1"></li>
  <li data-target="#1demo" data-slide-to="2"></li>
</ul>

<!-- The slideshow -->
<div class="carousel-inner">
  <div class="carousel-item active">
 <!-- first box -->
   
                     <div>
         
                           <img src="../assets/BJPbannerimg1.jpg" alt="" style="width: 100%;">

                    </div>
                  
                    

   <!-- end of first box -->
  </div>
  <div class="carousel-item">
    <!-- second box -->

                      <div>
                        
                        <img src="../assets/BJPbannerimg2.jpg" alt="" style="width: 100%;">

                      </div>
                      

      <!-- end of second box -->
  </div>
  <div class="carousel-item">
    <!-- third box -->

                     <div>

                      <img src="../assets/BJPannerimg3.jpg" alt="" style="width: 100%;">

                      </div>
                  

       <!-- end of third box -->
  </div>
</div>
<br>
<br>
<!-- Left and right controls -->
<div style="background-color: black;">
<a class="carousel-control-prev" href="#1demo" data-slide="prev">
  <span class="carousel-control-prev-icon" ></span>
</a>
<a class="carousel-control-next" href="#1demo" data-slide="next">
  <span class="carousel-control-next-icon"></span>
</a>
</div>

</div>
  <!-- first div ends here -->


</div>


    <!----------------------------------------------------- Banner section Crousel ends here ------------------------------------------------------------>

    <!-- --------------------------------------------------Section two starts here--------------------------------- -->

    <div>

    <h3 style="font-weight: 900; color: orange; font-size: xx-large;" class="text-center">{{ translate('Name') }}</h3>
    <p class="text-center"><b>{{ translate('discription') }}</b></p>
    <br>
    <div class="row">
      <!-- first div -->
      <div class="col-sm-5 text-center">
          <img src="../assets/PoliticianImg.jpg" alt="" style=" box-shadow: 1px 1px 3px 2px #888888; ">
      </div>
      <!-- second div -->
      <div class="col-sm-7 jumbotron " >
          <p class="text-justify">{{ translate('detail') }}
          </p>
          <ul style="text-align: left; margin-left: -22px;">
            <li>Great Personality</li>
            <li>One of the young and dynamic leader</li>
            <li>One of the highly qualified leaders in India</li>
          </ul>
          <button class="btn btn-success" style="float: left;"><router-link to="/about_Person"> <span style="color: white;">Know More</span></router-link></button>
      </div>

    </div>
   

    </div>

     <!-- -------------------------------------------------Second section ends here  ---------------------------------- -->

       <!-- third section starts here -->
       <div>
     <div class="fixed-bg">
       
      <div class="ml-4 pt-4">
        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto%3Ffbid%3D110356855335067%26set%3Da.110356865335066&width=300&show_text=true&height=483&appId" width="300" height="483" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
      </div>
        <!-- <div class="fb-page" data-href="https://www.facebook.com/rahul.sutar.92372446" data-tabs="timeline" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"></div> -->
      
     </div>
    </div>
       <!-- <div :style="{'background-image':  'url(' + require('../assets/BGIMGbjp.jpg') + ')'}" style="background-repeat: no-repeat; background-size: 100%; height: 500px; " class="container">
         
     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur eos molestias culpa impedit quam pariatur 
      consequatur deserunt quisquam eius voluptas iusto, maiores iure. Consectetur repellat quibusdam iusto libero, numquam fugiat.</p>

       </div> -->


       <!-- third seection ends here -->
     <h3 style="font-weight: 900; color: orange; font-size: xx-large;" class="text-center">Social Events</h3>

     <div class="container social_E">
         <div class="d-flex row text-center">
              <div class="sec_third_div_css col"><img src="../assets/PoliticianImg.jpg" alt="" height="140px"></div>
              <div class="col"><img src="../assets/PoliticianImg.jpg" alt="" height="140px"></div>
              <div class="col"><img src="../assets/PoliticianImg.jpg" alt="" height="140px"></div>
              <div class="col"><img src="../assets/PoliticianImg.jpg" alt="" height="140px"></div>
         </div>
         <!-- ---------------------------------------------------------------------------------- -->
         <div class="d-flex row text-center">
              <div class="col"><img src="../assets/PoliticianImg.jpg" alt="" height="140px"></div>
              <div class="col"><img src="../assets/PoliticianImg.jpg" alt="" height="140px"></div>
              <div class="col"><img src="../assets/PoliticianImg.jpg" alt="" height="140px"></div>
              <div class="col"><img src="../assets/PoliticianImg.jpg" alt="" height="140px"></div>
         </div>
     
     <br>
     <button class="btn btn-success"  > <router-link to="/Social_Event"> <span style="color: white;">Know More</span> </router-link></button>

    </div>
     <br>
     <br>
     <!-- ------------------------------------------------------videos----------------------------------------------------------------- -->
     <br>
    
     <h3 style="font-weight: 900; color: orange; font-size: xx-large;" class="text-center">Videos</h3>
     <br>
     <div class="container video_E">
     <section class="d-flex row text-center">
          <div class="col">
            <img src="../assets/PoliticianImg.jpg" alt="" height="140px">
          </div>
          <div class="col">
            <img src="../assets/PoliticianImg.jpg" alt="" height="140px">
          </div>
          <div class="col">
            <img src="../assets/PoliticianImg.jpg" alt="" height="140px">
          </div>
          <div class="col">
            <img src="../assets/PoliticianImg.jpg" alt="" height="140px">
          </div>
        </section>
     <br>
     <button class="btn btn-success"> <router-link to="/VideosC"> <span style="color: white;">View More</span> </router-link></button>
    </div>
     <br>
     <br>
     <section style="background-color: orange;" class="pt-3 pb-1 my-2">
      <p style="text-align: center; color: white;"><i class="fa fa-copyright"></i> Copyright 2021 [Poltician Name] | Designed By Saapttrini Software Solutions Pvt Ltd</p>
     </section>

     <br>
     <br>
     <h2>{{ lang }}</h2>
     <h2>this is trial</h2>
     
     <!-- <hr>
     <select name="lang" id="">
    <option value="English_p">English</option>
    <option value="Hindi_p">hindi</option>
     </select> -->
      <h5></h5>
     <h5>{{ translate('detail') }}</h5>

     <!-- <button @click="translate('Name')" >test</button> -->


    </div>
  </template>
  
  <script>
  // import HeaderC from './HeaderC.vue'
  import English_p from ".././en.js";
  import Hindi_p from ".././hn.js";

  export default {
    props: ['lang'],
    mixins: [English_p, Hindi_p],
    name: 'HomeC',
    conponents:{
      //  HeaderC
    },
    data(){
      return{
        // lang: "English_p"
      }
    },
    methods:{
      translate(prop){
        return this[this.lang][prop];
      }
    }

  };
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  /* .sec_third_div_css{
    border: 3px solid orange;
  } */

  .fixed-bg {
  background-image: url("../assets/BJPannerimg3.jpg");
  min-height: 550px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
  .social_E div div{
    border: 3px solid orange;
    margin-block: 5px;
    margin-inline: 5px;
    box-shadow: 1px 1px 3px 2px #888888;
  }
  .video_E div{
    margin-block: 5px;
    margin-inline: 5px;
    box-shadow: 1px 1px 3px 2px #888888; 
  }


 

  </style>
  