<template>
  <div class="basket-meals">
    <div class="meal-img">
      <img :src="imgUrl" alt="" />
      <div class="img-title">
        <h5>{{ title }}</h5>
      </div>
    </div>
    <div class="remove-btn">
      <button @click="count--">-</button>
      <p class="count">{{ count }}</p>
      <button @click="count++">+</button>
      <p>{{ price }}</p>
      <button @click="$emit('delete')">
        <img src="@/assets/img/delete.svg" alt="" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "BasketFoods",
  props: {
    imgUrl: {
      type: String,
    },
    title: {
      type: String,
    },
    price: {
      type: Number,
    },
  },
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
.basket-meals {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
  .meal-img {
    display: flex;
    align-items: center;
  }
  .img-title {
    margin-left: 15px;
    h5 {
      font-family: Alegreya;
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 33px;
      color: #ffffff;
    }
  }
  .remove-btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 25%;

    button {
      color: #ffffff;
    }
    p {
      font-family: Open Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 19px;
      color: #ffffff;
      margin: 0;
    }
  }
  .count {
    padding: 0 3px;
    border: 1px solid #ffffff;
  }
}
</style>
