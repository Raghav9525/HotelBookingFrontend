import React from 'react'
import Login from "./components/Login";
import Admin from './components/Admin';
import Signup from './components/Signup';
import RoomBook from "./components/RoomBook";
import Rooms from "./components/Rooms";
import Payment from './components/Payment';
// import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter and Routes
import { BrowserRouter } from 'react-router-dom'
import { store } from './reduxPrac/store';
import { Provider } from 'react-redux';
import Dashboard from './components/Dashboard';


// function App() {
//     return(
//       <BrowserRouter>
//         <Payment />
//       </BrowserRouter>
//   )
// }


function App() {

  return (
    <Provider store={store}>
      
      <BrowserRouter>
        <Dashboard  />
      </BrowserRouter>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Rooms />} />
          <Route path="/roombook/:id" element={<RoomBook />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={authentication ? <Admin /> : <Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/payment" element={<Payment />} />

          <Route path="/about" element={<About />} />
                <Route path='/admin/studentdata' element={<StudentData />} />
                <Route path="/liveclass" element={<LiveClass />} />
                <Route path="/meeting" element={<MeetingPage />} />
                <Route path='admin/editfaculty' element={<FacultyUpload />} />
        </Routes>
      </BrowserRouter> */}
    </Provider>

  //  <div>
  //  <Navbar />
  //  <Rooms />
  //  </div>
  );
}

export default App;
