import React from "react";
import Styles from "./style.module.scss";
import TagLineHero from "../../Atom/TagLine";
export default function Hero() {
  return (
    <div className={Styles.wrapperHero}>
      <TagLineHero />
      <div>
        {[1, 2, 3, 4, 5].map((item) => (
          <h2 key={item.id}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            quaerat ab accusantium, facilis veritatis magnam saepe, deserunt aut
            ea molestias eos totam culpa perspiciatis optio alias dolorum id
            reprehenderit porro vitae rerum. Illo quaerat quidem reiciendis quod
            eos accusamus in. Odit sequi, earum cumque deleniti illo praesentium
            eius consequatur corporis rem excepturi accusamus eum reprehenderit
            dignissimos sunt ad placeat error modi nam dolore aliquid debitis
            dolorum quam, ipsa odio! Cum eos possimus voluptates voluptatum,
            magnam fugit eius blanditiis voluptatibus cumque soluta quas earum!
            Explicabo, doloribus? Earum, tenetur, incidunt perferendis maiores
            quasi commodi est, dolore repellat fuga ipsum possimus deserunt
            quidem.
          </h2>
        ))}
      </div>
    </div>
  );
}
