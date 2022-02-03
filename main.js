const app = Vue.createApp({
    data() { 
        return {
            cart: 0,
            // Task!: tambahkan onSale bernilai true
            onSale: true,
            // End Task
            product: 'Kaus Kaki',
            // Tambahkan brand
            brand: 'Mayesz',
            // ganti updateImage ke selectedVariant dgn nilai 0 tujuan
            // untuk mengubah dgn index jenis warna yang dipilih
            // dan hapus inventory
            selectedVariant: 0,
            details: ['50% katun', '30% wol', '20% poliester'],
            // dalam variants tambahkan inventory masing-masing index untuk jumlah barang yg tersedia
            variants: [
                { id: 2110, color: 'green', image: './assets/images/socks_green.jpg', inventory: 0},
                { id: 2111, color: 'blue', image: './assets/images/socks_blue.jpg', inventory: 50},
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
        updateVariant(index) {
            this.selectedVariant = index
        },
    },
    // Tambahkan object computed yg didalamnya berisi method yang mengembalikan
    // nilai title gabungan antara brand dan product
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        // image digunakan untuk mengembalikan nilai varian gambar berdasarkan index
        image() {
            return this.variants[this.selectedVariant].image
        },
        // inventory digunakan untuk mengembalikan nilai varian jumlah berdasarkan index
        inventory() {
            return this.variants[this.selectedVariant].inventory
        },
        sale() {
            if (this.onSale) {
                return this.brand + ' ' + this.product + ' sedang dijual!'
            } 
                return this.brand + ' ' + this.product + ' stok kosong!'
        }
    }
})