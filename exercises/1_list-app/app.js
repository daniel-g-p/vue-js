Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue: ""
        }
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredValue);
            this.enteredValue = "";
        }
    }
}).mount("main");

// const form = document.querySelector("form");
// const input = document.querySelector("input");
// const list = document.querySelector("ul");

// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     if (input.value) {
//         const item = document.createElement("li");
//         item.innerHTML = input.value;
//         list.append(item);
//         input.value = "";
//         return item;
//     } else {
//         return "Error"
//     }
// })