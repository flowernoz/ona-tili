import { useState } from "react";
import AccordionFunc from "../../components/accordion/Accordion";
import img6 from "../../assets/img6.png";
function Mashq() {
  let data = [
    {
      id: 1,
      savol: "Nuqtalar o‘rniga i yoki u harflaridan mosini qo‘yib ko‘chiring.",
      text: "But...n, sov...q, uyq..., kulg..., shov...llamoq, sup...rmoq, quv...r, uch...n, qiz...q, ...st...qlol.",
    },
    {
      id: 2,
      savol: "Nuqtalar o‘rniga x yoki h harflaridan mosini qo‘yib, ko‘chiring.",
      text: "...ushyor, sa...iy, ma...sulot, ...ulosa, ...arakat, ...urmatli, ...ukm, ...ozirjavob, ta...t, sa...na, ...ayol, ...ar kim, ...ech qachon.",
    },
    {
      id: 3,
      savol:
        "Mashq «Xatosini toping» deb nomlanadi. Matnda kichik harflar bilan berilgan so‘zlarni to‘g‘rilab, bosh harflar bilan yozing.",
      text: "Mening bolalik yillarim farg‘ona vodiysining yaypan, nursuq, qudash, buvayda, tolliq, olqor, yulg‘unzor, oqqo‘rg‘on degan qish loqlarida o‘tgan. o‘ttizinchi yillarning o‘rtalarida bolaligimni o‘yla ganimda chalakam-chatti tush ko‘rganday edim: dumli yulduz chiqqan edi; Babar (Bobir bo‘lsa kerak) degan yigitni otqorovul miltiq bilan otganda o‘lmagan edi... (Abdulla Qahhor)",
    },
    {
      id: 4,
      savol:
        "Berilgan gaplardagi so‘zlarning xatosini toping. Ularni to‘g‘rilab, daftaringizga ko‘chirib yozing.",
      text: "1. Besh asirkim nazmiy saroyni \nTitratadi zanjirband bir she’r. (A.Oripov) \n2. Sanat saroyiga konsert tomosha qilgani bordik. 3. Chop yoni bilan turmoq. 4. Urish!!! Noming o‘chsin jahonda... (Zulfiya)",
    },
    {
      id: 5,
      savol:
        "Gaplarni o‘qib, xato yozilgan so‘zlarni to‘g‘rilang. So‘zlarning aytilishi va imlosini izohlang.",
      text: "1. Ey farzan! Har bir qadamingni o‘ylab bos. Mulohaza blan ish qil. Zomonga munosib bo‘l. O‘zingni oliy toifa deb ko‘rsatma, amal va boyliging bilan g‘ururlanma. Doyimo kamtar bo‘l, xalqqa xizmat qil. Kamtarga komol, manmanga zavol, degan maqolni aslo unitma. Bu sening shioring bo‘lsin.",
    },
    {
      id: 6,
      savol:
        "Boshqotirmani to‘g‘ri yechsangiz, Alisher Navoiyning hunar haqidagi hikmatli so‘zini o‘qiysiz. Undagi tushirilgan undosh tovushlarga tavsif bering.",
      img: img6,
    },
    {
      id: 7,
      savol:
        "Gaplardagi xato yozilgan so‘zlarni imlo qoidalariga mos ravishda ko‘chiring. Bu so‘zlarning aytilishi va yozilishi o‘rtasidagi farqlarni tushuntiring.",
      text: "1. Fikir-mulohazalarimni qog‘ozga tushurishga urindim. 2. O‘tgan haftada o‘qituvchimiz bilan tiyatrga borgan edik. 3. Qo‘shnimizning Absalom va Abjabbor ismli o‘g‘illari bor. 4. Sinfdoshim Karimjon katta bo‘sa artis bo‘moqchi.",
    },
    {
      id: 8,
      savol:
        "So‘zlarni daftaringizga ko‘chiring. So‘ng ularni talaffuz qilib, aytilishi va imlosi o‘rtasidagi farqlarni toping.",
      text: "Hisob-kitob, avtobus, nafas, fazilat, Yusuf, daromad, dasht, qasd, mahsulot, himoya, jarroh, g‘irrom, masofa.",
    },
    {
      id: 9,
      savol:
        "Gaplarni o‘qib, xato yozilgan so‘zlarni to‘g‘rilang. So‘zlarning aytilishi va imlosini izohlang.",
      text: "Ey farzan! Har bir qadamingni o‘ylab bos. Mulohaza blan ish qil. Zomonga munosib bo‘l. O‘zingni oliy toifa deb ko‘rsatma, amal va boyliging bilan g‘ururlanma. Doyimo kamtar bo‘l, xalqqa xizmat qil. Kamtarga komol, manmanga zavol, degan maqolni aslo unitma. Bu sening shioring bo‘lsin.",
    },
    {
      id: 10,
      savol:
        "Nuqtalar o‘rniga tushirib qoldirilgan unli harflarni qo‘yib, gaplarni daftaringizga ko‘chiring.",
      text: "1. Shirin uyq...dan voz kechib, kitoblarga do‘st tut...ngan inson vaqtlar o‘tib kamol...tga erishadi. 2. Xalq e’zozi inson uch...n eng oliy mukof...tdir. 3. Xalq uchun o‘z umrini baxshida etgan insonning nomi hech qachon un...tilmaydi.",
    },
  ];
  return (
    <div className="w-full min-h-[100vh] p-12  border-b-[1px] border-b-black">
      <h1 className="font-titleFont text-xl md:text-2xl text-designColor pb-6 font-bold ">
        Mashqlar
      </h1>
      <AccordionFunc data={data} />
    </div>
  );
}

export default Mashq;
