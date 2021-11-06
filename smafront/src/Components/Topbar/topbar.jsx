import "./topbar.css";
import { Search, Person, Notifications, Chat } from "@mui/icons-material";


export default function Topbar() {
    return (
      <div className="topbarContainer">
        <div className="topbarLeft">
          <span className="logo">VET NET</span>
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
            <Search className="searchIcon" />
            <input
              placeholder="Search"
              className="searchInput"
            />
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLink">HOME</span>
            <span className="topbarLink">EVENTS</span>
          </div>
          <div className="topbarIcons">
            <div className="topbarIconItem">
              <Person />
            </div>
            <div className="topbarIconItem">
              <Chat />
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <Notifications />
            </div>
          </div>
        </div>
      </div>
    );
  }
  