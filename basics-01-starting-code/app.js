const app = Vue.createApp({
  data() {
    // always returns an object
    return {
      courseGoal: 'Finish the Vue course'
    }
  },
});

app.mount("#user-goal");
