import { BrowserRouter, Route, Routes } from "react-router-dom";
//import "./App.css";
import Home from "./Component/home";
import ChatPage from "./Component/chatPage";
import { useState } from "react";
import Login from "./Component/login";
import { auth } from "./firebase";
function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        setUser(null);
        localStorage.removeItem("user");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div className="App">
      <BrowserRouter>
        {user ? (
          <Routes>
            <Route
              path="/"
              element={<Home currentUser={user} signOut={signOut} />}
            />
            <Route
              path="/:emailID"
              element={<ChatPage currentUser={user} signOut={signOut} />}
            />
          </Routes>
        ) : (
          <Login setUser={setUser} />
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
