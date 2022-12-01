<template>
  <div class="chefs">
    <div class="chefs-title">
      <h3>Лучшие повара этого месяца</h3>
    </div>
    <v-container>
      <div class="wrapper">
        <div class="chef-info">
          <div class="img">
            <img src="@/assets/img/chef-1.jpg" alt="" />
          </div>
          <div class="title">
            <h5>Григорий Ковалёв</h5>
            <p>Шеф холодного цеха</p>
          </div>
        </div>
        <div class="chef-info">
          <div class="img">
            <img src="@/assets/img/chef-2.jpg" alt="" />
          </div>
          <div class="title">
            <h5>Наталья Орехова</h5>
            <p>Су-шеф горячего цеха</p>
          </div>
        </div>
        <div class="chef-info">
          <div class="img">
            <img src="@/assets/img/chef-3.jpg" alt="" />
          </div>
          <div class="title">
            <h5>Олег Гилберт</h5>
            <p>Шеф-кондитер</p>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.chefs {
  background: #191919;
  padding: 50px 0;
  &-title {
    margin-bottom: 60px;
    h3 {
      font-family: Montserrat;
      font-style: normal;
      font-weight: 500;
      font-size: 36px;
      line-height: 44px;
      text-align: center;
      color: #d9d9d9;
    }
  }
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-around;
    .chef-info {
      display: flex;
    }
    .img {
      width: 65px;
      height: 65px;
      margin-right: 25px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
      }
    }
    .title {
      display: flex;
      flex-direction: column;
      justify-content: center;
      h5 {
        font-family: Alegreya;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: -0.225px;
        color: #ffffff;
      }
      p {
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: -0.15px;
        color: rgba(255, 255, 255, 0.5);
      }
    }
  }
}
@media screen and (max-width: 575.98px) {
  .chefs {
    &-title {
      margin-bottom: 45px;
      h3 {
        font-size: 32px;
      }
    }
    .wrapper {
      .chef-info {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .img {
        margin: 0;
      }
      .title {
        text-align: center;
        h5 {
          font-size: 13px;
        }
      }
    }
  }
}
</style>
