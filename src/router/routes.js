export default [
  {
    path: '/',
    component: () => import('pages/index'),
    /* children: [
      { path: '', component: () => import('pages/index') }
    ] */
  },
  {
    path: '/scenes',
    name: 'scenes',
    component: () => import('pages/sceneList'),

  },
  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
