import React, { useEffect, useState } from "react";
import Styles from "./style.module.scss";

export default function TagLineHero() {
  const [isAppeared, setIsAppeared] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsAppeared(true);
    }, [500]);
  }, []);
  return (
    <section className={Styles.tagLine}>
      <div className={Styles.block}>
        <span className={Styles.text} is-appeared={isAppeared?.toString()}>
          {" "}
          Developing
        </span>
      </div>
      <div className={Styles.block}>
        <span className={Styles.text} is-appeared={isAppeared?.toString()}>
          {" "}
          Web Solutions
        </span>
      </div>
      <div className={Styles.block}>
        <span className={Styles.text} is-appeared={isAppeared?.toString()}>
          That Boost Your{" "}
        </span>
      </div>
      <div className={Styles.block}>
        <span className={Styles.text} is-appeared={isAppeared?.toString()}>
          Business
        </span>
      </div>
    </section>
  );
}
