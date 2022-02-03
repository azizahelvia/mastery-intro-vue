const app = Vue.createApp({
    data() { 
        return {
            cart: 0,
            product: 'Kaus Kaki',
            image: './assets/images/socks_green.jpg',
            inventory: 10,
            details: ['50% katun', '30% wol', '20% poliester'],
            // dalam variants tambahkan url image
            variants: [
                { id: 2110, color: 'hijau', image: './assets/images/socks_green.jpg'},
                { id: 2111, color: 'biru', image: './assets/images/socks_blue.jpg'},
            ]
        }
    },
    methods: {
        // Method ini diberi nama addToCart yang berisi code logic 
        // untuk menjalankan penambahan (increment)
        addToCart() {
            this.cart += 1
        },
        // Tambahkan method updateImage untuk melakukan panggilan
        // dari listener v-on:mouseover
        updateImage(variantImage) {
            this.image = variantImage
        },
        // Task!: buatlah method untung mengurangi jumlah dalam cart
        reduceTheCart() {
            if (this.cart >= 1) {
                this.cart -= 1
            }
        }
    }
})