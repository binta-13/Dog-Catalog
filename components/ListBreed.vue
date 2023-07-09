<template>
  <div class="container flex-column">
    <h1>Dog Sub-Breeds</h1>
    <b-container fluid>
      <b-row cols="4">
        <b-col v-for="(subBreed, index) in dogList" :key="index">
          <b-card
            no-body
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
          >
            <b-card-header class="p-0"
              ><b-card-img-lazy
                v-bind="{
                  blank: true,
                  blankColor: '#bbb',
                  fluidGrow: true,
                }"
                :src="subBreed.image"
              ></b-card-img-lazy
            ></b-card-header>

            <b-card-body class="my-3">
              <b-button
                v-b-modal="`modal-${index}`"
                @click="getSubBreed(subBreed.name)"
                >{{ subBreed.name }}</b-button
              >
              <b-modal :id="`modal-${index}`" :title="subBreed.name" size="xl">
                <b-container fluid v-if="subBreed.name !== 'shiba' && subBreed.name !== 'terrier' ">
                  <b-row cols="4">
                    <b-col v-for="(image, index) in subBreedImage" :key="index">
                      <img
                        :src="image"
                        class="rounded img-fluid mx-2 my-3"
                        alt="Dog"
                    /></b-col>
                  </b-row>
                </b-container>
                <b-carousel
                  v-else
                  id="carousel-1"
                  v-model="slide"
                  :interval="4000"
                  controls
                  indicators
                  background="#ababab"
                  img-width="1024"
                  img-height="480"
                  style="text-shadow: 1refpx 1px 2px #333"
                  @sliding-start="onSlideStart"
                  @sliding-end="onSlideEnd"
                >
                  <b-carousel-slide
                    v-for="(image, index) in subBreedImage"
                    :key="index"
                    :img-src="image"
                  ></b-carousel-slide>
                </b-carousel>
              </b-modal>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import {
  defineComponent,
  useStore,
  computed,
  onMounted,
  ref,
} from "@nuxtjs/composition-api";
export default defineComponent({
  setup() {
    const store = useStore();

    const slide = ref(0);
    const sliding = ref(null);

    const dogList = computed(() => {
      return store.state.dogList;
    });

    const subBreedImage = computed(() => {
      return store.state.subBreed;
    });

    const getDogList = () => {
      store.dispatch("getDogList");
    };

    const getSubBreed = (subBreed) => {
      store.dispatch("getSubBreed", subBreed);
    };

    const onSlideStart = () => {
      sliding.value = true;
    };
    const onSlideEnd = () => {
      sliding.value = false;
    };

    onMounted(() => {
      getDogList();
    });

    return {
      dogList,
      subBreedImage,
      getSubBreed,
      slide,
      onSlideStart,
      onSlideEnd,
    };
  },
});
</script>
