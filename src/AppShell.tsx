import { ShellBar } from "@ui5/webcomponents-react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Home";
import Details from "./Details";

function App() {
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate("/");
  };
  return (
    <>
      <ShellBar
        primaryTitle="Movie DB"
        logo={
          <img
            alt="SAP Logo"
            src="/sap-logo-svg.svg"
            width="120px"
            height="80px"
          />
        }
        onLogoClick={handleLogoClick}
      />
      <div style={{ overflow: "auto", flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="details/:movieId" element={<Details />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
