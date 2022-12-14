import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/Index';
import Pp from '@/components/footer/products.vue'
const Login = resolve => require(['@/components/Login'], resolve);
const SignUp = resolve => require(['@/components/Signup'], resolve);
const CheckPhone = resolve => require(['@/components/signUp/CheckPhone'], resolve);
const InputInfo = resolve => require(['@/components/signUp/InputInfo'], resolve);
const SignUpDone = resolve => require(['@/components/signUp/SignUpDone'], resolve);
const GoodsList = resolve => require(['@/components/GoodsList'], resolve);
const GoodssList = resolve => require(['@/components/GoodssList'], resolve);
const GoodsDetail = resolve => require(['@/components/GoodsDetail'], resolve);
const ShoppingCart = resolve => require(['@/components/ShoppingCart'], resolve);
const Order = resolve => require(['@/components/Order'], resolve);
const Pay = resolve => require(['@/components/Pay'], resolve);
const PayDone = resolve => require(['@/components/PayDone'], resolve);
const Freeback = resolve => require(['@/components/Freeback'], resolve);
const Home = resolve => require(['@/components/Home'], resolve);
const MyAddress = resolve => require(['@/components/home/MyAddress'], resolve);
const AddAddress = resolve => require(['@/components/home/AddAddress'], resolve);
const EditAddress = resolve => require(['@/components/home/EditAddress'], resolve);
const MyOrder = resolve => require(['@/components/home/MyOrder'], resolve);
const MyShoppingCart = resolve => require(['@/components/home/MyShoppingCart'], resolve);
const Merchant = resolve => require(['@/components/Merchant'], resolve);
const Orders = resolve => require(['@/component/Order'], resolve);
const Orderss = resolve => require(['@/component/Ordersss'], resolve);
const Consignmentrefund = resolve => require(['@/component/Consignmentrefund'], resolve);
const Receiptrefund = resolve => require(['@/component/Receiptrefund'], resolve);
const Myfootprint = resolve => require(['@/components/home/Myfootprint'], resolve);


Vue.use(Router);

export default new Router({
  routes: [
    {
      path:"/hh",

      component: () => import('@/component/HH.vue'),
      name:'hh'
    },
    {
      path:"/nio",

      component: () => import('@/component/Nio.vue'),
      name:'nio'
    },
    {
      path:"/promptly/:id",

      component: () => import('@/component/promptly.vue'),
      name:'promptly'
    },
    {
      path:"/order",

      component: Orders,
      name:'order'
    },
    {
      path:"/blogheader",

      component: () => import('@/component/BlogHeader.vue'),
      name:'blogheader',
      children:[
        {
          path:"/orders",

          component: () => import('@/component/orders.vue'),
          name:'orders',
        },
        {
          path:"/Consignment",

          component: () => import('@/component/Consignment.vue'),
          name:'Consignment',
        },
        {
          path:"/Receipt",

          component: () => import('@/component/Receipt.vue'),
          name:'Receipt',
        },
        {
          path:"/Assess",

          component: () => import('@/component/Assess.vue'),
          name:'Assess',
        },
        {
          path:"/Refund",

          component: () => import('@/component/Refund.vue'),
          name:'Refund',
        },
      ]
    },


     {
      path:"/shoppingedit",

      component: () => import('@/component/shoppingedit.vue'),
      name:'shoppingedit'
    },

    {
      path:"/notice",

      component: () => import('@/component/Notice.vue'),
      name:'notice'
    },

    {
      path:"/show",

      component: () => import('@/component/ShowBlogs.vue'),
      name:'show'
    },


    {
      path:"/add",
      component: () => import('@/component/AddBlogs.vue'),
    },
    {
      path:"/blog/:id",
      component: () => import('@/component/SingBlogs.vue'),
    },


    {
      path: '/Index', // ??????
      name: 'Index',
      component: Index
    },
    {
      path: '/pp', // ??????
      name: 'pp',
      component: Pp
    },
    {
      path: '/', // ??????
      name: 'Login',
      component: Login
    },
    {
      path: '/SignUp', // ??????
      name: 'SignUp',
      component: SignUp
      // children: [
      //   {
      //     path: '/',
      //     name: 'index',
      //     component: CheckPhone
      //   },
      //   {
      //     path: 'checkPhone',
      //     name: 'CheckPhone',
      //     component: CheckPhone
      //   },
      //   {
      //     path: 'inputInfo',
      //     name: 'InputInfo',
      //     component: InputInfo
      //   },
      //   {
      //     path: 'signUpDone',
      //     name: 'SignUpDone',
      //     component: SignUpDone
      //   }
      // ]
    },
    {
      path: '/goodsList/:id/:ids', // ????????????
      name: 'GoodssList',
      component: GoodssList
    },
    {
      path: '/goodsList/:id', // ????????????
      name: 'GoodsList',
      component: GoodsList
    },
    {
      path: '/goodsDetail/:id', // ????????????
      name: 'GoodsDetail',
      component: GoodsDetail
    },
    {
      path: '/shoppingCart', // ????????????
      name: 'ShoppingCart',
      component: ShoppingCart
    },
    {
      path: '/orderss/:id', // ????????????
      name: 'Orderss',
      component: Order
    },

    {
      path: '/ordersss/:id', // ????????????
      name: 'Ordersss',
      component: Orderss
    },


    {
      path: '/Consignmentrefund/:id', // ????????????
      name: 'Consignmentrefund',
      component: Consignmentrefund
    },

    {
      path: '/Receiptrefund/:id', // ????????????
      name: 'Receiptrefund',
      component: Receiptrefund
    },
    {
      path: '/pay', // ????????????
      name: 'Pay',
      component: Pay
    },
    {
      path: '/payDone', // ??????????????????
      name: 'PayDone',
      component: PayDone
    },
    {
      path: '/freeback', // ????????????
      name: 'Freeback',
      component: Freeback
    },
    {
      path: '/home', // ??????
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/',
          name: 'HomeIndex',
          component: MyOrder
        },
        {
          path: 'myAddress',
          name: 'MyAddress',
          component: MyAddress
        },
        {
          path: 'addAddress',
          name: 'AddAddress',
          component: AddAddress
        },
        {
          path: '/editAddress/:id',
          name: 'editAddress',
          component: EditAddress
        },
        {
          path: 'myOrder/:id',
          name: 'MyOrder',
          component: MyOrder
        },
        {
          path: 'myShoppingCart',
          name: 'MyShoppingCart',
          component: MyShoppingCart
        },

      ]
    },
    {
      path: '/myfootprint',
      name: 'Myfootprint',
      component: Myfootprint
    },
    {
      path: '/merchant',
      name: 'Merchant',
      component: Merchant
    }
  ],
  mode: 'history',
});
