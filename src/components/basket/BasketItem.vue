<template>
  <div class="basket">
    <Navbar />
    <v-container>
      <div class="wrapper">
        <div class="basket-items">
          <h3>Ваша Корзина</h3>
          <BasketFoods
            v-for="(m, idx) in meals"
            :key="idx"
            @delete="meals.splice(idx, 1)"
            :img-url="m.imgUrl"
            :title="m.title"
            :price="m.price"
          />
        </div>
        <div class="pay-promocode">
          <div class="pay-items">
            <div class="coupon">
              <h4>Промокод</h4>
              <button>применить</button>
              <input type="text" placeholder="Промокод" />
            </div>
            <div class="coupon">
              <h4>Бонусные рубли (доступно 258)</h4>
              <button>списать</button>
              <input type="text" placeholder="258" />
            </div>
            <div class="adress-wrapper">
              <h4>Доставка</h4>
              <div class="adress">
                <input type="radio" name="adress" id="1" />
                <h6>Самовывоз</h6>
              </div>
              <div class="adress">
                <input type="radio" name="adress" id="1" />
                <h6>Дом (ул. М. Горького, 237)</h6>
              </div>
              <div class="adress">
                <input type="radio" name="adress" id="1" />
                <h6>Офис (ул. Социалистическая, 16)</h6>
              </div>
              <div class="adress">
                <input type="radio" name="adress" id="1" />
                <h6>Другой адрес</h6>
              </div>
            </div>
            <div class="amount">
              <h6>Итого:852</h6>
              <h6>Промокод:652</h6>
              <h6>Бонусы:22</h6>
              <h6>Доставка:156</h6>
              <div class="total-amount">
                <h6>Всего к оплате: 946₽</h6>
              </div>
              <div class="checkout">
                <button>оформить заказ</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sauce-snack">
        <h3>Соусы к бортикам и закускам</h3>
        <div class="sauce-wrapper">
          <Sauce
            v-for="(s, i) in sauce"
            :key="i"
            :img-url="s.imgUrl"
            :title="s.title"
            :price="s.price"
          />
        </div>
      </div>
      <div class="rf-wrap">
        <div class="rf-title">
          <h4>Рекомендуем к вашему заказу</h4>
        </div>
        <div class="recomend-foods">
          <div class="wrapper-of-foods" v-for="(d, i) in deserts" :key="i">
            <div class="desert-photo">
              <img :src="d.imgUrl" alt="" />
            </div>
            <div class="titlies-wrapper">
              <div class="desert-title">
                <h5>{{ d.title }}</h5>
              </div>
              <div class="desert-price">
                <p>{{ d.price }}₽</p>
                <button>в корзину</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </v-container>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import BasketFoods from "@/components/basket/BasketFoods";
import Sauce from "@/components/basket/Sauce";
import Footer from "@/components/Footer";

export default {
  name: "BasketItem",
  components: {
    Navbar,
    BasketFoods,
    Sauce,
    Footer,
  },
  data() {
    return {
      meals: [
        {
          imgUrl: require("@/assets/basket-img.png"),
          title: "Стейк из семги",
          price: 350,
        },
        {
          imgUrl: require("@/assets/basket-img-2.png"),
          title: "Салат греческий",
          price: 145,
        },
        {
          imgUrl: require("@/assets/basket-img-3.png"),
          title: "Суп сырный",
          price: 250,
        },
        {
          imgUrl: require("@/assets/basket-4.png"),
          title: "Пломбир с ягодами",
          price: 235,
        },
      ],
      sauce: [
        {
          imgUrl: require("@/assets/img/bs-1.png"),
          title: "Соус Терияки",
          price: 35,
        },
        {
          imgUrl: require("@/assets/img/bs-2.png"),
          title: "Соус Тартар",
          price: 35,
        },
        {
          imgUrl: require("@/assets/img/bs-3.png"),
          title: "Соус Сырный",
          price: 35,
        },
        {
          imgUrl: require("@/assets/img/bs-4.png"),
          title: "Соус Барбекю",
          price: 35,
        },
      ],
      deserts: [
        {
          id: 1,
          imgUrl: require("@/assets/img/choco-desert.png"),
          title: "Шоколадный десерт с овсянкой",
          subtitle:
            "Две мясных котлеты гриль, Специальный соус, сыр, Огурцы, салат и лук, Огурцы, салат и лук. Всё на булачке с кунжутом,",
          price: 165,
        },
        {
          id: 2,
          imgUrl: require("@/assets/img/fruit-desert.png"),
          title: "Блинчики в малиной",
          subtitle:
            "Две мясных котлеты гриль, Специальный соус, сыр, Огурцы, салат и лук, Огурцы, салат и лук. Всё на булачке с кунжутом,",
          price: 100,
        },
        {
          id: 3,
          imgUrl: require("@/assets/img/fruit-plombir.png"),
          title: "Ягодный пломбир ",
          subtitle:
            "Две мясных котлеты гриль, Специальный соус, сыр, Огурцы, салат и лук, Огурцы, салат и лук. Всё на булачке с кунжутом,",
          price: 150,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.basket {
  background: #191919;
  width: 100%;

  .wrapper {
    display: flex;
    padding: 50px 0;
  }

  &-items {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-right: 30px;

    h3 {
      font-family: Open Sans;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 33px;
      color: #d9d9d9;
      margin-bottom: 40px;
    }
  }

  .pay-promocode {
    display: flex;
    flex-direction: column;
    width: 50%;
    position: relative;
    border-left: 1px solid #ffffff;
    h4 {
      font-family: Open Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 25px;
      text-align: center;
      color: #ffffff;
      text-align: start;
      margin-bottom: 30px;
    }
  }
  .pay-items {
    margin-left: 30px;
  }

  .coupon {
    margin-bottom: 15px;

    input {
      width: 100%;
      padding: 10px 150px 10px 30px;
      border: 1px solid #34c759;
      border-radius: 20px;
      outline: none;
    }
    button {
      background: #34c759;
      position: absolute;
      right: 0;
      padding: 10px 30px 10px 30px;
      outline: none;
      border: 1px solid #34c759;
      border-radius: 20px;
    }
  }

  .adress-wrapper {
    display: flex;
    flex-direction: column;

    h4 {
      margin-bottom: 15px;
    }
  }
  .adress {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    input {
      margin-right: 10px;
    }

    h6 {
      font-family: Open Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 19px;
      text-align: center;
      color: #ffffff;
    }
  }
  .amount {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    h6 {
      font-family: Open Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 25px;
      text-align: center;
      color: #ffffff;
      margin-bottom: 10px;
    }
  }
  .total-amount {
    border-top: 1px solid #fff;
    margin-bottom: 37px;

    h6 {
      font-family: Open Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 25px;
      text-align: center;
      color: #ffffff;
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
  .checkout {
    button {
      padding: 10px 33px;
      font-family: Open Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 10px;
      line-height: 14px;
      text-align: center;
      text-transform: uppercase;
      color: #252525;
      background: #34c759;
      border-radius: 20px;
    }
  }
  .sauce-snack {
    margin-bottom: 50px;
    h3 {
      font-family: Open Sans;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 33px;
      color: #d9d9d9;
      margin-bottom: 45px;
    }
  }
  .sauce-wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
  }
  .rf-wrap {
    padding: 50px 0;
  }
  .recomend-foods {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 25px;
    row-gap: 25px;
  }

  .rf-title {
    margin-bottom: 25px;
    h4 {
      font-family: Open Sans;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 33px;
      color: #d9d9d9;
    }
  }

  .wrapper-of-foods {
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
}
</style>
