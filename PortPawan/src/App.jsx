import { Route, Routes } from "react-router-dom";
import FirstFooter from "./Components/FirstFooter";
import Fixtures from "./Components/Fixtures";
import Hero from "./Components/Hero";
import Jurgen from "./Components/Jurgen";
import LastFooter from "./Components/LastFooter";
import LowHero from "./Components/LowHero";
import LowNav from "./Components/LowNav";
import NewKits from "./Components/NewKits";
import TopNav from "./Components/TopNav";
import Vandjik from "./Components/Vandjik";
import Video from "./Components/Video";
import ViewGallery from "./Components/ViewGallery";
import YnwaDesc from "./Components/YnwaDesc";
import Login from "./RoutingComponents/Login";
import Signup from "./RoutingComponents/Signup";

function App() {
  return (
    <div className="overflow-hidden">
      <Routes>
        <Route path="/sign" element={<Signup />} />
        <Route
          index
          element={
            <div>
              <TopNav />
              <LowNav />
              <Hero />
              <NewKits />
              <LowHero />
              <Video />
              <ViewGallery />
              <Vandjik />
              <Fixtures />
              <Jurgen />
              <YnwaDesc />
              <FirstFooter />
              <LastFooter />
            </div>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
