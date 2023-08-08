import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Collection from "./collection";
import Contact from "./contact";
import EditProfile from "./editProfile";
import Home from "./home";
import Item from "./item";
import Login from "./login";
import './main.js'
import Maintenance from "./maintenance";
import Rankings from "./rankings";
import Terms from "./tos";
import User from "./user";
import Help from "./help";
import Create from "./create";
import Partners from './partners';
import Blog from './blog';
import About from './about';
import Wallet from './wallert';
import SinglePost from './single-post';
import Newsletter from './newsletter';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/create" element={<Create />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/collections" element={<Collection />} />
        <Route path="/help-center" element={<Help />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/user" element={<User />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/rankings" element={<Rankings />} />
        <Route path="/item" element={<Item />} />
        <Route path="/single-post" element={<SinglePost />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter> 
    </div>
  );
}
export default App;
