export default [{
    path: '/',
    name:"Index",
    component: () => import('../views/Index.vue')
  },
  {
    path: '/home',
    name:"Home",
    component: () => import('../views/Home.vue'),
    // children: [{
    //     path: '/home',
    //     name:"Home",
    //     component: () => import('../views/Home.vue'),
    //   },
    // ],
  },
   {
    path:"/:pathMatch(.*)",
    redirect: {
      name: 'Index'
    }
  }
]