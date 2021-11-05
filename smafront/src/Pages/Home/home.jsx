import Sidebar from "../../Components/Sidebar/sidebar";
import Topbar from "../../Components/Topbar/topbar";
import Events from "../Events/events";
import Timeline from "../../Components/Timeline/timeline";
import Mainpage from "../../Components/MainPage/mainpage";
import Recent from "../../Components/recent/recent";



export default function Home() {
    return (
      <><Topbar/> <div className="homeContainer"> 
        <Sidebar /> 
      </div></>
      
    );
  }