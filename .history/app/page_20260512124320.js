"use client";

import { useEffect, useState } from "react";
import { LayoutDashboard, Calendar, Trash2 } from "lucide-react";

export default function AdminDashboard() {
  const [bookings, setBookings] = useState([]);
  const [search, setSearch] = useState("");

  // Fetch bookings
  useEffect(() => {
    fetch("/api/bookings")
      .then((res) => res.json())
      .then((data) => setBookings(data.data || []));
  }, []);

  // Delete booking (UI only or API ready)
  const deleteBooking = (id) => {
    setBookings((prev) => prev.filter((b) => b._id !== id));
  };

  const filtered = bookings.filter(
    (b) =>
      b.fullName?.toLowerCase().includes(search.toLowerCase()) ||
      b.email?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* SIDEBAR */}
      <div className="w-64 bg-[#0f172a] text-white p-6">
        <h1 className="text-2xl font-bold text-[#d4af37] mb-10">
          Royal Admin
        </h1>

        <div className="space-y-4">
          <div className="flex items-center gap-3 text-[#d4af37]">
            <LayoutDashboard size={18} />
            Dashboard
          </div>

          <div className="flex items-center gap-3 hover:text-[#d4af37] cursor-pointer">
            <Calendar size={18} />
            Bookings
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-6">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>

          <input
            type="text"
            placeholder="Search bookings..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border px-4 py-2 rounded w-64"
          />
        </div>

        {/* STATS */}
        <div className="grid grid-cols-3 gap-4 mb-8">

          <div className="bg-white p-5 rounded shadow">
            <h3 className="text-gray-500">Total Bookings</h3>
            <p className="text-2xl font-bold">{bookings.length}</p>
          </div>

          <div className="bg-white p-5 rounded shadow">
            <h3 className="text-gray-500">Pending</h3>
            <p className="text-2xl font-bold">
              {bookings.filter((b) => b.status === "pending").length}
            </p>
          </div>

          <div className="bg-white p-5 rounded shadow">
            <h3 className="text-gray-500">Confirmed</h3>
            <p className="text-2xl font-bold">
              {bookings.filter((b) => b.status === "confirmed").length}
            </p>
          </div>
        </div>

        {/* BOOKINGS TABLE */}
        <div className="bg-white rounded shadow overflow-x-auto">

          <table className="w-full text-left">

            <thead className="bg-gray-200">
              <tr>
                <th className="p-3">Name</th>
                <th>Email</th>
                <th>Room</th>
                <th>Guests</th>
                <th>Status</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((b) => (
                <tr key={b._id} className="border-b">

                  <td className="p-3">{b.fullName}</td>
                  <td>{b.email}</td>
                  <td>{b.roomType}</td>
                  <td>{b.guests}</td>

                  <td>
                    <span
                      className={`px-2 py-1 text-xs rounded ${
                        b.status === "confirmed"
                          ? "bg-green-200 text-green-700"
                          : "bg-yellow-200 text-yellow-700"
                      }`}
                    >
                      {b.status || "pending"}
                    </span>
                  </td>

                  <td className="text-center">
                    <button
                      onClick={() => deleteBooking(b._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded flex items-center gap-1 mx-auto"
                    >
                      <Trash2 size={14} />
                      Delete
                    </button>
                  </td>

                </tr>
              ))}
            </tbody>

          </table>

        </div>
      </div>
    </div>
  );
}