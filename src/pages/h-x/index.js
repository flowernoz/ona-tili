import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import img7 from "../../assets/img7.png";
import img8 from "../../assets/img8.png";
import img9 from "../../assets/img9.png";
import img10 from "../../assets/img10.png";
import img11 from "../../assets/img11.png";
import img12 from "../../assets/img12.png";
import img13 from "../../assets/img13.png";
import img14 from "../../assets/img14.png";
import img15 from "../../assets/img15.png";
import img16 from "../../assets/img16.png";
import "./style.css";
function Letters() {
  return (
    <div className="w-full min-h-[100vh]  p-12 bg-white  border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-14">
      <div>
        <h1 className='h'>«H» HARFI ISHTIROKIDA YOZILADIGAN SO'ZLAR</h1>
        <img src={img1} alt="image1" />
      </div>
      <img src={img2} alt="" />
      <img src={img3} alt="" />
      <img src={img4} alt="" />
      <img src={img5} alt="" />
      <img src={img7} alt="" />
      <img src={img8} alt="" />
      <img className="margin" src={img9} alt="" />
      <img src={img10} alt="" />
      <img src={img11} alt="" />
      <img src={img12} alt="" />
      <img src={img13} alt="" />
      <img src={img14} alt="" />
      <img src={img15} alt="" />
      <img src={img16} alt="" />
    </div>
  );
}

export default Letters;
