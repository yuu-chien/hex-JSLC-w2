let uuid = '0c404360-cb55-4d2b-8c0a-cd42d85893cb';
let token = '';
let apiPath = 'https://course-ec-api.hexschool.io/';
let apiUrl = `${apiPath}api/${uuid}/ec/products`;
// console.log("apiUrl",apiUrl);
// let productList = document.querySelector(".product-list")

const app = new Vue({
    el: '#app',
    data: {
        allProducts : []
    },
    created() {
        this.getAllProducts();
    },
    methods: {
        getAllProducts : function(){
            let vm = this;
            fetch(apiUrl)
            .then(function(res){
                console.log(res);
                return res.json();
            })
            .catch(function(err){
                console.log(err);
            })
            .then(function(product){
                vm.allProducts = product.data;
            })
        }
    }
});