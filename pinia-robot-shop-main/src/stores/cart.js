import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useCartStore = defineStore("cart", () => {

    const cart = ref([]);
    const cartTotal = computed(() => cart.value.reduce((acc, curr) => acc += curr.price , 0));

    return { cart, cartTotal };
});