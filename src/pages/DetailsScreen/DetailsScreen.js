import React, {useState} from "react";
import DetailsFeed from "../../components/DetailsFeed";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const DetailsScreen = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <Navbar toggle={toggle} setToggle={setToggle} />
      <DetailsFeed toggle={toggle} setToggle={setToggle}/>
    </div>
  );
};

export default DetailsScreen;
