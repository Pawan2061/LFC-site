import Fixtures from "./Components/Fixtures";
import Hero from "./Components/Hero";
import Jurgen from "./Components/Jurgen";
import LowHero from "./Components/LowHero";
import LowNav from "./Components/LowNav";
import NewKits from "./Components/NewKits";
import TopNav from "./Components/TopNav";
import Vandjik from "./Components/Vandjik";
import Video from "./Components/Video";
import ViewGallery from "./Components/ViewGallery";
function App() {
  return (
    <div className="overflow-hidden">
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
    </div>
  );
}

export default App;
