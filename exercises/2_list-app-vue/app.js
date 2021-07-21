const app = Vue.createApp({
    data() {
        return {
            goals: ["Finish the Vue JS course", "Finish the Node JS course", "Build Streetballr"],
            moreInfoLink: "https://v3.vuejs.org/",
            moreInfoButton: `<a class="linkButton" href="https://v3.vuejs.org/">Learn more</a>`,
            currentProgress: 0.05
        }
    },
    methods: {
        randomGoal() {
            const randomNumber = Math.floor(Math.random() * this.goals.length);
            return this.goals[randomNumber];
        }
    }
});

app.mount("#user-goal");