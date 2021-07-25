const app = Vue.createApp({
    data() {
        return {
            currentUserInput: '',
            message: 'Vue is great!',
        };
    },
    methods: {
        saveInput() {
            console.log(this.$refs.userInput.value);
            this.currentUserInput = this.$refs.userInput.value;
        },
        setText() {
            this.message = this.currentUserInput;
        },
    },
    beforeCreate() {
        console.log("beforeCreate, Vue app object exists");
    },
    created() {
        console.log("created, Vue app object contains data")
    },
    beforeMount() {
        console.log("beforeMount, app template exists and is available")
    },
    mounted() {
        console.log("mounted, Vue app visible on the user screen")
    },
    beforeUpdate() {
        console.log("beforeUpdate, data update request detected")
    },
    updated() {
        console.log("updated, data update has been visibly executed in the DOM")
    }
});

app.mount('#app');