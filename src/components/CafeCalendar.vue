<template>
  <div class="cafe">
    <v-container>
      <div class="cafe-title">
        <h3>Календарь мероприятий</h3>
      </div>
      <div class="wrapper">
        <div class="wrapper-vc">
          <vc-date-picker
            v-model="customer.birthday"
            :model-config="modelConfig"
            is-required
            is-dark
            color="green"
            is-expanded
          />
        </div>
        <div class="wrapper-vc-sec">
          <vc-date-picker v-model="date" color="green" isDark>
            <template v-slot="{ inputValue, togglePopover }">
              <div class="flex items-center wrapper-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  class="w-4 h-4 fill-current icon-vc"
                >
                  <path
                    d="M1 4c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm2 2v12h14V6H3zm2-6h2v2H5V0zm8 0h2v2h-2V0zM5 9h2v2H5V9zm0 4h2v2H5v-2zm4-4h2v2H9V9zm0 4h2v2H9v-2zm4-4h2v2h-2V9zm0 4h2v2h-2v-2z"
                  ></path>
                </svg>

                <input
                  @focus="togglePopover"
                  :value="inputValue"
                  class="
                    bg-white
                    text-gray-700
                    w-full
                    appearance-none
                    border
                    rounded-r
                    focus:outline-none focus:border-blue-500
                    input-vc
                  "
                />
              </div>
            </template>
          </vc-date-picker>
        </div>
        <div class="event-date">
          <div class="event-info">
            <p class="time">10:00</p>
            <h5>Детский мастер-класс</h5>
            <h6>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut
            </h6>
            <div class="views-chat">
              <div class="views">
                <svg
                  width="19"
                  height="13"
                  viewBox="0 0 19 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.01639 0C4.91803 0 1.41803 2.59167 0 6.25C1.41803 9.90833 4.91803 12.5 9.01639 12.5C13.1148 12.5 16.6148 9.90833 18.0328 6.25C16.6148 2.59167 13.1148 0 9.01639 0ZM9.01639 10.4167C6.7541 10.4167 4.91803 8.55 4.91803 6.25C4.91803 3.95 6.7541 2.08333 9.01639 2.08333C11.2787 2.08333 13.1148 3.95 13.1148 6.25C13.1148 8.55 11.2787 10.4167 9.01639 10.4167ZM9.01639 3.75C7.65574 3.75 6.55738 4.86667 6.55738 6.25C6.55738 7.63333 7.65574 8.75 9.01639 8.75C10.377 8.75 11.4754 7.63333 11.4754 6.25C11.4754 4.86667 10.377 3.75 9.01639 3.75Z"
                    fill="white"
                  />
                </svg>
                <p>350</p>
              </div>
              <div class="chats">
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.7953 2.93333H13.3138V9.53333H3.68415V11C3.68415 11.4033 4.01749 11.7333 4.4249 11.7333H12.573L15.536 14.6667V3.66667C15.536 3.26333 15.2027 2.93333 14.7953 2.93333ZM11.8323 7.33333V0.733333C11.8323 0.33 11.499 0 11.0916 0H1.46193C1.05452 0 0.721191 0.33 0.721191 0.733333V11L3.68415 8.06667H11.0916C11.499 8.06667 11.8323 7.73667 11.8323 7.33333Z"
                    fill="white"
                  />
                </svg>
                <p>15</p>
              </div>
            </div>
          </div>
          <div class="event-img-date">
            <div class="img-wrapper">
              <img src="@/assets/img/calendar-img.png" alt="" />
            </div>
            <div class="infos">
              <p class="time-2">10:00</p>
              <h5>Детский мастер-класс</h5>
              <h6>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut
              </h6>
              <div class="views-chat">
                <div class="views">
                  <svg
                    width="19"
                    height="13"
                    viewBox="0 0 19 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.01639 0C4.91803 0 1.41803 2.59167 0 6.25C1.41803 9.90833 4.91803 12.5 9.01639 12.5C13.1148 12.5 16.6148 9.90833 18.0328 6.25C16.6148 2.59167 13.1148 0 9.01639 0ZM9.01639 10.4167C6.7541 10.4167 4.91803 8.55 4.91803 6.25C4.91803 3.95 6.7541 2.08333 9.01639 2.08333C11.2787 2.08333 13.1148 3.95 13.1148 6.25C13.1148 8.55 11.2787 10.4167 9.01639 10.4167ZM9.01639 3.75C7.65574 3.75 6.55738 4.86667 6.55738 6.25C6.55738 7.63333 7.65574 8.75 9.01639 8.75C10.377 8.75 11.4754 7.63333 11.4754 6.25C11.4754 4.86667 10.377 3.75 9.01639 3.75Z"
                      fill="white"
                    />
                  </svg>
                  <p>350</p>
                </div>
                <div class="chats">
                  <svg
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.7953 2.93333H13.3138V9.53333H3.68415V11C3.68415 11.4033 4.01749 11.7333 4.4249 11.7333H12.573L15.536 14.6667V3.66667C15.536 3.26333 15.2027 2.93333 14.7953 2.93333ZM11.8323 7.33333V0.733333C11.8323 0.33 11.499 0 11.0916 0H1.46193C1.05452 0 0.721191 0.33 0.721191 0.733333V11L3.68415 8.06667H11.0916C11.499 8.06667 11.8323 7.73667 11.8323 7.33333Z"
                      fill="white"
                    />
                  </svg>
                  <p>15</p>
                </div>
              </div>
            </div>
          </div>
          <div class="activities">
            <a href="#">Все ближайшие события</a>
            <svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 1.29977V0.122124C0 0.0200516 0.120313 -0.0363169 0.201562 0.0261454L7.24529 5.39028C7.30514 5.43566 7.35356 5.49377 7.38687 5.56017C7.42018 5.62657 7.4375 5.69952 7.4375 5.77344C7.4375 5.84736 7.42018 5.9203 7.38687 5.9867C7.35356 6.0531 7.30514 6.11121 7.24529 6.15659L0.201562 11.5207C0.11875 11.5832 0 11.5268 0 11.4248V10.2471C0 10.1725 0.0359373 10.1009 0.0953121 10.0552L5.7203 5.7742L0.0953121 1.49172C0.0359373 1.44602 0 1.37442 0 1.29977Z"
                fill="#34C759"
              />
            </svg>
            <svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 1.29977V0.122124C0 0.0200516 0.120313 -0.0363169 0.201562 0.0261454L7.24529 5.39028C7.30514 5.43566 7.35356 5.49377 7.38687 5.56017C7.42018 5.62657 7.4375 5.69952 7.4375 5.77344C7.4375 5.84736 7.42018 5.9203 7.38687 5.9867C7.35356 6.0531 7.30514 6.11121 7.24529 6.15659L0.201562 11.5207C0.11875 11.5832 0 11.5268 0 11.4248V10.2471C0 10.1725 0.0359373 10.1009 0.0953121 10.0552L5.7203 5.7742L0.0953121 1.49172C0.0359373 1.44602 0 1.37442 0 1.29977Z"
                fill="#34C759"
              />
            </svg>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "CafeCalendar",
  data() {
    return {
      customer: {
        name: "Nathan Reyes",
        birthday: "",
      },
      modelConfig: {
        type: "string",
        mask: "YYYY-MM-DD", // Uses 'iso' if missing
      },
      date: new Date(),
    };
  },
};
</script>

<style lang="scss" scoped>
.cafe {
  background: #191919;
  padding: 50px 0;
  .cafe-title {
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

    .wrapper-vc {
      width: 380px;
    }
    .wrapper-vc-sec {
      display: none;
      width: 200px;
      align-self: end;
      margin-bottom: 25px;
      .icon-vc {
        width: 27px;
        display: flex;
        align-items: center;
        fill: #34c759;
        position: absolute;
      }
      .wrapper-btn {
        display: flex;
        align-items: center;
        position: relative;

        .input-vc {
          text-align: center;
          border: none;
          outline: 1px solid #34c759;
          padding: 5px 5px 5px 35px;
          width: 100%;
        }
      }
    }
    .event-date {
      display: flex;
      flex-direction: column;
      margin-left: 30px;
      flex: 1;
      .event-info {
        display: flex;
        flex-direction: column;
        background: #252525;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
        border-radius: 6px;
        padding: 20px 42px 20px 20px;
        margin-bottom: 40px;
        width: 100%;
        .time {
          font-family: Montserrat;
          font-style: normal;
          font-weight: 500;
          font-size: 12px;
          line-height: 15px;
          color: #b3b3b3;
        }
        h5 {
          font-family: Alegreya;
          font-style: normal;
          font-weight: bold;
          font-size: 18px;
          line-height: 24px;
          color: #ffffff;
          margin-top: 12px;
        }
        h6 {
          font-family: Montserrat;
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 17px;
          color: #ffffff;
          margin: 8px 0 20px 0;
        }
        .views-chat {
          display: flex;
          justify-content: flex-end;
          .views {
            display: flex;

            svg {
              margin-right: 8px;
            }

            p {
              margin: 0;
              margin-right: 15px;
              font-family: Montserrat;
              font-style: normal;
              font-weight: bold;
              font-size: 10px;
              line-height: 12px;
              color: #d8d8d8;
            }
          }

          .chats {
            display: flex;

            svg {
              margin-right: 8px;
            }

            p {
              margin: 0;
              font-family: Montserrat;
              font-style: normal;
              font-weight: bold;
              font-size: 10px;
              line-height: 12px;
              color: #d8d8d8;
            }
          }
        }
      }
      .event-img-date {
        border-radius: 6px;
        width: 100%;
        height: 150px;
        position: relative;
        margin-bottom: 20px;

        .img-wrapper {
          height: 100%;
        }
        img {
          width: 100%;
          height: 100%;
          border-radius: 6px;
        }

        .infos {
          width: 100%;
          display: flex;
          flex-direction: column;
          padding: 20px;
          bottom: 0;
          right: 0;
          left: 0;
          position: absolute;

          .time-2 {
            font-family: Montserrat;
            font-style: normal;
            font-weight: 500;
            font-size: 12px;
            line-height: 15px;
            color: #b3b3b3;
          }
          h5 {
            font-family: Alegreya;
            font-style: normal;
            font-weight: bold;
            font-size: 18px;
            line-height: 24px;
            color: #ffffff;
            margin: 12px 0 8px 0;
          }
          h6 {
            font-family: Montserrat;
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 17px;
            color: #ffffff;
            margin-bottom: 20px;
          }
          .views-chat {
            display: flex;
            justify-content: flex-end;

            .views {
              display: flex;
              svg {
                margin-right: 8px;
              }
              p {
                color: #d8d8d8;
                font-family: Montserrat;
                font-style: normal;
                font-weight: bold;
                font-size: 10px;
                line-height: 12px;
                margin: 0;
                margin-right: 10px;
              }
            }
            .chats {
              display: flex;
              svg {
                margin-right: 8px;
              }
              p {
                margin: 0;
                font-family: Montserrat;
                font-style: normal;
                font-weight: bold;
                font-size: 10px;
                line-height: 12px;
                color: #d8d8d8;
              }
            }
          }
        }
      }
      .activities {
        display: flex;
        align-items: center;
        justify-content: flex-end;

        a {
          color: #34c759;
          font-family: Montserrat;
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          line-height: 22px;
          margin: 0;
          margin-right: 12px;
          text-decoration: none;
        }
      }
    }
  }
}
@media screen and (max-width: 1199.98px) {
  .cafe {
    .event-date {
      width: 100%;
      .img-info {
        .img-wrapper {
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 991.98px) {
  .cafe {
    .wrapper {
      .wrapper-vc-sec {
        display: none;
      }
    }
  }
}
@media screen and (max-width: 767.98px) {
  .cafe {
    .wrapper {
      display: flex;
      flex-direction: column;
      &-vc {
        display: none;
      }
      .wrapper-vc-sec {
        display: block;
      }
      .event-date {
        margin-left: 0;
        .event-info {
          padding: 20px 20px 20px 20px;
        }
        .event-img-date {
          .img-wrapper {
            img {
              border-radius: 6px;
            }
          }
        }
      }
    }
  }
}
@media screen and(max-width:575.98px) {
  .cafe {
    .wrapper {
      display: flex;
      flex-direction: column;
      &-vc {
        display: none;
      }
      &-vc-sec {
        display: block;
        height: 10px;
      }
      .event-date {
        .event-info {
          padding: 15px 20px 15px 20px;
        }
      }
    }
  }
}
</style>
