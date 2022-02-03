const app = Vue.createApp({
    data() { 
        return {
            cart: 0,
            product: 'Kaus Kaki',
            image: './assets/images/socks_green.jpg',
            inventory: 0,
            details: ['50% katun', '30% wol', '20% poliester'],
            // dalam variants tambahkan url image
            variants: [
                { id: 2110, color: 'green', image: './assets/images/socks_green.jpg'},
                { id: 2111, color: 'blue', image: './assets/images/socks_blue.jpg'},
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
    }
})