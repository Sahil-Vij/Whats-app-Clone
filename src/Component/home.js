import React from "react";
import Sidebar from "./sidebar";
import './home.css'

function Home({currentUser ,signOut,email}) {
  return (
    <div className="home">
      <div className="home-container">
        <Sidebar currentUser={currentUser} signOut={signOut}/>
         {/* container with whatsapp logo */}
         <div className="home-bg">
          <img src="./WhatsAppbg.png" alt=""/>
         </div>
      </div>
    </div>
  );
}

export default Home;
