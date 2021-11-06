import "./sidebar.css";
import {
   Chat, Group, Bookmark, Event, School, PhoneInTalk, } from "@mui/icons-material"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WorkIcon from '@mui/icons-material/Work';
import BackpackIcon from '@mui/icons-material/Backpack';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <LinkedInIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Friends</span>
          </li>
          <li className="sidebarListItem">
            <WorkIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Employment Opprotunities </span>
          </li>
          <li className="sidebarListItem">
            <PhoneInTalk className="sidebarIcon" />
            <span className="sidebarListItemText">Suicide Prevention</span>
          </li>
          <li className="sidebarListItem">
            <BackpackIcon className="sidebarIcon" />
            <span className="sidebarListItemText">VA Benefits</span>
          </li>
        </ul>
      </div>
    </div>
  );
}