const app = Vue.createApp({
    data() {
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false,
        }
    },
    computed: {
        classesA() { return { "demo--selected": this.boxASelected } },
        classesB() { return { "demo--selected": this.boxBSelected } },
        classesC() { return { "demo--selected": this.boxCSelected } }
    },
    methods: {
        select(box) {
            const selector = `box${box}Selected`;
            this[selector] = !this[selector];
        },
        demoActive(box) {
            console.log(box);
            const selector = "box" + box + "Selected";
            return { active: this[selector] };
        },
    },
    watch: {

    }
});

app.mount("#styling");