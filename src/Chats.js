import React from "react";
import "./Chats.css";
import Chat from "./Chat";
function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Richard"
        message="Hey! How are you?"
        timestamp="35 minutes ago"
        profilePic="https://d1qxviojg2h5lt.cloudfront.net/images/01DVE8XQTBZY43FEMZQ3Q97XGT/middleditch.valley570.png"
      />
      <Chat
        name="Allie"
        message="Whats up ?"
        timestamp="55 minutes ago"
        profilePic="https://www.famousbirthdays.com/headshots/asmrwithallie-5.jpg"
      />
      <Chat
        name="Jeff"
        message="Just sent you $$$?"
        timestamp="minutes ago"
        profilePic="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2NzA3ODE3OTgwMzcyMjYw/jeff-bezos-andrew-harrer_bloomberg-via-getty-images.jpg"
      />
      <Chat
        name="Kim"
        message="sup darling?"
        timestamp=" 1 day ago"
        profilePic="https://www.plantbasednews.org/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTcwMjQ1Mjk1MDQ3NzE0MDE2/kimkardashian.webp"
      />
    </div>
  );
}

export default Chats;
