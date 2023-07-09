export const state = () => ({
  dogList: [],
  dogImage: [],
  subBreed: null,
  inputBreed: "",
});

export const mutations = {
  SET_DOG_LIST(state, payload) {
    state.dogList.push(payload);
  },
  SET_DOG_IMAGE(state, payload) {
    state.dogImage = payload;
  },
  SET_SUB_BREED(state, payload) {
    state.subBreed = payload;
  },
  SET_INPUT_BREED(state, payload) {
    state.inputBreed = payload;
  },
};

export const actions = {
  async getDogList({ commit }) {
    await this.$axios
      .$get("/https://dog.ceo/api/breeds/list/all")
      .then((response) => {
        return response.message;
      })
      .then((data) => {
        for (const key in data) {
          this.$axios
            .$get(`/https://dog.ceo/api/breed/${key}/images/random/1`)
            .then((response) => {
              commit("SET_DOG_LIST", {
                name: key,
                image: response.message[0],
              });
            });
        }
      })
      .catch((err) => {
        console.log(er);
      });
  },

  async getDogImage({ commit }) {
    const { message } = await this.$axios.$get(
      "/https://dog.ceo/api/breed/hound/images"
    );
    commit("SET_DOG_IMAGE", message);
  },

  async getSubBreed({ commit }, param) {
    const { message } = await this.$axios.$get(
      `/https://dog.ceo/api/breed/${param}/images/random/20`
    );
    commit("SET_SUB_BREED", message);
  },

  async getInputBreed({ commit }, param) {
    await this.$axios
      .$get(`/https://dog.ceo/api/breed/${param}/images/random`)
      .then((response) => {
        commit("SET_INPUT_BREED", response.message);
      })
      .catch((error) => {
        console.log(error.response.data.message);
        commit("SET_INPUT_BREED", error.response.data.message);
      });
  },
};
