import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './containers/Home';
import Login from './containers/Login';
import Register from './containers/Register';
import Feedback from './containers/Feedback';
import Residency from './containers/residency/Residency';
import Reservation from './containers/reservation/Reservation';
import AddResidency from './containers/residency/AddResidency';
import ResidencyDetails from './containers/residency/ResidencyDetails';
import DeleteResidency from './containers/residency/DeleteResidency';
import AddReservation from './containers/reservation/AddReservation';
import Layout from './components/Layout';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="sign-up" element={<Register />} />
        <Route path="feedback" element={<Feedback />} />
        <Route path="residency" element={<Layout />}>
          <Route index element={<Residency />} />
          <Route path="new" element={<AddResidency />} />
          <Route path=":residenceId" element={<ResidencyDetails />} />
          <Route path="delete" element={<DeleteResidency />} />
        </Route>
        <Route path="reservation" element={<Layout />}>
          <Route index element={<Reservation />} />
          <Route path="new" element={<AddReservation />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
