<template>
  <div class="sauce">
    <div class="sauce-img">
      <img :src="imgUrl" alt="" />
    </div>
    <div class="title">
      <h5>{{ title }}</h5>
    </div>
    <div class="price">
      <h5>{{ price }}₽</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sauce",
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
};
</script>

<style lang="scss" scoped>
.sauce {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #252525;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: 0.5s ease;
  }

  .title {
    h5 {
      font-family: Alegreya;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 24px;
      color: #ffffff;
    }
  }
  .price {
    h5 {
      font-family: Open Sans;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 33px;
      color: #32d74b;
    }
  }
}
</style>
