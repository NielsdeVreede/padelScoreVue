/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'
import CreateMatchView from '../pages/create/CreateMatchView.vue'
import MatchOverview from '../pages/match/MatchOverview.vue'
import ScoreHistoryView from '../pages/history/ScoreHistoryView.vue'
import IndexView from '../pages/index.vue'

//import {routes} from "vue-router/auto-routes";

const routes = [
  { path: '/', component: IndexView },
  { path: '/create', component: CreateMatchView },
  { path: '/match', component: MatchOverview },
  { path: '/history/:id', component: ScoreHistoryView },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
