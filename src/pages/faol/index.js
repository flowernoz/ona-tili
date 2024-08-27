import faol1 from "../../assets/faol1.png";
import faol2 from "../../assets/faol2.png";
import faol3 from "../../assets/faol3.png";
import faol4 from "../../assets/faol4.png";
import faol5 from "../../assets/faol5.png";
function Faol() {
  return (
    <div className="mt-4 ">
      <h1 className="font-titleFont text-xl md:text-2xl text-designColor pb-6 font-bold  text-center">
        Faol so'zlar
      </h1>
      <div className="w-full min-h-[100vh]  p-12 bg-white  border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-1  lg:grid-cols-2 lgl:grid-cols-2 xl:grid-cols-2 gap-4 xl:gap-14">
        <img src={faol1} alt="" />
        <img src={faol2} alt="" />
        <img src={faol3} alt="" />
        <img src={faol4} alt="" />
        <img src={faol5} alt="" />
      </div>
    </div>
  );
}

export default Faol;
