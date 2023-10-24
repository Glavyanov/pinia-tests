import { defineStore, acceptHMRUpdate } from "pinia";
import { ref } from "vue";

export const useProductStore = defineStore("product", () => {
  const products = ref([]);

  const getProducts = async () => {
    const responce = await fetch("/api/products");
    products.value = await responce.json();
  };

  return {
    products,
    getProducts,
  };
});

if(import.meta.hot){
  import.meta.hot.accept(acceptHMRUpdate(useProductStore, import.meta.hot));
}
