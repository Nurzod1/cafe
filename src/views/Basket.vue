<template>
  <div class="basket-page">
    <BasketItem />
  </div>
</template>

<script>
import BasketItem from "@/components/basket/BasketItem";
export default {
  name: "Basket",
  components: { BasketItem },
};
</script>
