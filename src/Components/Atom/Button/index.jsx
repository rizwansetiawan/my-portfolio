import React, { useEffect, useRef } from "react";
import Styles from "./style.module.scss";
import useInView from "../../../Helpers/useInView";
export default function Button() {
  const reff1 = useRef(null);
  const reff2 = useRef(null);

  const { isVisible: isVisible1 } = useInView({ ref: reff1 });
  const { isVisible: isVisible2 } = useInView({ ref: reff2 });

  console.log("1", isVisible1);
  console.log("2", isVisible2);
  useEffect(() => {
    window.scrollTo({
      top: "0",
    });
  }, []);
  return (
    <section>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
        laboriosam dolores nihil voluptates beatae, explicabo culpa obcaecati
        expedita, accusamus enim eligendi nisi ullam, magnam fugit sequi
        excepturi? Dolores, molestiae eum? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Vitae ullam inventore quos assumenda autem
        placeat ea necessitatibus nihil, mollitia magnam corporis nemo impedit
        aut animi rem pariatur atque eos quas eaque sapiente totam cumque
        consequuntur quo et. Ea aliquid saepe amet quod incidunt voluptatum
        beatae perspiciatis magnam iste ducimus explicabo sapiente accusamus
        autem, accusantium voluptate ut consectetur. Veritatis numquam nesciunt
        blanditiis voluptates dolorum porro corporis voluptatibus excepturi
        recusandae, fuga ipsam delectus eligendi temporibus eos itaque aliquid
        molestiae asperiores suscipit dolorem qui repudiandae? Eligendi dolorem
        inventore quisquam! Ullam aliquam ipsa inventore adipisci blanditiis
        dolorem architecto cupiditate. Hic aut sed nemo asperiores inventore
        qui. Voluptatem perferendis consectetur nulla dolorum quasi autem
        dolorem iste. Blanditiis, animi odio dignissimos aperiam vel culpa rerum
        nisi quae sint possimus eaque accusamus atque voluptates laudantium
        quaerat pariatur quo hic reprehenderit doloremque quidem inventore
        deleniti nesciunt in! Asperiores perspiciatis repudiandae, quos dolore
        nobis accusamus sed dolores dolorum provident similique! A modi dicta ex
        velit, quasi sequi repellendus vel iusto, odit explicabo enim rerum
        aliquid numquam alias laudantium atque ea tempore porro, dignissimos
        nesciunt incidunt harum. Illo, tenetur ipsa facere aut similique optio
        tempora magnam voluptatum, reiciendis suscipit ex necessitatibus officia
        eum nobis? Eveniet ipsam placeat voluptates, in fuga excepturi
        laboriosam corporis ex quis, modi illo tenetur quasi nam commodi officia
        adipisci dolorum iste? Doloribus illo rem itaque perspiciatis? Aliquid
        nam saepe minus aliquam reiciendis quos amet quo sit doloribus magnam,
        id, soluta nobis, consequatur mollitia odio assumenda! Omnis enim
        nesciunt optio aspernatur rem unde ad! Aliquid, corporis. Vitae,
        deserunt consequuntur? Magnam excepturi culpa esse error commodi quia
        impedit natus doloremque nemo, quos officia reiciendis quaerat dicta!
        Accusamus est deleniti fuga itaque quasi enim debitis voluptate, quos
        alias similique tenetur hic dolorum. Consectetur, in. Veritatis corrupti
        id consequatur saepe harum impedit magnam repudiandae delectus porro
        dignissimos nisi velit nihil consequuntur molestias aut placeat officiis
        blanditiis similique illo, facere corporis qui neque ut! Nemo doloremque
        quo eius eveniet quam eos. Minus repellat eum harum deleniti excepturi,
        cumque beatae tempore animi maxime sint at debitis recusandae doloribus
        praesentium aliquid ducimus consequuntur quibusdam exercitationem culpa
        porro? Rem perferendis saepe adipisci ad quidem soluta porro alias
        voluptatem temporibus sed quas reprehenderit eos, assumenda suscipit
        eaque modi quaerat sit accusantium pariatur mollitia perspiciatis!
        Animi, optio. Provident nostrum molestiae repudiandae tempore
        reprehenderit id minus molestias doloremque, obcaecati error! Laboriosam
        labore, omnis cupiditate nesciunt alias similique ex delectus rerum,
        dolor illum ratione incidunt a, quas illo? Ullam molestias explicabo
        ipsa! Soluta minus sit id et! Impedit assumenda magnam fuga sunt iure,
        placeat error eligendi, quae veniam eum, cupiditate laudantium molestiae
        omnis velit quis molestias corrupti ad optio voluptatibus voluptatem hic
        atque numquam libero. Nostrum quasi mollitia odit. Neque aliquam tempore
        earum iste fugiat ipsam repellendus voluptates eligendi omnis, aut ex,
        totam consectetur eius velit quasi nobis voluptatem necessitatibus
        molestiae. Commodi nam similique fugit ducimus hic eveniet aspernatur
        deserunt nisi animi voluptatem beatae explicabo, maxime tenetur itaque
        sunt! Dolorem necessitatibus hic quia quas nihil eveniet quam officiis,
        cum cumque minus fuga facere ipsa fugiat, numquam praesentium itaque
        quisquam doloribus sed voluptatem optio ipsam doloremque. Nobis
        reprehenderit ullam neque quaerat, possimus, ipsum adipisci accusantium
        unde atque sit blanditiis id? Alias accusantium placeat quos officia
        illo consequuntur deserunt explicabo harum a aliquid delectus,
        voluptatem perspiciatis doloribus eos veniam quis non maiores quam
        repellat est ducimus amet eaque laborum. Amet qui delectus nemo numquam!
        Saepe nemo ab dignissimos qui error illum rem voluptatibus architecto
        maiores aut omnis voluptate ducimus doloribus distinctio a, similique
        explicabo accusantium officiis aliquid sit sunt consectetur unde.
        Quaerat vero quisquam similique iusto quo voluptatum eos maxime
        delectus, quis at repellendus doloremque illum cupiditate ex ratione ut
        consequuntur maiores? Facilis iusto libero, accusantium modi
        necessitatibus sint dolore dignissimos accusamus magnam dolor quisquam
        quis commodi deserunt iure rerum nam harum eveniet molestiae voluptas
        culpa? Nam odit esse quas voluptatum culpa quia mollitia expedita veniam
        eius eos deserunt provident, nisi aliquid, officiis ratione. Molestias
        unde quasi cum est reprehenderit hic maiores laudantium debitis amet,
        odio accusamus porro saepe blanditiis mollitia facere iusto voluptate
        fugit, nam eos magni fugiat ratione cupiditate natus? At corporis enim
        ab quas sunt dolores unde nemo dicta mollitia rem. Unde debitis magnam
        distinctio quos, nam dolorum nihil laudantium provident maiores?
        Molestias sit porro doloremque mollitia atque! Eos voluptatem harum
        magnam error veniam sed repellat numquam mollitia quaerat tempore. Ea
        dolore iusto quae consectetur praesentium voluptas repellat tempore rem,
        quidem minus explicabo minima dicta deserunt consequatur at, asperiores
        nam necessitatibus aperiam magnam repudiandae accusamus mollitia illo
        qui nihil? Consequatur facilis et consequuntur veniam, nesciunt
        reprehenderit iusto laudantium! Laboriosam, recusandae quisquam.
        Molestias enim esse modi. Exercitationem pariatur natus porro minus
        omnis, delectus tempora. Atque, debitis repellat nemo dolores eum
        quaerat nostrum! Fugiat aut necessitatibus magni, placeat laborum iusto
        quia mollitia. Odit fugiat ratione deleniti laudantium esse aut,
        obcaecati minus. Magni sint omnis laudantium nesciunt vero assumenda
        laborum deleniti facere nihil harum tempore, tempora quaerat sunt, eos
        tenetur ipsa, quidem vel. Delectus soluta consequuntur ad quia a
        veritatis quam cumque, inventore nulla. Sapiente molestiae quo ex
        perspiciatis similique quas accusamus tempora corporis maxime explicabo!
        Repellendus assumenda at distinctio sequi, totam esse tenetur illum?
        Expedita, saepe? Numquam fugit, esse quis non modi quos soluta molestiae
        blanditiis voluptatibus deserunt, beatae quibusdam magnam labore tempore
        placeat dolore unde harum eum doloremque, adipisci sapiente iste illum?
        Totam optio quos sint assumenda voluptatem soluta quibusdam, corporis id
        quae dicta. Sequi velit quisquam numquam hic soluta et voluptas nulla
        repudiandae rem, voluptates qui minima doloribus deserunt vero facere
        veniam nobis a minus quam, quasi itaque aperiam! Culpa impedit nihil
        dicta esse maiores amet repellendus, doloremque distinctio facere nisi
        totam sed? Architecto nisi cupiditate quisquam debitis earum odio vel
        ducimus, doloribus, quo laboriosam eveniet itaque, quae ab sunt?
        Laboriosam neque at facilis necessitatibus possimus eaque iure quisquam
        amet ullam quae aut, error recusandae repellendus magnam rerum aliquid
        tenetur inventore fugiat. Ducimus labore saepe molestiae. Iure
        dignissimos, nisi consectetur quas amet numquam itaque delectus
        consequuntur quos nostrum, excepturi magnam similique dolores commodi
        non sunt vitae! Iure expedita, vel quia dolore omnis ipsam aut illo
        debitis quaerat?
      </h1>
      <div
        ref={reff1}
        className={Styles.wrapper}
        is-true={isVisible1?.toString()}
      ></div>
      <div ref={reff1}></div>
      <h1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium
        placeat vitae nulla error, ab eos molestiae autem repellat voluptate,
        cum mollitia quibusdam, suscipit excepturi non itaque! Architecto
        consequuntur libero sequi?
      </h1>
      <div ref={reff2}></div>
    </section>
  );
}
