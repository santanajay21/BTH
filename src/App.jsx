import Navbar from "./components/Navbar";
import ServiceTimes from "./components/ServiceTimes";
import Hero from "./components/Hero";


function App(){
  return (
    <div>
      <h1>Bridge to Heaven</h1>
      <Navbar />
      <ServiceTimes />
      <Hero /> 
    </div>
  );
}

export default App;