var app = new Vue({
    el: '#app',
    data: {
        books: [],
        MySearch: '',
        orderCol: 'id',
        orderInverse: 1,
    },
    methods: {
        filterOrderBy: function (e, col) {
            e.preventDefault();
            this.orderCol = col;
            this.orderInverse = this.orderInverse * (-1);
            //console.log(this.orderInverse);
        },
        previous: function (e) {
            e.preventDefault();
        },
        pagePagination: function (e, id) {
            e.preventDefault();
        },
        next: function (e) {
            e.preventDefault();
        },
    },
    ready: function () {
        var self = this;
        self.$http.get('dataServer.json').then(function (response) {
            //console.log(response);
            self.books = response.data;
        });
    },
});