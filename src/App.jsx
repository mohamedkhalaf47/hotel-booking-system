import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Room from "./pages/Room";
import MyBookings from "./pages/MyBookings";
import HotelRegistration from "./components/HotelRegistration";
import Layout from "./pages/hotelOwner/Layout";
import Dashboard from "./pages/hotelOwner/Dashboard";
import AddRoom from "./pages/hotelOwner/AddRoom";
import ListRoom from "./pages/hotelOwner/ListRoom";

function App() {
	const isOwnerPath = useLocation().pathname.includes("owner");
	return (
		<div>
			{!isOwnerPath && <Navbar />}
			{false && <HotelRegistration />}
			<div className="min-h-[70vh]">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/rooms" element={<Rooms />} />
					<Route path="/rooms/room/:id" element={<Room />} />
					<Route path="/my-bookings" element={<MyBookings />} />
					<Route path="/owner" element={<Layout />}>
						<Route index element={<Dashboard />} />
						<Route path="add-room" element={<AddRoom />} />
						<Route path="list-room" element={<ListRoom />} />
					</Route>
				</Routes>
			</div>
			{!isOwnerPath && <Footer />}
		</div>
	);
}

export default App;
