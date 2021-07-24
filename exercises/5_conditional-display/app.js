const app = Vue.createApp({
    data() {
        return {
            goals: [],
            userInput: "",
        };
    },
    computed: {
        goalsIsEmpty() {
            return this.goals.length ? false : true;
        }
    },
    methods: {
        addGoal() {
            if (this.userInput) {
                this.goals.push(this.userInput);
                this.userInput = "";
            } else {
                alert("Please enter a goal...")
            }
        },
        removeGoal(index) {
            // const text = event.target.innerText;
            // const goal = text.substring(text.indexOf(" ")).trim();
            // const index = this.goals.indexOf(goal);
            this.goals.splice(index, 1);
        }
    },
    watch: {

    }
});

app.mount('#user-goals');