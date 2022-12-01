<template>
  <div class="block">
    <Sidebar :active="isActive" />
    <Navbar @isOpen="isActive = !isActive" />
    <div class="profile-icons">
      <div class="wrapper-icons">
        <svg
          width="28"
          height="30"
          viewBox="0 0 28 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.9015 23.7643C26.1991 22.1296 25.1799 20.6448 23.9005 19.3926C22.625 18.1367 21.114 17.1355 19.451 16.444C19.4361 16.4367 19.4212 16.433 19.4063 16.4257C21.726 14.7795 23.234 12.098 23.234 9.07256C23.234 4.0607 19.101 0 14 0C8.89897 0 4.76602 4.0607 4.76602 9.07256C4.76602 12.098 6.27399 14.7795 8.59365 16.4294C8.57876 16.4367 8.56387 16.4404 8.54897 16.4477C6.8809 17.1391 5.3841 18.1305 4.09953 19.3963C2.82133 20.6495 1.80223 22.134 1.09849 23.7679C0.407141 25.3675 0.0342809 27.0825 9.31068e-05 28.82C-0.000900682 28.8591 0.00606959 28.8979 0.0205934 28.9343C0.0351172 28.9706 0.0569006 29.0038 0.08466 29.0317C0.112419 29.0597 0.145593 29.0819 0.182227 29.097C0.21886 29.1122 0.258212 29.12 0.297963 29.12H2.53199C2.69582 29.12 2.82614 28.992 2.82986 28.8347C2.90433 26.0105 4.05858 23.3655 6.09899 21.3608C8.21014 19.2865 11.0139 18.1451 14 18.1451C16.9862 18.1451 19.7899 19.2865 21.901 21.3608C23.9414 23.3655 25.0957 26.0105 25.1701 28.8347C25.1739 28.9956 25.3042 29.12 25.468 29.12H27.702C27.7418 29.12 27.7811 29.1122 27.8178 29.097C27.8544 29.0819 27.8876 29.0597 27.9153 29.0317C27.9431 29.0038 27.9649 28.9706 27.9794 28.9343C27.9939 28.8979 28.0009 28.8591 27.9999 28.82C27.9627 27.0714 27.5941 25.3703 26.9015 23.7643ZM14 15.3648C12.291 15.3648 10.6825 14.71 9.47237 13.521C8.26227 12.3321 7.59579 10.7517 7.59579 9.07256C7.59579 7.39341 8.26227 5.81303 9.47237 4.62408C10.6825 3.43514 12.291 2.7803 14 2.7803C15.709 2.7803 17.3175 3.43514 18.5276 4.62408C19.7377 5.81303 20.4042 7.39341 20.4042 9.07256C20.4042 10.7517 19.7377 12.3321 18.5276 13.521C17.3175 14.71 15.709 15.3648 14 15.3648Z"
            fill="#34C759"
          />
        </svg>
        <svg
          width="30"
          height="23"
          viewBox="0 0 30 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29.7647 2.74329C29.6735 2.63068 29.5586 2.53969 29.4281 2.47689C29.2977 2.41408 29.155 2.38101 29.0103 2.38005H8.61148L9.24833 4.34354H27.7268L25.1108 16.1245H10.4143L5.93672 1.91863C5.88828 1.76789 5.80418 1.63113 5.69158 1.52001C5.57898 1.40889 5.44123 1.32672 5.29007 1.28049L1.27302 0.0434945C1.1495 0.00546174 1.01971 -0.0078207 0.891073 0.00440544C0.762432 0.0166316 0.637453 0.0541269 0.523273 0.114751C0.292677 0.237186 0.120064 0.446395 0.0434084 0.696355C-0.0332476 0.946315 -0.00766759 1.21655 0.114521 1.44761C0.23671 1.67867 0.445498 1.85164 0.694955 1.92845L4.21232 3.00837L8.70946 17.2437L7.10264 18.5592L6.97527 18.6868C6.57781 19.1458 6.35253 19.7293 6.33822 20.3368C6.32392 20.9443 6.52148 21.5377 6.89689 22.015C7.16393 22.3404 7.50327 22.5986 7.88777 22.7691C8.27226 22.9396 8.69123 23.0175 9.11117 22.9967H25.4635C25.7234 22.9967 25.9726 22.8933 26.1563 22.7092C26.34 22.525 26.4433 22.2753 26.4433 22.015C26.4433 21.7546 26.34 21.5049 26.1563 21.3208C25.9726 21.1366 25.7234 21.0332 25.4635 21.0332H8.9544C8.84158 21.0293 8.73166 20.9964 8.63525 20.9375C8.53885 20.8787 8.45922 20.7959 8.40406 20.6972C8.3489 20.5985 8.32008 20.4872 8.32037 20.3741C8.32066 20.261 8.35006 20.1499 8.40573 20.0515L10.767 18.088H25.8946C26.1211 18.0935 26.3425 18.0202 26.5211 17.8806C26.6998 17.741 26.8246 17.5437 26.8744 17.3222L29.9802 3.57778C30.01 3.43142 30.0061 3.28017 29.9687 3.13556C29.9314 2.99095 29.8616 2.85679 29.7647 2.74329V2.74329Z"
            fill="#34C759"
          />
        </svg>
        <svg
          width="28"
          height="25"
          viewBox="0 0 28 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27.3226 5.04948C26.8881 4.06135 26.2617 3.16593 25.4784 2.41332C24.6945 1.65847 23.7702 1.0586 22.7558 0.646327C21.704 0.217133 20.5759 -0.0025527 19.4369 2.23783e-05C17.8391 2.23783e-05 16.2801 0.429831 14.9253 1.24169C14.6012 1.4359 14.2933 1.64921 14.0016 1.88163C13.7099 1.64921 13.402 1.4359 13.0779 1.24169C11.7231 0.429831 10.1641 2.23783e-05 8.56626 2.23783e-05C7.41566 2.23783e-05 6.30072 0.216519 5.24736 0.646327C4.22965 1.06022 3.31242 1.65558 2.52483 2.41332C1.74047 3.16508 1.1139 4.06072 0.680633 5.04948C0.230119 6.07784 0 7.16987 0 8.29374C0 9.35393 0.220396 10.4587 0.657946 11.5826C1.02419 12.5218 1.54925 13.496 2.22016 14.4798C3.28325 16.0367 4.74499 17.6604 6.56001 19.3064C9.56776 22.0349 12.5463 23.9197 12.6727 23.9961L13.4409 24.48C13.7812 24.6933 14.2188 24.6933 14.5591 24.48L15.3272 23.9961C15.4536 23.9165 18.429 22.0349 21.44 19.3064C23.255 17.6604 24.7167 16.0367 25.7798 14.4798C26.4507 13.496 26.979 12.5218 27.342 11.5826C27.7796 10.4587 28 9.35393 28 8.29374C28.0032 7.16987 27.7731 6.07784 27.3226 5.04948ZM14.0016 21.9617C14.0016 21.9617 2.46324 14.6995 2.46324 8.29374C2.46324 5.04948 5.1955 2.41969 8.56626 2.41969C10.9355 2.41969 12.9904 3.71866 14.0016 5.61619C15.0128 3.71866 17.0677 2.41969 19.4369 2.41969C22.8077 2.41969 25.54 5.04948 25.54 8.29374C25.54 14.6995 14.0016 21.9617 14.0016 21.9617Z"
            fill="#34C759"
          />
        </svg>
      </div>
    </div>
    <v-container>
      <div class="header">
        <div class="wrapper">
          <div class="wrapper-intro">
            <h1>Доставка свежей и горячей еды в течение 40 минут</h1>
          </div>
          <div class="wrapper-time">
            <div class="delivery-time">
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_19:193"
                  style="mask-type: alpha"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="21"
                  height="20"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.5 0C4.97746 0 0.459015 4.5 0.459015 10C0.459015 15.5 4.97746 20 10.5 20C16.0225 20 20.541 15.5 20.541 10C20.541 4.5 16.0225 0 10.5 0ZM14.7172 14.2L9.49591 11V5H11.0021V10.2L15.5205 12.9L14.7172 14.2Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_19:193)">
                  <rect
                    x="-2.55328"
                    y="-3"
                    width="26.1066"
                    height="26"
                    fill="#34C759"
                  />
                </g>
              </svg>
              <h5>Доставка с 10:00 до 19:00</h5>
              <p>Время работы</p>
            </div>
            <div class="delivery-time">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_19:186"
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
                    d="M18 0L0 7.53V8.51L6.84 11.16L9.48 18H10.46L18 0Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_19:186)">
                  <rect x="-4" y="-4" width="26" height="26" fill="#34C759" />
                </g>
              </svg>

              <h5>ул. Горького, 126</h5>
              <p>Ближайшее кафе</p>
            </div>
            <div class="delivery-time">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_19:179"
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
                <g mask="url(#mask0_19:179)">
                  <rect x="-4" y="-4" width="26" height="26" fill="#34C759" />
                </g>
              </svg>
              <h5>8-800-100-20-20</h5>
              <p>заказ по телефону</p>
            </div>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export default {
  nmae: "Header",
  components: {
    Sidebar,
    Navbar,
  },
  data() {
    return {
      isActive: false,
    };
  },
};
</script>

<style lang="scss">
.block {
  position: relative;
  background-image: url(../assets/img/backg.png);
  background-size: cover;
  height: 100vh;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: linear-gradient(
      355.26deg,
      rgba(19, 16, 15, 0.74) 43.78%,
      rgba(31, 26, 25, 0) 95.28%
    );
    z-index: 1;
  }
}
.profile-icons {
  position: absolute;
  right: 0;
  bottom: 50%;
  background: #737373;
  z-index: 2;
  padding: 10px;
  .wrapper-icons {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  svg {
    margin-bottom: 10px;
    cursor: pointer;
  }
}
.header {
  position: relative;
  z-index: 2;

  .wrapper {
    &-intro {
      margin: 45px 0 30px 0;
      z-index: 1;
      h1 {
        font-weight: 500;
        font-size: 72px;
        line-height: 72px;
        text-align: center;
        color: #ffffff;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.45);
        font-family: Alegreya;
      }
    }
    &-time {
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin-bottom: 75px;
      .delivery-time {
        margin-right: 70px;
        display: flex;
        flex-direction: column;
        align-items: center;
        svg {
          margin-bottom: 15px;
        }
        h5 {
          font-family: Alegreya;
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 30px;
          text-align: center;
          color: #ffffff;
        }
        p {
          color: rgba(255, 255, 255, 0.75);
          mix-blend-mode: normal;
          font-family: Montserrat;
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 17px;
          display: flex;
          align-items: center;
          text-align: center;
          text-transform: uppercase;
        }
      }
    }
  }
}

@media screen and (max-width: 991.98px) {
  .block {
    .profile-icons {
      display: none;
    }
  }
}

@media screen and (max-width: 767.98px) {
  .block {
    .profile-icons {
      display: none;
    }
  }
  .header {
    .wrapper {
      .wrapper-intro {
        h1 {
          font-size: 52px;
        }
      }
      .wrapper-time {
        display: none;
      }
    }
  }
}

@media screen and (max-width: 575.98px) {
  .header {
    .wrapper {
      .wrapper-intro {
        h1 {
          font-size: 48px;
        }
      }
      .wrapper-time {
        display: none;
      }
    }
  }
}
</style>
