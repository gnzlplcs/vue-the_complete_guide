const app = Vue.createApp({
  data() {
    // always returns an object
    return {
      courseGoalA: "Finish the Vue course",
      courseGoalB: "Master the Vue course",
      vueLink: "https://vuejs.org",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        console.log(this)
        return this.courseGoalB;
      }
    }
  }
});

app.mount("#user-goal");

