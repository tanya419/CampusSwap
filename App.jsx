import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Browse from "./pages/Browse";
import ItemDetails from "./pages/ItemDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddItem from "./pages/AddItem";
import EditItem from "./pages/EditItem";
import MyListings from "./pages/MyListings";
import Wishlist from "./pages/Wishlist";
import Exchange from "./pages/Exchange";
import Profile from "./pages/Profile";
import Chat from "./pages/Chat";
import Notifications from "./pages/Notifications";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Navbar />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/item/:id" element={<ItemDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route element={<ProtectedRoute />}>
              <Route path="/add-item" element={<AddItem />} />
              <Route path="/edit-item/:id" element={<EditItem />} />
              <Route path="/my-listings" element={<MyListings />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/exchange" element={<Exchange />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/notifications" element={<Notifications />} />
            </Route>

            <Route element={<ProtectedRoute adminOnly />}>
              <Route path="/admin" element={<AdminDashboard />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </AppProvider>
  );
}