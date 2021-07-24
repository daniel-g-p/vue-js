const app = Vue.createApp({
    data() {
        return {
            userInput: "",
            tasks: [],
            listVisible: true,
        }
    },
    computed: {
        buttonText() {
            return this.listVisible ? "Hide list" : "Show list";
        }
    },
    methods: {
        addTask() {
            if (this.userInput) {
                this.tasks.push(this.userInput);
                this.userInput = "";
            }
        },
        toggleVisibility() {
            this.listVisible = !this.listVisible;
        }
    }
});

app.mount("#assignment");