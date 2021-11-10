import React from 'react'
import Status from '../StatusBox/status';
import './newsfeed.css';


function Newsfeed() {
    return (
        <div className="feed">
      <div className="feedWrapper">
        <Status />
      </div>
    </div>
  );
}
   
export default Newsfeed;