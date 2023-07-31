<template>
    <div>
      <div :style="{'background-image':  'url(' + require('../../assets/BGIMGbjp.jpg') + ')'}" style="background-repeat: no-repeat; background-size: 100%; height: 230px; " class="container">
         
         <p style="color: white; font-weight: 900; font-size: xxx-large;" class="text-center">Member of Parliament</p>
    
       </div>
       <br>
       <br>
       <h3 style="font-weight: 900; color: orange; font-size: xx-large;" class="text-center">[Name of Politician]</h3>
       <br>
    <section class="d-flex row">

      <div class="col text-center"><img src="../../assets/PoliticianImg.jpg" alt=""  ></div>
      <div class="col">
         <table border="1px">
        <tr>
          <th>Name</th>
          <td>{{ translate('Name') }}</td>
        </tr>
        <tr>
          <th>Contituency</th>
          <td>{{ translate('Constituency') }}</td>
        </tr>
        <tr>
          <th>Party Name</th>
          <td>{{ translate('discription') }}</td>
        </tr>
        <tr>
          <th>Email</th>
          <td>{{ translate('Party_name') }}</td>
        </tr>
        <tr>
          <th>Start Term</th>
          <td>{{ translate('Start_term') }}</td>
        </tr>
        <tr>
          <th>No. Of Term</th>
          <td>{{ translate('No_of_term') }}</td>
        </tr>
        <tr>
          <th>Standing Commitee Menbership</th>
          <td>{{ translate('Standing_Commitee_Membership') }}</td>
        </tr>
       </table></div>

    </section>
      
       <br>

       <section class="container-fluid  info">
        <div style="background-color: orange;" @click="show()"> <button class="btn"><b>Educational Qualification</b></button></div>

        <Transition>
         <div v-show="value">
          <ul>
            <li>Diploma in Chemical Engineering</li>
            <li>B.E in Chemical Engineering</li>
            <li>E-commerce from mumbai</li>
          </ul>
        </div>
      </Transition>

        <div style="background-color: orange;" @click="show1()"><button class="btn"> <b>Positions Held</b></button></div>
        
        <Transition>
        <div v-show="value1">
        <ul>
          <li> Member Of Parliament (M.P.) 03 –Jalgoan Loksabha Constituency (May 2019)</li>
          <li>Ex.Member, Estimate Committee Legislature Of Maharashtra State (2017-2019)</li>
          <li> Ex.Member Legislative Assembly (M.L.A.) 17 – Chalisgaon Constituency (2014-2019)</li>
          <li>Ex-Member, Panchayat Raj Committee, Maharashtra State (2015 - 2017)</li>
          <li>State General Secretary Bhartiya Janta Yuva Morcha, Maharashtra</li>
          <li>Ex.Member of Youth Planning Committee, Maharashtra GOVT</li>
          <li>Chairman, Umang Foundation</li>
          <li>Chairman, Kai. Vanjibaba Gramin Vikas Mandal’s</li>
        </ul>
        </div>
        </Transition>

        <div style="background-color: orange;" @click="show2()" >
        <button class="btn"><b>Literary, Artistic & Scientific Accomplishment - Awarded By</b></button> 
        </div>

        <Transition>
        <div v-show="value2">
        <ul>
          <li>Ministry of Parliamentary Affairs as a Best Speaker of Youth Parliament</li>
          <li>Shikshan Ratna Puraskar by Samta Shikshak Parishad</li>
          <li>Lokmat Khandesh Icon by Lokmat News Network</li>
        </ul>
        </div>
      </Transition>


        <div style="background-color: orange;" @click="show3()"> <button class="btn"><b>Social And Cultural Activities</b></button> </div>

        <Transition>
        <div v-show="value3">
         <ul>
          <li>Social Work</li>
         </ul>
        </div>
      </Transition>
       </section>


       <br>
       <br>
       <section style="background-color: orange;" class="pt-3 pb-1 my-2">
      <p style="text-align: center; color: white;"><i class="fa fa-copyright"></i> Copyright 2021 [Poltician Name] | Designed By <span style="color: black;">Saapttrini Software Solutions Pvt Ltd</span> </p>
     </section>
     
    </div>
  </template>
  
  <script>
 
 import English_p from "../../en.js";
 import Hindi_p from "../../hn.js";
   
  export default {
    mixins: [English_p, Hindi_p],
    props:['lang'],
    name: 'about_Person',
    data(){
      return{
        value: false,
        value1: false,
        value2: false,
        value3: false
      }
    },
    methods:{
     
      translate(prop){
        return this[this.lang][prop];
       },
        show(){
          this.value =! this.value
        },
        show1(){
          this.value1 =! this.value1
        },
        show2(){
          this.value2 =! this.value2
        },
        show3(){
          this.value3 =! this.value3
        }
    }

  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>

  table td {
    text-align: left;
    padding-block: 5px;
    padding-inline: 10px;
  }
  table th {
    text-align: left;
    padding-block: 5px;
    padding-inline: 10px;
  }
  .info div{
     padding-block: 8px;
     margin-block: 2px;
     text-align: left;
     padding-left: 8px;
     color: white;
  }
  .info, ul, li{
    background-color: white;
    color: black;
  }

  .btn{
    border: none;
    background-color: orange;
    color: white;
  }

  /* .info div ul{
    display: none;
  } */

  .v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

  </style>