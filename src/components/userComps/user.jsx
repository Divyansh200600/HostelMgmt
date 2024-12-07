import React, { useState } from "react";
import StudentProfile from '../../pages/user/studentprofile';
import RoomBooking from "../../pages/user/Room booking";
const Dashboard = () => {
  // State to track the active page
  const [activePage, setActivePage] = useState("dashboard");

  // Function to render page content based on active page
  const renderPageContent = () => {
    switch (activePage) {
      case "students":
        return <div><StudentProfile/></div>;
      case "roomBooking":
        return <div><RoomBooking/></div>;
      case "feeManagement":
        return <div>Fee Management Page Content</div>;
      case "hostelRules":
        return <div>Hostel Rules Page Content</div>;
      case "attendance":
        return <div>Attendance and Notification Page Content</div>;
      case "dashboard":
      default:
        return (
          <div>
            {/* Dashboard Content */}
            <h2 className="text-xl font-semibold text-gray-700">Dashboard</h2>
            {/* Stats Cards, Recent Activities, etc. */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="p-4 bg-white rounded-lg shadow-md">
                <h3 className="text-sm font-medium text-gray-600">Total Students</h3>
                <p className="text-2xl font-semibold text-blue-500">150</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-md">
                <h3 className="text-sm font-medium text-gray-600">Rooms Occupied</h3>
                <p className="text-2xl font-semibold text-blue-500">120</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-md">
                <h3 className="text-sm font-medium text-gray-600">Pending Payments</h3>
                <p className="text-2xl font-semibold text-blue-500">$3,200</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-md">
                <h3 className="text-sm font-medium text-gray-600">Maintenance Requests</h3>
                <p className="text-2xl font-semibold text-blue-500">8</p>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white p-6">
        <h2 className="text-2xl font-semibold mb-6">Hostel Management</h2>
        <nav>
          <ul>
            <li className="mb-4">
              <a
                href="#dashboard"
                onClick={() => setActivePage("dashboard")}
                className="hover:text-blue-300"
              >
                Dashboard
              </a>
            </li>
            <li className="mb-4">
              <a
                href="#students"
                onClick={() => setActivePage("students")}
                className="hover:text-blue-300"
              >
                Students
              </a>
            </li>
            <li className="mb-4">
              <a
                href="#RoomBooking"
                onClick={() => setActivePage("roomBooking")}
                className="hover:text-blue-300"
              >
                Room Booking
              </a>
            </li>
            <li className="mb-4">
              <a
                href="#FeeManagement"
                onClick={() => setActivePage("feeManagement")}
                className="hover:text-blue-300"
              >
                Fee Management
              </a>
            </li>
            <li className="mb-4">
              <a
                href="#HostelRules"
                onClick={() => setActivePage("hostelRules")}
                className="hover:text-blue-300"
              >
                Hostel Rules
              </a>
            </li>
            <li className="mb-4">
              <a
                href="#Attendance"
                onClick={() => setActivePage("attendance")}
                className="hover:text-blue-300"
              >
                Attendance and Notification
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Top Navbar */}
        <header className="flex items-center justify-between pb-6 mb-6 border-b border-gray-200">
          <h1 className="text-3xl font-semibold text-gray-700">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <button className="bg-gray-200 p-2 rounded-full">🔔</button>
            <img
              className="w-8 h-8 rounded-full"
              src="https://via.placeholder.com/150"
              alt="Profile"
            />
          </div>
        </header>

        {/* Page Content */}
        {renderPageContent()}
      </div>
    </div>
  );
};

export default Dashboard;
