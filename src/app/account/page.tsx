"use client";

import { useState } from "react";

import styles from "./accaunt.module.scss";
// import Notification from "./component/Notification";
import { ForgetPassword } from "./component/ForrgetPassword";
import { FriendForm } from "./component/FriendForm";
import { Notification } from "./component/Notification";
import { TwoFacroty } from "./component/TwoFactor";
import { AccauntHeader } from "@/components/AccauntPage/AccauntHeader";
import { Advertising } from "@/components/AccauntPage/Advertising";
import { Comment } from "@/components/AccauntPage/Comment";

import ArrowIcon from "@/assets/icons/arrows/Arrow.svg";

// тестовые данные (комментарии)
const comments = [
  {
    text: "Сделал всё по красоте, не первый раз обращаюсь к этому продавцу. Всем советую ребят, всё делает быстро и качественно. Спасибо.",
    subText: "☑️170 ГЕМОВ BRAWL STARS на твой аккаунт☑️",
    senderName: "ShadowFox",
    senderTime: "12:37",
    senderDate: "13 марта 2025 ",
    countOfStars: 3,
  },
  {
    text: "Всё ок",
    subText: "☑️170 ГЕМОВ BRAWL STARS на твой аккаунт☑️",
    senderName: "ShadowFox",
    senderTime: "12:37",
    senderDate: "13 марта 2025 ",
    countOfStars: 5,
  },
  {
    text: "Сделал всё по красоте, не первый раз обращаюсь к этому продавцу. Всем советую ребят, всё делает быстро и качественно. Спасибо.",
    subText: "☑️170 ГЕМОВ BRAWL STARS на твой аккаунт☑️",
    senderName: "ShadowFox",
    senderTime: "12:37",
    senderDate: "13 марта 2025 ",
    countOfStars: 3,
  },
];

export default function Accaunt() {
  const [IsPasswordForgot, setIsPasswordForgot] = useState(false);
  const [isInviteFriend, setIsInviteFriend] = useState(false);
  const [isTwoFacroty, setIsTwoFactory] = useState(false);
  const [notivication, setNotification] = useState(false);

  return (
    <>
      {isInviteFriend ? (
        <FriendForm onClouse={() => setIsInviteFriend(false)} />
      ) : null}
      {isTwoFacroty ? (
        <TwoFacroty onClouse={() => setIsTwoFactory(false)} />
      ) : null}
      {notivication ? (
        <Notification onClouse={() => setNotification(false)} />
      ) : null}
      {IsPasswordForgot ? (
        <ForgetPassword onClouse={() => setIsPasswordForgot(false)} />
      ) : null}

      <div className={styles.container}>
        <div className={styles.header}>
          <h3 className={styles.header__title}>Профиль</h3>
        </div>

        <section className={styles.wrapper}>
          <div className={styles.user}>
            <AccauntHeader userName={"Лёша63"} raiting={3.48} />
            <div className={styles.buttons}>
              <button>
                <input
                  type="file"
                  id="file-upload"
                  className={styles.buttons__input}
                />
                Изменить фото <ArrowIcon />
              </button>
              <button onClick={() => setIsPasswordForgot(true)}>
                Изменить пароль <ArrowIcon />
              </button>
              <button onClick={() => setNotification(true)}>
                Уведомления
                <div className={styles.buttons__wrapper}>
                  <div className={styles.buttons__second}>Вкл.</div>
                  <ArrowIcon />
                </div>
              </button>
            </div>

            <div className={styles.advertising_adaptive}>
              <Advertising
                buttonClick={() => setIsInviteFriend(true)}
                title={"🌟 Пригласи своих друзей и зарабатывайте вместе!"}
                text={`Получи 5% от первой покупки нового пользователя и 1% от всех
              последующих его покупок! 🎁`}
                buttonText="Пригласить друга"
                theme={"secondary"}
              />
              <Advertising
                buttonClick={() => setIsTwoFactory(true)}
                title={"⚠️ Добавь двухфакторную аутентификацию"}
                text={`
                   Двухэтапная аутентификация повышает безопасность и защищает
              учётные записи от несанкционированного доступа.
                  `}
                buttonText="Защитить профиль"
                theme={"tertiary"}
              />
            </div>

            <div className={styles.reviews}>
              <div className={styles.reviews__header}>Отзывы</div>
              {comments.map((item, id, arr) => {
                return (
                  <Comment
                    {...item}
                    key={id}
                    isBorder={arr.length !== id + 1}
                  />
                );
              })}
            </div>
          </div>

          <div className={styles.advertising}>
            <Advertising
              buttonClick={() => setIsInviteFriend(true)}
              title={"🌟 Пригласи своих друзей и зарабатывайте вместе!"}
              text={`Получи 5% от первой покупки нового пользователя и 1% от всех
              последующих его покупок! 🎁`}
              buttonText="Пригласить друга"
              theme={"secondary"}
            />
            <Advertising
              buttonClick={() => setIsTwoFactory(true)}
              title={"⚠️ Добавь двухфакторную аутентификацию"}
              text={`
                   Двухэтапная аутентификация повышает безопасность и защищает
              учётные записи от несанкционированного доступа.
                  `}
              buttonText="Защитить профиль"
              theme={"tertiary"}
            />
          </div>
        </section>
      </div>
    </>
  );
}
