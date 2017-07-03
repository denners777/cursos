import Vue from 'vue';
import VueRouter from 'vue-router';

require([
    './rooms-create.component', 
    './rooms.component',
    './chat.component'
    ], function(RoomsCreateComponent, RoomsComponent, ChatComponent){

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