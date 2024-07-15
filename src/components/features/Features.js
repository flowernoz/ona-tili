import React from "react";
import { GiNotebook } from "react-icons/gi";
import { HiPencilAlt } from "react-icons/hi";
import { MdOutlineMenuBook } from "react-icons/md";
import { NavLink } from "react-router-dom";
import Card from "./Card";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full min-h-[100vh] p-12  border-b-[1px] border-b-black"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-14">
        <NavLink to={"diktantlar"}>
          <Card title="Diktantlar" icon={<GiNotebook />} />
        </NavLink>
        <NavLink to="esselar">
          <Card title="Esselar" icon={<GiNotebook />} />
        </NavLink>
        <NavLink to="bayonlar">
          <Card title="Bayonlar" icon={<GiNotebook />} />
        </NavLink>
        <NavLink to="">
          <Card title="Baholash me'zoni" icon={<HiPencilAlt />} />
        </NavLink>
        <NavLink>
          <Card
            title="Yozilishi qiyin so'zlar imlosi"
            icon={<MdOutlineMenuBook />}
          />
        </NavLink>
        <NavLink>
          <Card title="Ayrim so'zlar izohi" icon={<MdOutlineMenuBook />} />
        </NavLink>
      </div>
    </section>
  );
};

export default Features;
