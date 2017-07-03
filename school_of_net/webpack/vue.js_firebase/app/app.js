import Vue from 'vue';
import VueRouter from 'vue-router';
import ChatComponent from './chat.component';

require([
    './rooms-create.component', 
    './rooms.component',
    ], function(RoomsCreateComponent, RoomsComponent){

Vue.use(VueRouter);

var appComponent = Vue.extend({});
var router = new VueRouter();

router.map({
    '/chat/:room': {
        component: ChatComponent,
    },
    '/rooms': {
        component: RoomsComponent,
    },
    '/rooms-create': {
        component: RoomsCreateComponent, 
    },
});
router.start(appComponent, '#app');

});