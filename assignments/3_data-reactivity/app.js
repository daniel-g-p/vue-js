const app = Vue.createApp({
    data() {
        return {
            num: 0,
        }
    },
    computed: {
        result() {
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
            this.num += num;
        }
    },
    watch: {
        result() {
            const data = this;
            setTimeout(() => {
                data.num = 0;
            }, 5000);
        }
    }
})

app.mount("#assignment");