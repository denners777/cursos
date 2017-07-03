
var rooms = [
    { id: "001", name: "PHP", description: "Entusiasta do PHP" },
    { id: "002", name: "Java", description: "Developer experts" },
    { id: "003", name: "C#", description: "Os caras do C#" },
    { id: "004", name: "C++", description: "Fissurados por programação" },
    { id: "005", name: "Javascript", description: "Olha a web aí!" },
    { id: "006", name: "Vue.js", description: "Chat dos caras do data-binding" },
];
var db = require('./firebase-db');

module.exports = {
    template: `
            <ul>
                <li v-for='o in rooms'>
                    {{o.name}} - {{o.description}}
                </li>
            </ul>
            `,
    firebase: {
        rooms: db.ref('chat/rooms'),
    },
    ready: function () {
        var chatRef = db.ref('chat');
        var roomsChilden = chatRef.child('rooms');
        rooms.forEach(function (room) {
            roomsChilden.child(room.id).set({
                name: room.name,
                description: room.description,
            });
        });
    },
}