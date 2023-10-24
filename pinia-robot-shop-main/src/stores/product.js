import { defineStore, acceptHMRUpdate } from "pinia";
import { ref } from "vue";

export const useProductStore = defineStore(
  "products",
  () => {
    const products = ref([]);
    const productsLoading = ref(false);

    const getProducts = async () => {
      const responce = await fetch("/api/products");
      products.value = await responce.json();
    };

    return {
      products,
      getProducts,
      productsLoading,
    };
  },
  {
    cache: {
      getProducts: { stateKey: "products", loadingStateKey: "productsLoading" },
    },
  }
);

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProductStore, import.meta.hot));
}
