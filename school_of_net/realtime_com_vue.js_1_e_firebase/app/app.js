var chatComponent = Vue.extend({
template: `
<style type="text/css" scoped>
div{
        color: red;
}
.chat {
    padding: 0;
}
.chat li {
    margin-bottom: 10px;
    padding-bottom: 10px;
}
.chat li.left .chat-body {
    margin-left: 100px;
}
.chat li.right .chat-body {
    text-align: right;
    margin-right: 100px;
}
.panel-body {
    overflow-y: scroll;
    height: 400px;
}
</style>
<div class="panel panel-primary">
    <div class="panel-heading">Chat</div>
    <div class="panel-body">
        <ul class="chat list-unstyled">
            <li class="clearfix" v-for="o in chat.messages" v-bind:class="{ 'left': !isUser(o.email), 'right': isUser(o.email) }">
                <span v-bind:class="{ 'pull-left': !isUser(o.email), 'pull-right': isUser(o.email) }">
                    <img v-bind:src="o.photo" class="img-circle" />
                </span>
                <div class="chat-body">
                    <strong>{{ o.name }}</strong>
                    <p>{{ o.text }}</p>
                </div>
            </li>
        </ul>
    </div>
    <div class="panel-footer">
        <div class="input-group">
            <input type="text" class="form-control input-md" placeholder="Digite sua Mensagem" />
            <span class="input-group-btn">
                <button class="btn btn-success btn-md">Enviar</button>
            </span>
        </div>
    </div>
</div>
`, data: function(){
return {
user: {
name: 'Denner Fernandes',
        email: 'denners777@hotmail.com',
        },
        chat: {
        messages: [{
        text: "Olá, eu sou o Fulano, como você está?",
                name: "Fulano",
                email: "fulano@gmail.com",
                photo: "http://placehold.it/50/000FFF/fff&text=Fulano",
        }, {
        text: "Estou joia, meu nome é Denner Fernandes",
                name: "Denner Fernandes",
                email: "denners777@hotmail.com",
                photo: "http://placehold.it/50/FFF000/fff&text=Denner",
        }, {
        text: "Não te conheço!!!",
                name: "Denner Fernandes",
                email: "denners777@hotmail.com",
                photo: "http://placehold.it/50/FFF000/fff&text=Denner",
        }],
        },
        }
},
        methods: {
        isUser: function (email) {
        return this.user.email == email;
        }
        },
        });
        var appComponent = Vue.extend({});
        Vue.component('my-chat', chatComponent);
        /*var chat = new Vue({
         el: '#chat',
         });*/

        var router = new VueRouter();
        router.map({
        '/chat': {
        componetnt: chatComponent,
        },
        });
        router.start(appComponent, '#app');