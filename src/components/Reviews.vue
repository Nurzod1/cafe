<template>
  <div class="review">
    <div class="review-title">
      <h3>Отзывы</h3>
    </div>
    <v-container>
      <div class="wrapper">
        <div class="review-items first">
          <div class="text">
            <h5>@DennisFerguson</h5>
            <p>24 Июн 2019 16:20</p>
          </div>
          <div class="rated">
            <v-rating
              v-model="rating"
              background-color="green lighten-3"
              color="green"
              large
            ></v-rating>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Distinctio non qui eveniet velit, fugiat, modi obcaecati fuga
              accusamus nemo asperiores corrupti iusto itaque est amet. Fugit
              sequi unde aperiam quae nostrum. Mollitia repellat accusantium
              quidem odio vel dolor architecto cum dolorem minima maxime iusto
              eveniet, tempore a illum! Temporibus ad maiores culpa suscipit
              magni nostrum saepe dolorum deserunt at quo possimus odio quasi
              facilis aspernatur nihil facere vel non, odit veniam cumque
              molestiae sapiente consequuntur natus. Blanditiis excepturi amet
              qui aperiam, fuga voluptatem nihil provident dolores cupiditate
              praesentium explicabo, veritatis sequi necessitatibus numquam
              fugiat quod.
            </p>
          </div>
        </div>
        <div class="review-items sec">
          <div class="text">
            <h5>@DennisFerguson</h5>
            <p>24 Июн 2019 16:20</p>
          </div>
          <div class="rated">
            <v-rating
              v-model="rating"
              background-color="green lighten-3"
              color="green"
              large
            ></v-rating>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Distinctio non qui eveniet velit, fugiat, modi obcaecati fuga
              accusamus nemo asperiores corrupti iusto itaque est amet. Fugit
              sequi unde aperiam quae nostrum. Mollitia repellat accusantium
              quidem odio vel dolor architecto cum dolorem minima maxime iusto
              eveniet, tempore a illum! Temporibus ad maiores culpa suscipit
              magni nostrum saepe dolorum deserunt at quo possimus odio quasi
              facilis aspernatur nihil facere vel non, odit veniam cumque
              molestiae sapiente consequuntur natus. Blanditiis excepturi amet
              qui aperiam, fuga voluptatem nihil provident dolores cupiditate
              praesentium explicabo, veritatis sequi necessitatibus numquam
              fugiat quod.
            </p>
          </div>
        </div>
        <div class="review-items third">
          <div class="text">
            <h5>@DennisFerguson</h5>
            <p>24 Июн 2019 16:20</p>
          </div>
          <div class="rated">
            <v-rating
              v-model="rating"
              background-color="green lighten-3"
              color="green"
              large
            ></v-rating>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Distinctio non qui eveniet velit, fugiat, modi obcaecati fuga
              accusamus nemo asperiores corrupti iusto itaque est amet. Fugit
              sequi unde aperiam quae nostrum. Mollitia repellat accusantium
              quidem odio vel dolor architecto cum dolorem minima maxime iusto
              eveniet, tempore a illum! Temporibus ad maiores culpa suscipit
              magni nostrum saepe dolorum deserunt at quo possimus odio quasi
              facilis aspernatur nihil facere vel non, odit veniam cumque
              molestiae sapiente consequuntur natus. Blanditiis excepturi amet
              qui aperiam, fuga voluptatem nihil provident dolores cupiditate
              praesentium explicabo, veritatis sequi necessitatibus numquam
              fugiat quod.
            </p>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Reviews",
  data: () => ({
    rating: 4,
  }),
};
</script>

<style lang="scss" scoped>
.review {
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
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 15px;
    .review-items {
      background: #252525;
      padding: 20px 20px 35px 20px;
      .text {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 12px;

        h5 {
          color: rgba(255, 255, 255, 0.75);
          font-family: Alegreya;
          font-style: normal;
          font-weight: bold;
          font-size: 14px;
          line-height: 19px;
        }

        p {
          color: #737373;
          font-family: Alegreya;
          font-style: normal;
          font-weight: normal;
          font-size: 12px;
          line-height: 16px;
          margin: 0;
        }
      }
      .rated {
        p {
          height: 240px;
          color: rgba(255, 255, 255, 0.75);
          font-family: Montserrat;
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 17px;
          margin: 0;
          margin-top: 12px;
          overflow-y: scroll;
        }
      }
    }
  }
}
@media screen and (max-width: 991.98px) {
  .review {
    .wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 1;
      .review-items {
        width: 100%;
        margin-bottom: 20px;

        .rated {
          p {
            height: 100px;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 575.98px) {
  .review {
    &-title {
      margin-bottom: 45px;

      h3 {
        font-size: 32px;
      }
    }
    .wrapper {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 15px;
      flex: 1;

      .review-items {
        width: 100%;

        .rated {
          p {
            height: 100px;
          }
        }
      }
    }
  }
}
</style>
