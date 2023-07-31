
import HomeC from './components/../MyNeta/HomeC.vue'
import Jan_yojana_S from './MyNeta/Jan_yojana_S'
import about_Party from './components/../MyNeta/AboutUs/about_Party.vue'
import about_Person from './components/../MyNeta/AboutUs/about_Person.vue'
import ProgressiveWork from './components/../MyNeta/AboutUs/ProgressiveWork.vue'
import NewsC from './MyNeta/Gallery/NewsC.vue'
import Social_Event from './MyNeta/Gallery/Social_Event.vue'
import VideosC from './MyNeta/Gallery/VideosC.vue'
//import HeaderC from './MyNeta/HeaderC.vue'
import HddR from './MyNeta/HddR.vue'

import { createRouter, createWebHistory } from 'vue-router'

const routes= [
    {
        name:'',
        component:HomeC,
        path:'/'
    },
    {
        name:'Jan_yojana_S',
        component:Jan_yojana_S,
        path:'/Jan_yojana_S'
    },
    {
        name:'about_Party',
        component:about_Party,
        path:'/about_Party'
    },
    {
        name:'about_Person',
        component:about_Person,
        path:'/about_Person'
    },
    {
        name:'ProgressiveWork',
        component:ProgressiveWork,
        path:'/ProgressiveWork'
    },
    {
        name:'NewsC',
        component:NewsC,
        path:'/NewsC'
    },
    {
        name:'Social_Event',
        component:Social_Event,
        path:'/Social_Event'
    },
    {
        name:'VideosC',
        component:VideosC,
        path:'/VideosC'
    },
    // {
    //     name:'HeaderC',
    //     component:HeaderC,
    //     path:'/HeaderC'
    // },
    {
        name:'HddR',
        conponent:HddR,
        path: '/HddR'
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router