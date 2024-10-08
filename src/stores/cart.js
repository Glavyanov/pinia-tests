import { acceptHMRUpdate, defineStore, storeToRefs } from "pinia";
import { ref, computed } from "vue";
import { useProductStore } from "@/stores/product.js";

export const useCartStore = defineStore("cart", () => {
  const { products } = storeToRefs(useProductStore());
  const productIds = ref([]);

  const cart = computed(() =>
    productIds.value.map((id) => products.value.find((p) => p.id === id))
  );
  const cartTotal = computed(() =>
    cart.value.reduce((acc, curr) => (acc += curr.price), 0)
  );

  const addToCart = (product) => {
    productIds.value.push(product.id);
  };

  const removeFromCart = (product) => {
    const itemIndex = productIds.value.findIndex((id) => id === product.id);
    productIds.value.splice(itemIndex, 1);
  };

  return { cart, cartTotal, addToCart, removeFromCart };
});

if(import.meta.hot){
  import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot));
}
