const app = Vue.createApp({
    data() { 
        return {
            product: 'Kaus Kaki',
            image: './assets/images/socks_green.jpg',
            inventory: 50,
            // Tambahkan nilai object onSale
            onSale: true
        }
    }
})