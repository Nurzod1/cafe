<template>
  <div class="order-item">
    <Navbar />
    <v-container>
      <div class="title">
        <h4>Соберите свой WOK</h4>
      </div>
      <div class="wrapper">
        <div class="order-items">
          <div class="img">
            <img class="order-photo" src="@/assets/img/order-item.png" alt="" />
            <div class="recomends-wrapper">
              <div class="main-adds">
                <h5>Основа</h5>
                <div class="adds-items">
                  <label>
                    <input type="radio" name="first" id="1" checked />
                    <img src="@/assets/img/check-img.png" alt="" />
                    <div class="food-name"><h6>Удон</h6></div>
                  </label>
                  <label
                    ><input type="radio" name="first" id="1" />
                    <img src="@/assets/img/check-img-2.png" alt="" />
                    <div class="food-name"><h6>Соба</h6></div>
                  </label>
                  <label
                    ><input type="radio" name="first" id="1" />
                    <img src="@/assets/img/check-img-3.png" alt="" />
                    <div class="food-name"><h6>Фунчоза</h6></div>
                  </label>
                  <label
                    ><input type="radio" name="second" id="1" />
                    <img src="@/assets/img/check-img-4.png" alt="" />
                    <div class="food-name"><h6>Рис</h6></div>
                  </label>
                </div>
              </div>
              <div class="recomend-items">
                <h5>Соус</h5>
                <div class="sauce-items">
                  <label>
                    <input type="radio" name="first-2" id="1" />
                    <img src="@/assets/img/sauce-1.png" alt="" />
                    <div class="sauce-name"><h6>Рис</h6></div>
                  </label>
                  <label>
                    <input type="radio" name="second-2" id="1" />
                    <img src="@/assets/img/sauce-tom.png" alt="" />
                    <div class="sauce-name"><h6>Рис</h6></div>
                  </label>
                  <label>
                    <input type="radio" name="third" id="1" />
                    <img src="@/assets/img/sauce-ches.png" alt="" />
                    <div class="sauce-name"><h6>Рис</h6></div>
                  </label>
                  <label>
                    <input type="radio" name="fourth" id="1" />
                    <img src="@/assets/img/sauce-sliv.png" alt="" />
                    <div class="sauce-name"><h6>Рис</h6></div>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="check-wrapper">
            <div class="check-items">
              <h5>Наполнение</h5>
              <label class="check-it">
                <input type="checkbox" name="food" id="1" />
                <div class="check-title">
                  <h6>Креветкая тигровая</h6>
                  <h6>98р.</h6>
                </div>
              </label>
              <label class="check-it">
                <input type="checkbox" name="food" id="1" />
                <div class="check-title">
                  <h6>Говядина</h6>
                  <h6>115р.</h6>
                </div>
              </label>
              <label class="check-it">
                <input type="checkbox" name="food" id="1" />
                <div class="check-title">
                  <h6>Цыплёнок</h6>
                  <h6>84р.</h6>
                </div>
              </label>
              <label class="check-it">
                <input type="checkbox" name="food" id="1" />
                <div class="check-title">
                  <h6>Лосось</h6>
                  <h6>138р.</h6>
                </div>
              </label>
              <label class="check-it">
                <input type="checkbox" name="food" id="1" />
                <div class="check-title">
                  <h6>Бекон</h6>
                  <h6>86р.</h6>
                </div>
              </label>
              <label class="check-it">
                <input type="checkbox" name="food" id="1" />
                <div class="check-title">
                  <h6>Морской коктейль</h6>
                  <h6>116р.</h6>
                </div>
              </label>
            </div>
            <div class="check-items-adds">
              <h5>Топпинки</h5>
              <label class="check-it">
                <input type="checkbox" name="food" id="1" />
                <div class="check-title">
                  <h6>Томаты черри</h6>
                  <h6>45р.</h6>
                </div>
              </label>
              <label class="check-it">
                <input type="checkbox" name="food" id="1" />
                <div class="check-title">
                  <h6>Креветкая тигровая</h6>
                  <h6>115р.</h6>
                </div>
              </label>
              <label class="check-it">
                <input type="checkbox" name="food" id="1" />
                <div class="check-title">
                  <h6>Сыр</h6>
                  <h6>40р.</h6>
                </div>
              </label>
              <label class="check-it">
                <input type="checkbox" name="food" id="1" />
                <div class="check-title">
                  <h6>Фасоль</h6>
                  <h6>35р.</h6>
                </div>
              </label>
              <label class="check-it">
                <input type="checkbox" name="food" id="1" />
                <div class="check-title">
                  <h6>Кукуруза</h6>
                  <h6>45р.</h6>
                </div>
              </label>
              <label class="check-it">
                <input type="checkbox" name="food" id="1" />
                <div class="check-title">
                  <h6>Кунжут</h6>
                  <h6>46р.</h6>
                </div>
              </label>
              <label class="check-it">
                <input type="checkbox" name="food" id="1" />
                <div class="check-title">
                  <h6>Ананасы</h6>
                  <h6>56р.</h6>
                </div>
              </label>
              <label class="check-it">
                <input type="checkbox" name="food" id="1" />
                <div class="check-title">
                  <h6>Грибы шампиньоны</h6>
                  <h6>66р.</h6>
                </div>
              </label>
              <label class="check-it">
                <input type="checkbox" name="food" id="1" />
                <div class="check-title">
                  <h6>Грибы шиитаке</h6>
                  <h6>46р.</h6>
                </div>
              </label>
              <label class="check-it">
                <input type="checkbox" name="food" id="1" />
                <div class="check-title">
                  <h6>Яйцо</h6>
                  <h6>46р.</h6>
                </div>
              </label>
              <label class="check-it">
                <input type="checkbox" name="food" id="1" />
                <div class="check-title">
                  <h6>Лук</h6>
                  <h6>40р.</h6>
                </div>
              </label>
            </div>
          </div>
        </div>
        <div class="your-order">
          <div class="your-food-items">
            <h4 class="main-title">Ваш WOK</h4>
            <h6 class="def-food">Фунчоза</h6>
            <h6 class="def-food">Соус терияки</h6>
            <div class="add-wrapper">
              <AddDelete
                v-for="(f, idx) in secJson"
                :key="idx"
                @delete="secJson.splice(idx, 1)"
                :title="f.title"
              />
              <div class="totally">
                <div class="totally-price">
                  <h6>Итого:</h6>
                  <h5>348</h5>
                </div>
              </div>
            </div>
            <div class="wrapper-r">
              <h4>Приборы</h4>
              <label>
                <input type="radio" name="fork" id="1" />
                <div class="fork"><h6>Палочки</h6></div>
              </label>
              <label>
                <input type="radio" name="fork" id="1" />
                <div class="fork"><h6>Вилка</h6></div>
              </label>
            </div>
            <div class="basket-btn">
              <button @click="$router.push('/basket')">В корзину</button>
            </div>
          </div>
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
import AddDelete from "@/components/order/AddDelete";
import Navbar from "@/components/Navbar";
import json from "@/database/ad.js";
import Footer from "@/components/Footer";
export default {
  name: "OrderP",
  components: {
    AddDelete,
    Navbar,
    Footer,
  },
  data() {
    return {
      count: 1,
      secJson: json,

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
.order-item {
  background: #191919;

  .title {
    margin-bottom: 25px;

    h4 {
      font-family: "Open Sans", sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 33px;
      color: #ffffff;
    }
  }
  .wrapper {
    display: flex;
  }
  .order-items {
    margin-right: 28px;
    .img {
      display: flex;

      .order-photo {
        margin-right: 35px;
      }

      .recomends-wrapper {
        display: flex;
        flex-direction: column;
      }
      .main-adds {
        margin-bottom: 17px;

        h5 {
          font-style: normal;
          font-weight: 600;
          font-size: 18px;
          line-height: 25px;
          color: #d9d9d9;
          margin-bottom: 15px;
        }

        label {
          position: relative;
          margin-right: 30px;
          input {
            position: absolute;
            visibility: hidden;

            &:checked + img {
              outline: 3px solid #34c759;
            }

            &:checked + img + .food-name h6 {
              color: #34c759;
            }
          }

          img {
            width: 65px;
            height: 65px;
            border-radius: 50%;
          }

          .food-name {
            text-align: center;
            h6 {
              font-family: Alegreya;
              font-style: normal;
              font-weight: 500;
              font-size: 14px;
              line-height: 19px;
              color: #ffffff;
            }
          }
        }
      }
      .adds-items {
        display: flex;
        align-items: center;
      }
      .recomend-items {
        h5 {
          font-style: normal;
          font-weight: 600;
          font-size: 18px;
          line-height: 25px;
          color: #d9d9d9;
          margin-bottom: 15px;
        }
        label {
          position: relative;
          margin-right: 30px;
          input {
            position: absolute;
            visibility: hidden;

            &:checked + img {
              outline: 3px solid #34c759;
            }
            &:checked + img + .sauce-name h6 {
              color: #34c759;
            }
          }

          img {
            width: 65px;
            height: 65px;
            border-radius: 50%;
          }
          .sauce-name {
            text-align: center;

            h6 {
              font-family: Alegreya;
              font-style: normal;
              font-weight: 500;
              font-size: 14px;
              line-height: 19px;
              color: #ffffff;
            }
          }
        }
      }
      .sauce-items {
        display: flex;
        align-items: center;
      }
    }
    .check-wrapper {
      display: flex;
      margin-top: 35px;
    }
    .check-items {
      width: 50%;
      margin-right: 30px;
      h5 {
        font-family: "Open Sans", sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 25px;
        text-align: center;
        color: #ffffff;
        margin-bottom: 20px;
        text-align: start;
      }
    }
    .check-it {
      display: flex;
      align-items: center;
      margin-bottom: 15px;
    }
    .check-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-left: 10px;
      width: 100%;

      h6 {
        font-family: "Open Sans", sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 19px;
        color: #ffffff;
      }
    }
    .check-items-adds {
      width: 50%;
      h5 {
        font-family: "Open Sans", sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 25px;
        text-align: center;
        color: #ffffff;
        margin-bottom: 20px;
        text-align: start;
      }
    }
  }
  .your-order {
    width: 100%;
    .main-title {
      font-family: Open Sans sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 33px;
      color: #ffffff;
      margin-bottom: 6px;
      margin-left: 13px;
    }

    .your-food-items {
      border-left: 1px solid #ffffff;
    }

    .def-food {
      font-family: Open Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 19px;
      color: #ffffff;
      margin-bottom: 12px;
      margin-left: 25px;
    }

    .add-delete {
      display: flex;
      align-items: center;
    }

    h4 {
      font-family: Open Sans sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 33px;
      color: #ffffff;
      margin-bottom: 10px;
    }
    .wrapper-r {
      margin-left: 25px;
    }
    label {
      display: flex;
      align-items: center;
    }
    .fork {
      margin-left: 14px;
      h6 {
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 19px;
        color: #ffffff;
      }
    }
    .basket-btn {
      display: flex;
      justify-content: flex-end;
      margin-top: 20px;

      button {
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 10px;
        line-height: 14px;
        text-transform: uppercase;
        color: #252525;
        padding: 9px 50px;
        background: #34c759;
        border-radius: 20px;
      }
    }
  }

  .rf-wrap {
    padding: 50px 0;
  }

  .totally {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
  .totally-price {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border-top: 1px solid #ffffff;
    h6 {
      font-family: Open Sans;
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 25px;
      text-align: center;
      color: #ffffff;
      margin-left: 2px;
    }
    h5 {
      font-family: Open Sans;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 25px;
      text-align: center;
      color: #ffffff;
    }
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

  .recomend-foods {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 25px;
    row-gap: 25px;
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
