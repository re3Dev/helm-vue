import { createRouter, createWebHistory } from 'vue-router';
import PrinterList from './components/PrinterList.vue';

const routes = [
  { path: '/', component: PrinterList },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;