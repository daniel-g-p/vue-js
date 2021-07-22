const app = Vue.createApp({
    data() {
        return {
            user: "",
            confirmedUser: ""
        }
    },
    methods: {
        fireAlert() {
            if (this.user) {
                alert(`Welcome, ${this.user}!`);
            } else {
                alert("Please enter your name to start");
            }
        },
        updateUser(event) { this.user = event.target.value },
        confirmUser(event) { this.confirmedUser = event.target.value }
    }
});

app.mount("#assignment");