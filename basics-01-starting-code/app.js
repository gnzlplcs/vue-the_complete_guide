const app = Vue.createApp({
  data() {
    // always returns an object
    return {
      courseGoal: "Finish the Vue course",
      vueLink: "https://vuejs.org",
    };
  },
});

app.mount("#user-goal");
