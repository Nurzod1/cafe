<template>
  <div class="lunch">
    <div class="lunch-title">
      <h3>Бизнес-ланч</h3>
      <p>заказ до 15:00</p>
    </div>
    <div class="wrapper">
      <div class="wrapper-menu">
        <div class="first-dish bb">
          <h5>На первое:</h5>
          <p>Cуп-лапша, борщ, солянка, сырный крем-суп с грибами</p>
        </div>
        <div class="first-dish bb">
          <h5>На второе:</h5>
          <p>
            Говядинная отбивная, паста с баклажанами, стйек из семги, курица
            по-тайски, запечёный картофель, ризотто
          </p>
        </div>
        <div class="first-dish bb">
          <h5>Салаты:</h5>
          <p>Фунцоза, цезарь, весенний, ананасовый</p>
        </div>
        <div class="first-dish">
          <h5>Напитки:</h5>
          <p>Кофе, чай фруктовый, морс клюквенный, компот яблочно-вишневый</p>
        </div>
      </div>
      <div class="wrapper-photo">
        <img src="@/assets/img/b-lunch.png" alt="" />
      </div>
    </div>
    <div class="order-btn">
      <button>заказать</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.lunch {
  transform: translateY(-20%);
  background: linear-gradient(180deg, #1a1a1a 0%, #2c2c2c 100%);
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  padding: 40px 150px;
  &-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 40px;
    h3 {
      font-family: Mont;
      font-weight: 600;
      font-size: 36px;
      line-height: 44px;
      text-transform: uppercase;
      color: #34c759;
      margin-bottom: 16px;
    }
    p {
      font-weight: 500;
      font-size: 18px;
      line-height: 24px;
      color: #d9d9d9;
    }
  }
  .wrapper {
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    &-menu {
      margin-right: 32px;
      .first-dish {
        &.bb {
          border-bottom: 1px solid #34c759;
        }
        h5 {
          font-family: Montserrat;
          font-weight: 600;
          font-size: 14px;
          line-height: 17px;
          color: #ffffff;
          margin-top: 12px;
        }
        p {
          font-family: Alegreya;
          font-style: normal;
          font-weight: normal;
          font-size: 13px;
          line-height: 18px;
          color: #ffffff;
        }
      }
    }
  }
  .order-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    button {
      border: 1px solid #34c759;
      border-radius: 20px;
      padding: 9px 47px;
      color: #ffffff;

      &:hover {
        background: #34c759;
        color: #ffffff;
      }
    }
  }
}
@media screen and (max-width: 991.98px) {
  .lunch {
    padding: 40px 60px;
  }
}
@media screen and (max-width: 767.98px) {
  .lunch {
    padding: 25px 30px;
    &-title {
      h3 {
        font-size: 30px;
      }
    }
  }
}
@media screen and (max-width: 575.98px) {
  .lunch {
    .wrapper {
      display: flex;
      flex-direction: column-reverse;
      .wrapper-photo {
        width: 100%;
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>
