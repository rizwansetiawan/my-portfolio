import React, { useState } from "react";
import Styles from "./style.module.scss";
export default function TopBar() {
  const [isOpenTopBar, setIsOpenTopBar] = useState(false);
  const [isOpenText, setIsOpenText] = useState(false);

  const handleOpenBar = () => {
    setIsOpenTopBar(!isOpenTopBar);
    setTimeout(() => {
      setIsOpenText(!isOpenText);
    }, 400);
  };
  const myMenu = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "About",
      link: "/",
    },
    {
      text: "Contact",
      link: "/",
    },
    {
      text: "Community",
      link: "/",
    },
  ];
  return (
    <div className={Styles.wrapperTopBar}>
      <div className={Styles.headerName}>
        <span>Rizwan</span>
        <span>Setiawan</span>
      </div>
      <div className={Styles.burgerMenu} onClick={handleOpenBar}>
        {[1, 2, 3].map((_, idx) => (
          <div
            className={Styles.line}
            key={idx}
            is-open={isOpenTopBar?.toString()}
          ></div>
        ))}
      </div>
      <section
        className={Styles.openSectionBar}
        is-open={isOpenTopBar?.toString()}
      >
        <div className={Styles.barMenus}>
          {myMenu?.map((l, idx) => (
            <div className={Styles.listMenu} key={idx}>
              <h1
                className={Styles.text}
                is-open={isOpenText?.toString()}
                is-close-bar={isOpenTopBar?.toString()}
              >
                {l.text}
              </h1>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
