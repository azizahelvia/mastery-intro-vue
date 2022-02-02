const app = Vue.createApp({
    data() { 
        return {
            product: 'Kaus Kaki',
            image: './assets/images/socks_green.jpg',
            inventory: 10,
            details: ['50% katun', '30% wol', '20% poliester'],
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            variants: [
                { id: 2110, color: 'hijau'},
                { id: 2111, color: 'biru'},
            ],
        }
    }
})