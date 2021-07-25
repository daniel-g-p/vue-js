const app = Vue.createApp({
    data() {
        return {
            friends: [{
                id: 1,
                firstName: "Manuel",
                lastName: "Lorenz",
                phone: "01234 5678 991",
                email: "manuel@localhost.com",
                detailsVisible: true,
            }, {
                id: 2,
                firstName: "Julie",
                lastName: "Jones",
                phone: "09876 543 221",
                email: "julie@localhost.com",
                detailsVisible: true,
            }]
        }
    },
    computed: {

    },
    watch: {

    }
});

app.component("friend-card", {
    template: `
    <li>
        <h2>{{ firstName }} {{ lastName }}</h2>
        <button v-on:click="toggleDetails">{{ detailsVisible ? "Hide" : "Show" }} details</button>
        <ul v-if="detailsVisible">
          <li><strong>Phone: </strong>{{ phone }}</li>
          <li><strong>Email: </strong>{{ email }}</li>
        </ul>
    </li>
    `,
    data() {
        return {
            detailsVisible: true,
            id: 1,
            firstName: "Manuel",
            lastName: "Lorenz",
            phone: "01234 5678 991",
            email: "manuel@localhost.com",
        }
    },
    methods: {
        toggleDetails() {
            this.detailsVisible = !this.detailsVisible;
        }
    }
});

app.mount("#app");