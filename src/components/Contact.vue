<template>
  <div class="contact">
    <div class="contact-title">
      <h3>Контакты</h3>
    </div>
    <v-container>
      <div class="wrapper">
        <div class="contact-links">
          <div class="mail email">
            <svg
              width="18"
              height="12"
              viewBox="0 0 18 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.574002 1.286L8.074 5.315C8.326 5.45 8.652 5.514 8.98 5.514C9.308 5.514 9.634 5.45 9.886 5.315L17.386 1.286C17.875 1.023 18.337 0 17.44 0H0.521002C-0.375998 0 0.0860016 1.023 0.574002 1.286ZM17.613 3.489L9.886 7.516C9.546 7.694 9.308 7.715 8.98 7.715C8.652 7.715 8.414 7.694 8.074 7.516C7.734 7.338 0.941002 3.777 0.386002 3.488C-0.00399834 3.284 1.61606e-06 3.523 1.61606e-06 3.707V11C1.61606e-06 11.42 0.566002 12 1 12H17C17.434 12 18 11.42 18 11V3.708C18 3.524 18.004 3.285 17.613 3.489Z"
                fill="#929292"
              />
            </svg>
            <h6>hello@mymeal.ru</h6>
          </div>
          <div class="mail meal">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_96:24"
                style="mask-type: alpha"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="18"
                height="18"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18 0L0 7.53V8.51L6.84 11.16L9.48 18H10.46L18 0V0Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_96:24)">
                <rect
                  x="-4"
                  y="-4"
                  width="26"
                  height="26"
                  fill="white"
                  fill-opacity="0.5"
                />
              </g>
            </svg>
            <h6>@mymeal</h6>
          </div>
          <div class="mail">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_96:18"
                style="mask-type: alpha"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="18"
                height="18"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.62 7.79C5.06 10.62 7.38 12.93 10.21 14.38L12.41 12.18C12.68 11.91 13.08 11.82 13.43 11.94C14.55 12.31 15.76 12.51 17 12.51C17.55 12.51 18 12.96 18 13.51V17C18 17.55 17.55 18 17 18C7.61 18 0 10.39 0 1C0 0.45 0.45 0 1 0H4.5C5.05 0 5.5 0.45 5.5 1C5.5 2.25 5.7 3.45 6.07 4.57C6.18 4.92 6.1 5.31 5.82 5.59L3.62 7.79Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_96:18)">
                <rect
                  x="-4"
                  y="-4"
                  width="26"
                  height="26"
                  fill="white"
                  fill-opacity="0.5"
                />
              </g>
            </svg>
            <h6>+7 (938)833 24 15</h6>
          </div>
        </div>
        <form class="order">
          <input class="name first" type="text" placeholder="Ваше имя" />
          <input class="name" type="tel" placeholder="Номер телефона" />
          <textarea
            class="text"
            cols="30"
            rows="5"
            placeholder="Сообщение"
          ></textarea>
          <div class="btn-order">
            <button>заказать</button>
          </div>
        </form>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style lang="scss" scoped>
.contact {
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

  &-links {
    .mail {
      display: flex;
      align-items: center;

      &.email {
        margin-bottom: 12px;
      }
      &.meal {
        margin-bottom: 12px;
      }
      svg {
        margin-right: 10px;
      }
    }
    h6 {
      font-family: Montserrat;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 17px;
      color: #ffffff;
    }
  }
  .wrapper {
    display: flex;
    justify-content: space-between;
  }
  .order {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 25px;
    width: 70%;
    .name {
      grid-column: span 2;
      border: 1px solid #34c759;
      border-radius: 20px;
      padding: 10px;
      outline: none;
      color: #34c759;
    }
    .text {
      grid-column: span 4;
      border: 1px solid #34c759;
      border-radius: 20px;
      outline: none;
      padding: 11px 0 0 21px;
      color: #34c759;
    }
    .btn-order {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      grid-column: span 1/ 5;
      button {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
        border: 1px solid #34c759;
        border-radius: 20px;
        padding: 10px 47px;
        color: #34c759;

        &:hover {
          background: #34c759;
          color: #ffffff;
        }
      }
    }
  }
}
@media screen and (max-width: 575.98px) {
  .contact {
    &-title {
      margin-bottom: 45px;
      h3 {
        font-size: 32px;
      }
    }
    &-links {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 35px;
    }
    .wrapper {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }
    .order {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 25px;
      width: 90%;

      .name {
        grid-column: span 4;
      }
      .text {
        grid-column: span 4;
      }
      .btn-order {
        display: flex;
        justify-content: center;
      }
    }
  }
}
</style>
