<template>
  <div class="desert">
    <div class="desert-title">
      <h3>Популярные десерты</h3>
    </div>
    <v-container>
      <div class="wrapper">
        <DesertList
          v-for="(d, idx) in myJson"
          :key="idx"
          :img-url="d.imgUrl"
          :title="d.title"
          :subtitle="d.subtitle"
          :price="d.price"
        />
      </div>
    </v-container>
  </div>
</template>

<script>
import DesertList from "@/components/desert/DesertList";
import json from "@/database/db.js";
export default {
  name: "DesertCard",
  components: {
    DesertList,
  },
  data() {
    return {
      myJson: json,
    };
  },
};
</script>

<style lang="scss" scoped>
.desert {
  background: #191919;
  padding: 50px 0;

  .desert-title {
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
    column-gap: 25px;
    row-gap: 25px;
  }
}

@media screen and (max-width: 767.98px) {
  .desert {
    .wrapper {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 25px;
      row-gap: 25px;
    }
  }
}

@media screen and (max-width: 575.98px) {
  .desert {
    .desert-title {
      margin-bottom: 45px;
      h3 {
        font-size: 32px;
      }
    }
    .wrapper {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 25px;
      row-gap: 25px;
    }
  }
}
</style>
