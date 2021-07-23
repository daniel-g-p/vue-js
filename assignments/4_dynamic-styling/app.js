const app = Vue.createApp({
    data() {
        return {
            userInput: "",
            isVisible: true,
            paragraphBackground: ""
        }
    },
    computed: {
        classObject() {
            return { 'user1': this.userInput.includes("user1"), user2: this.userInput.includes("user2"), hidden: !this.isVisible }
        }
    },
    methods: {
        toggleVisibility() { this.isVisible = !this.isVisible }
    }
});

app.mount("#assignment");