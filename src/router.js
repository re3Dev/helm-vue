import { createRouter, createWebHistory } from 'vue-router';
import PrinterList from './components/PrinterList.vue';
import PrinterDetail from './components/PrinterDetail.vue';

const routes = [
  { path: '/', component: PrinterList },
  { path: '/printer/:id', component: PrinterDetail, props: true }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
