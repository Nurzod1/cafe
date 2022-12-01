<template>
  <div class="make-pizza">
    <div class="wrapper-item">
      <div class="wrapper-title">
        <h3>{{ texts[next].title }}</h3>
      </div>
      <div class="wrapper-sub-title">
        <p>Мы приготовим для Вас пиццу с вашими любимыми игридиентами</p>
      </div>
      <div class="wrapper-btn">
        <button>заказать</button>
      </div>
    </div>
    <v-carousel
      cycle
      height="600"
      hide-delimiter-background
      show-arrows
      @change="next = $event"
    >
      <v-carousel-item v-for="(img, i) in images" :key="i" :src="img.src">
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      next: 0,
      images: [
        {
          src: require("@/assets/img/food.png"),
        },
        {
          src: require("@/assets/img/hot-dog.jpg"),
        },
        {
          src: require("@/assets/img/salad.jpg"),
        },
      ],
      texts: [
        { title: "Соберите свою пиццу" },
        { title: "Соберите свой хот-дог" },
        { title: "Соберите свой салат" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.make-pizza {
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.38139005602240894) 48%
    );
  }

  .wrapper-item {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 1;
    right: 0;
    bottom: 30%;
    width: 50%;
  }
  .wrapper-title {
    width: 50%;
    h3 {
      font-family: Montserrat;
      font-style: normal;
      font-weight: 600;
      font-size: 36px;
      line-height: 44px;
      text-transform: uppercase;
      color: #34c759;
    }
  }
  .wrapper-sub-title {
    width: 57%;
    margin: 40px 0 60px 0;
    p {
      font-family: Montserrat;
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 29px;
      color: #ffffff;
    }
  }
  .wrapper-btn {
    button {
      padding: 9px 47px;
      border: 1px solid #34c759;
      border-radius: 20px;
      color: #34c759;

      &:hover {
        background: #34c759;
        color: #ffffff;
      }
    }
  }
}

@media screen and (max-width: 991.98px) {
  .make-pizza {
    .wrapper-title {
      width: 85%;
    }
    .wrapper-sub-title {
      width: 100%;
    }
  }
}

@media screen and (max-width: 767.98px) {
  .make-pizza {
    .wrapper-title {
      h3 {
        font-size: 30px;
      }
    }
    .wrapper-sub-title {
      p {
        font-size: 17px;
      }
    }
  }
}

@media screen and (max-width: 575.98px) {
  .make-pizza {
    .wrapper-title {
      width: 100%;
      h3 {
        font-size: 20px;
      }
    }
    .wrapper-sub-title {
      p {
        font-size: 15px;
      }
    }
  }
}
</style>
