<template>
  <div class="desert-wrapper" @click="$router.push('/order')">
    <div class="desert-photo">
      <img :src="require(`@/assets/img/${imgUrl}`)" alt="" />
    </div>
    <div class="titlies-wrapper">
      <div class="desert-title">
        <h5>{{ title }}</h5>
        <p>{{ subtitle }}</p>
      </div>
      <div class="desert-price">
        <p>{{ price }}₽</p>
        <button>в корзину</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DesertList",
  props: {
    imgUrl: {
      type: String,
      default: require("@/assets/img/menu-unavailable.jpg"),
    },
    title: String,
    subtitle: String,
    price: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="scss" scoped>
.desert-wrapper {
  display: flex;
  flex-direction: column;
  background: #252525;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  cursor: pointer;
  overflow: hidden;
  &:hover {
    transform: scale(1.1);
    transition: 0.5s ease;
  }

  img {
    width: 100%;
    height: 100%;
  }

  .titlies-wrapper {
    padding: 0 20px 20px 20px;

    .desert-title {
      h5 {
        color: #ffffff;
        font-family: Alegreya;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 24px;
        margin: 15px 0 20px 0;
      }
      p {
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 15px;
        color: #b3b3b3;
      }
    }
    .desert-price {
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        color: #32d74b;
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 33px;
        margin: 0;
      }
      button {
        background: #32d74b;
        color: #252525;
        font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
        font-size: 10px;
        line-height: 12px;
        text-align: center;
        text-transform: uppercase;
        padding: 10px 18px;
        border-radius: 20px;
      }
    }
  }
}

@media screen and (max-width: 991.98px) {
  .desert-wrapper {
    .titlies-wrapper {
      padding: 0 15px 15px 15px;
      .desert-title {
        h5 {
          font-size: 16px;
        }
      }
    }
  }
}
@media screen and (max-width: 767.98px) {
  .desert-wrapper {
    .titlies-wrapper {
      padding: 0 15px 15px 15px;
      .desert-title {
        h5 {
          margin: 10px 0 10px 0;
        }
        p {
          font-size: 11px;
        }
      }
    }
  }
}

@media screen and (max-width: 575.98px) {
  .desert-wrapper {
    .titlies-wrapper {
      padding: 0 15px 15px 15px;
      .desert-title {
        h5 {
          font-size: 16px;
          margin: 10px 0 10px 0;
        }
        p {
          font-size: 11px;
        }
      }
      .desert-price {
        button {
          padding: 4px 5px;
        }
      }
    }
  }
}
</style>
