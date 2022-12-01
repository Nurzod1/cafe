<template>
  <div class="add-delete">
    <h6>{{ title }}</h6>
    <div class="delete-btn">
      <button @click="count--">-</button>
      <p>{{ count }}</p>
      <button @click="count++">+</button>
      <button @click="$emit('delete')">
        <img src="@/assets/img/delete.svg" alt="" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddDelete",
  data() {
    return {
      count: 0,
    };
  },
  props: {
    title: String,
  },
};
</script>

<style lang="scss" scoped>
.add-delete {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
  width: 100%;
  margin-left: 25px;

  h6 {
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;
    color: #ffffff;
  }

  .delete-btn {
    display: flex;
    align-items: center;

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
}
</style>
