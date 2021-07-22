const app = Vue.createApp({
    data() {
        return {
            counter: 5,
            firstName: "",
            lastName: ""
        };
    },
    methods: {
        add(num = 1) { this.counter += num },
        subtract(num = 1) { this.counter -= num },
        resetCounter() { this.counter = 0 },
        resetName() {
            console.log("resetName executed")
            this.firstName = "";
            this.lastName = "";
        }
    },
    computed: {
        fullName() {
            console.log("fullName executed");
            if (this.firstName && this.lastName) {
                return this.firstName + " " + this.lastName
            } else if (this.firstName) {
                return this.firstName + " _____";
            } else if (this.lastName) {
                return "_____ " + this.lastName;
            } else {
                return "";
            }
        }
    },
    watch: {
        counter(value) {
            if (value >= 50) {
                this.counter = 0;
            }
        }
    }
})

app.mount('#events');