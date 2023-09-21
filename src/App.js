import './App.css';
import './server'

import HostLayout from './Components/Host/HostLayout';
import Dashboard from './Components/Host/Dashboard';
import HostVans from './Components/Host/Vans';
import HostVanDetail from './Components/Host/VanDetail';

import Details from './Components/Host/Details';
import Pricing from './Components/Host/Pricing';
import Photos from './Components/Host/Photos';

import Home from './Components/Home';
import About from './Components/About';
import Vans from './Components/Vans';
import VanDetail from './Components/VanDetail';
import Layout from './Components/Layout';

import Income from './Components/Host/Income';
import Review from './Components/Host/Review';


import { BrowserRouter , Routes , Route } from "react-router-dom";

// ---------------------------------------------------------------------
// DO NESTED ROUTES WHEN THERE IS SHARED UI BETWEEN OUR ROUTES IN OUR APP
// ----------------------------------------------------------------------

/* What is layout Route? It is the parent route of some nested routes that contains just the portion of the UI that will be shared , It will use the oulet component */

function App() {
  return (
    <BrowserRouter>
      {/* <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>} />

          <Route path="/host"  element={<HostLayout/>}>
              <Route path="/host"  element={<Dashboard/> } />
              <Route path="/host/income" element={<Income/>} />
              <Route path="/host/reviews" element={<Review/>} />
          </Route>

          <Route path="/about" element={<About/>} />
          <Route path="/vans" element={<Vans/>} />
          <Route path='/vans/:id' element={<VanDetail/>} /> 
        </Route>
      </Routes> */}


      {/* Relative Route , relative to parent Route */}
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>} />

          <Route path="host"  element={<HostLayout/>}>
            {/* if we want to dispaly another compoennt as outlet of parent with the same Route that use index bda use u cant use /host (its absolute path) */}
            {/* when we want to render outlet at the parent path then use index */}
              <Route index  element={<Dashboard/> } />
              <Route path="income" element={<Income/>} />
              <Route path="reviews" element={<Review/>} />
              <Route path="vans" element={<HostVans/>} />
              <Route path='vans/:id' element={<HostVanDetail/>}>
                <Route index element={ <Details/> } />
                <Route path='pricing' element={ <Pricing/> } />
                <Route path='photos' element={ <Photos/>} />
              </Route>
          </Route>

          <Route path="about" element={<About/>} />

          {/* when u want to keep displaying same UI then you can use nested Route, or avoid some kind of repetation in Routes path */}
          <Route path="vans" element={<Vans/>} />
          <Route path='vans/:id' element={<VanDetail/>} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
