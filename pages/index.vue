<template>
  <div>
    <section class="container">
      <div class="mt-5">
        <h1 class="title">Dog Catalog</h1>
        <div v-if="inputBreed.includes('http')">
          <img :src="inputBreed" alt="Random Dog Image" height="180px" />
        </div>

        <b-alert
          v-else
          :show="!inputBreed.includes('http') && inputBreed.length > 0"
          variant="danger"
          >{{ inputBreed }}</b-alert
        >

        <b-form-input
          v-model="userInput"
          type="text"
          placeholder="Enter breed"
          class="my-3"
          id="input-live"
          :state="inputValidation"
          trim
        >
        </b-form-input>
        <b-form-invalid-feedback
          v-if="inputValidation"
          id="input-live-feedback"
        >
          Field cannot be empty.
        </b-form-invalid-feedback>

        <b-button @click="getInputBreed">Dog Image</b-button>
      </div>
    </section>
  </div>
</template>

<script>
import {
  defineComponent,
  useStore,
  ref,
  computed,
} from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    const userInput = ref();
    const store = useStore();

    const inputBreed = computed(() => {
      return store.state.inputBreed;
    });

    const inputValidation = computed(() => {
      if (typeof userInput.value === "string") {
        if (userInput.value.length > 0) {
          return true;
        } else {
          return false;
        }
      } else {
        return null;
      }
    });

    const getInputBreed = () => {
      store.dispatch("getInputBreed", userInput.value);
    };

    return {
      userInput,
      inputBreed,
      getInputBreed,
      inputValidation,
    };
  },
});
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
