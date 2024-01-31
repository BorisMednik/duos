import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Profiles } from "./api/data";

import Nissan from "./pages/Nissan";
import Renault from "./pages/Renault";
import Volkswagen from "./pages/Volkswagen";
import Homepage from "./pages/homepage";
import Layout from "./components/Layout";

/* import NAV from "./components/nav"; */

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage data={Profiles} />} />
          {/*   <Route path="/" element={<Homepage />}/> */}
          <Route path="/Nissan" element={<Nissan />} />
          <Route path="/Renault" element={<Renault />} />
          <Route path="/Volkswagen" element={<Volkswagen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
