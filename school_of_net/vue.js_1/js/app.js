var app = new Vue({
    el: '#app',
    data: {
        books: [],
        MySearch: '',
        orderCol: 'id',
        orderInverse: 1,
        pagination: {
            maxPage: 4,
            current: 1,
            totalItems: 0,
            totalPages: 0,
            listPagination: [],
        },
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
            
            if(this.pagination.current === 1){
                return false;
            }
            this.pagination.current = this.pagination.current - 1;
            
            console.log('maxPage: ' + this.pagination.maxPage);
            console.log('current: ' + this.pagination.current);
            console.log('totalItems: ' + this.pagination.totalItems);
            console.log('totalPages: ' + this.pagination.totalPages);
            console.log('listPagination: ' + this.pagination.listPagination);
        },
        pagePagination: function (e, id) {
            e.preventDefault();
            
            if(this.pagination.current === this.pagination.totalPages){
                return false;
            }
            this.pagination.current = this.pagination.current + 1;
            
            console.log('maxPage: ' + this.pagination.maxPage);
            console.log('current: ' + this.pagination.current);
            console.log('totalItems: ' + this.pagination.totalItems);
            console.log('totalPages: ' + this.pagination.totalPages);
            console.log('listPagination: ' + this.pagination.listPagination);
        },
        next: function (e) {
            e.preventDefault();
            console.log('maxPage: ' + this.pagination.maxPage);
            console.log('current: ' + this.pagination.current);
            console.log('totalItems: ' + this.pagination.totalItems);
            console.log('totalPages: ' + this.pagination.totalPages);
            console.log('listPagination: ' + this.pagination.listPagination);
        },
    },
    ready: function () {
        var self = this;
        self.$http.get('dataServer.json').then(function (response) {
            self.pagination.totalItems = response.data.length;
            self.pagination.totalPages = Math.ceil(response.data.lenght / self.pagination.maxPage);
            
            self.books = response.data;
        });
    },
});