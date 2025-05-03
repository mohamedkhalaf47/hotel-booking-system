import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Room from "./pages/Room";
import MyBookings from "./pages/MyBookings";
import HotelRegistration from "./components/HotelRegistration";

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
				</Routes>
			</div>
			<Footer />
		</div>
	);
}

export default App;
