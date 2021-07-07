export default {
  state() {
    return {
      step: 0,
      steps: [
        { id: 1, finish: true },
        { id: 2, finish:  false },
        { id: 3, finish:  false },
        { id: 4, finish:  false },
        { id: 5, finish:  false },
        { id: 6, finish:  false },
      ],
    };
  },
  mutations: {
    increment(state) {
      if (state.step > 5) return;
      state.steps.find(el => el.id == state.step + 1).finish = true
      state.step++;
    },
    decrement(state) {
      if (state.step < 1) return;
      state.step--;
    },
    change(state, payload) {
      state.step = payload.value;
    },
  },
  getters: {
    step(state) {
      return state.step;
    },
    steps(state) {
      return state.steps;
    },
  },
};
