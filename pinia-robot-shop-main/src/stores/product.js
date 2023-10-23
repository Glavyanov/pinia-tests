import { defineStore } from "pinia";
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
