const app = Vue.createApp({
    data() {
        return {
            name: "Daniel",
            age: 19,
            imageLink: {
                url: "https://www.sportscasting.com/wp-content/uploads/2020/01/Los-Angeles-Laker-Kobe-Bryant.jpg",
                alt: "Kobe Image"
            }
        }
    },
    methods: {
        ageInFiveYears() {
            return this.age + 5;
        },
        randomNumber() {
            return Math.floor(Math.random() * 24) + 1;
        }
    }
});

app.mount("#assignment");