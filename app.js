const app = Vue.createApp({
    data() {
        return {
            show: false,
            project: {
                title: 'Portfolio',
                name: 'Henry Ybañez',
                email: 'htybanez1974@gmail.com'
            },
            pictures: [
                { src: 'pictures/img1.jpg', show: false },
                { src: 'pictures/img2.jpg', show: false },
                { src: 'pictures/img4.jpg', show: false },
                { src: 'pictures/img5.jpg', show: false },
                { src: 'pictures/img7.jpg', show: false },
                { src: 'pictures/img3.jpg', show: false },
                { src: 'pictures/img6.jpg', show: false },
                { src: 'pictures/img8.jpg', show: false },
                { src: 'pictures/img9.jpg', show: false },
                { src: 'pictures/img10.jpg', show: false },
                { src: 'pictures/img12.jpg', show: false },
                { src: 'pictures/img13.jpg', show: false },
                { src: 'pictures/img14.jpg', show: false },
                { src: 'pictures/img15.jpg', show: false },
                { src: 'pictures/img16.jpg', show: false },
                { src: 'pictures/img17.jpg', show: false },
            ]
        }
    }
})

app.mount('#app')