import { useState } from "react";
import AuthPage from "./pages/AuthPage";
import DashboardPage from "./pages/DashboardPage";
import "./styles/App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="app">
      {isLoggedIn ? (
        <DashboardPage onLogout={() => setIsLoggedIn(false)} />
      ) : (
        <AuthPage onLogin={() => setIsLoggedIn(true)} />
      )}
    </div>
  );
}

export default App;


