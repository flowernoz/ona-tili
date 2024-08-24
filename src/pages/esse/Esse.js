import axios from "../../api";
import { useEffect } from "react";
import { useState } from "react";
import AccordionFunc from "../../components/accordion/Accordion";
import Loader from "../../components/loader/Loader";

function Esse() {
  let [data, setData] = useState([]);
  let [loader, setLoader] = useState(true);
  useEffect(() => {
    axios
      .get("/essay/allData")
      .then((res) => setData(res?.data?.innerData))
      .catch((err) => console.error(err))
      .finally(() => setLoader(false));
  }, []);
  return (
    <div className="w-full min-h-[100vh] p-12  border-b-[1px] border-b-black">
      <h1 className="font-titleFont text-xl md:text-2xl text-designColor pb-6 font-bold ">
        Esselar
      </h1>
      {loader ? <Loader /> : 
      <AccordionFunc data={data} />
    }
    </div>
  );
}

export default Esse;
