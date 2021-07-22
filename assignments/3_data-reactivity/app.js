const app = Vue.createApp({
    data() {
        return {
            num: 0,
        }
    },
    computed: {
        result() {
            console.log("RESULT");
            if (this.num > 37) {
                return "Too much!"
            } else if (this.num === 37) {
                return "37, well done!"
            } else {
                return "Not there yet!"
            }
        }
    },
    methods: {
        add(num) {
            console.log("ADD");
            this.num += num;
        }
    },
    watch: {
        result() {
            console.log("WATCH");
            const data = this;
            setTimeout(() => {
                data.num = 0;
            }, 5000);
        }
    }
})

app.mount("#assignment");