import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import UJ from '../http/index';
import axios from '../axios';
// import awesome from './proto/demo_pb';
// import AFeedRate from './proto/monitorAnalysisProp/graphFeedRate_pb';
// import AModel from './proto/monitorAnalysisProp/graphModel_pb';
// import AOriginal from './proto/monitorAnalysisProp/graphOriginal_pb';
// import IFeedRate from './proto/monitorIndexProp/graphFeedRate_pb';
// import IModel from './proto/monitorIndexProp/graphModel_pb';

Vue.config.productionTip = false;
// Vue.prototype.awesome = awesome;
// Vue.prototype.AFeedRate = AFeedRate;
// Vue.prototype.AModel = AModel;
// console.log(AFeedRate, AOriginal, 6);
// Vue.prototype.AOriginal = AOriginal;

// Vue.prototype.IFeedRate = IFeedRate;
// Vue.prototype.IModel = IModel;

// window.moment();
UJ();
window.axios = axios;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
