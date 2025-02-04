
import { RouteRecordRaw } from 'vue-router';
import DefaultHeader from '@/components/layout/DefaultHeader.vue';
import DefaultFooter from '@/components/layout/DefaultFooter.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/account',
    name: 'Account',
    components: {
      default: () => import('@/views/account/AccountIndex.vue'),
      header: DefaultHeader,
      footer: DefaultFooter,
    },
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/account/domains/:domain/verify',
    name: 'AccountDomainVerify',
    components: {
      default: () => import('@/views/account/AccountDomainVerify.vue'),
      header: DefaultHeader,
      footer: DefaultFooter,
    },
    meta: {
      requiresAuth: true,
    },
    props: true,
  },
  {
    path: '/account/domains/add',
    name: 'AccountDomainAdd',
    components: {
      default: () => import('@/views/account/AccountDomainAdd.vue'),
      header: DefaultHeader,
      footer: DefaultFooter,
    },
    meta: {
      requiresAuth: true,
      layoutProps: {
        displayFeedback: false,
      }
    },
    props: true,
  },
  {
    path: '/colonel',
    name: 'Colonel',
    components: {
      default: () => import('@/views/colonel/ColonelIndex.vue'),
      header: DefaultHeader,
      footer: DefaultFooter,
    },
    meta: {
      isAdmin: true,
      requiresAuth: true,
    },
    props: true,
  },

]

export default routes;
