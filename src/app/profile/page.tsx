"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { signOut } from "next-auth/react";

export default function ProfilePage() {
  const { data: session, status } = useSession();

  // Gestion du chargement
  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="flex items-center space-x-3">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
          <span className="text-lg text-gray-600">Loading your profile...</span>
        </div>
      </div>
    );
  }

  // Redirection si non authentifié
  if (!session) {
    redirect("/ClientSide/login");
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg">
        <div className="p-6 text-center">
          <h1 className="text-2xl font-bold text-blue-600">Dashboard</h1>
        </div>
        <nav className="mt-8">
          <a href="#" className="block py-3 px-6 text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition">
            Profile
          </a>
          <a href="#" className="block py-3 px-6 text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition">
            Settings
          </a>
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="w-full text-left py-3 px-6 text-red-600 hover:bg-red-100 transition"
          >
            Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="bg-white shadow p-6">
          <h2 className="text-2xl font-semibold text-gray-800">User Profile</h2>
        </header>

        {/* Profile Content */}
        <main className="flex-1 p-8 bg-gray-50">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
            {/* Avatar et Information */}
            <div className="flex items-center space-x-6">
              <div className="h-24 w-24 rounded-full bg-gray-200 overflow-hidden">
                {session.user?.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={session.user.image}
                    alt="User Avatar"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-4xl font-semibold text-gray-600">
                    {session.user?.name?.charAt(0).toUpperCase() || "U"}
                  </div>
                )}
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  {session.user?.name || "Unnamed User"}
                </h3>
                <p className="text-gray-500">{session.user?.email || "No email provided"}</p>
              </div>
            </div>

            {/* User Details */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold text-gray-700">Full Name</h4>
                <p className="text-gray-600">{session.user?.name || "Not provided"}</p>
              </div>
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold text-gray-700">Email</h4>
                <p className="text-gray-600">{session.user?.email || "Not provided"}</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
