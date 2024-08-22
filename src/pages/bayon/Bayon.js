import axios from "../../api";
import { useEffect } from "react";
import { useState } from "react";
import AccordionFunc from "../../components/accordion/Accordion";

function Bayon() {
  let [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("/bayon/allData")
      .then((res) => setData(res?.data?.innerData))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="w-full min-h-[100vh] p-12  border-b-[1px] border-b-black">
      <AccordionFunc data={data} />
    </div>
  );
}

export default Bayon;
