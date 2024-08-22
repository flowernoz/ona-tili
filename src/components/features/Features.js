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
          <Card title="Mashqlar" icon={<HiPencilAlt />} />
        </NavLink>
        <NavLink>
          <Card
            title="Faol so'zlar imlo lug'ati"
            icon={<MdOutlineMenuBook />}
          />
        </NavLink>
        <NavLink to={"/harflar"}>
          <Card title="X yoki H" icon={<MdOutlineMenuBook />} />
        </NavLink>
      </div>
    </section>
  );
};

export default Features;
