import "./recent.css"
import {PermMedia, Label,Room, EmojiEmotions} from "@mui/icons-material"

 function Recent() {
    return (
    
         function Share() {
          return (
            <div className="recent">
              <div className="recentWrapper">
                <div className="recentTop">
                  <img className="recentProfileImg" src="/assets/person/1.jpeg" alt="" />
                  <input
                    placeholder="Post"
                    className="recentInput"
                  />
                </div>
                <hr className="recentHr"/>
                <div className="recentBottom">
                    <div className="recentOptions">
                        <div className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareIcon"/>
                            <span className="shareOptionText">Photo or Video</span>
                        </div>
                        <div className="shareOption">
                            <Label htmlColor="blue" className="shareIcon"/>
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor="green" className="shareIcon"/>
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                            <span className="shareOptionText">Feelings</span>
                        </div>
                    </div>
                    <button className="shareButton">Share</button>
                </div>
              </div>
            </div>
          );
        }
        
    )
}

export default Recent; 