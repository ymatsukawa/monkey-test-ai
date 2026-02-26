import { useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import { useApp } from "../context/AppContext";

export default function Settings() {
  const { isLoggedIn } = useAuth();
  const { settings, updateSettings, updateShowFields } = useApp();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  if (!isLoggedIn) return <p className="p-4 text-gray-500">Redirecting...</p>;

  return (
    <main className="max-w-md mx-auto p-4">
      <Link to="/messages" className="text-blue-600 hover:underline text-sm">
        &larr; Back to messages
      </Link>
      <h1 className="text-2xl font-bold mt-4 mb-6">Settings</h1>

      <div className="space-y-4">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={settings.doNotShowRead}
            onChange={(e) => updateSettings({ doNotShowRead: e.target.checked })}
          />
          <span>Do not show read messages</span>
        </label>

        <fieldset className="border rounded p-3">
          <legend className="text-sm font-medium px-1">Dashboard display fields</legend>
          <div className="space-y-2 mt-2">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={settings.showFields.name}
                onChange={(e) => updateShowFields({ name: e.target.checked })}
              />
              <span>Name</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={settings.showFields.title}
                onChange={(e) => updateShowFields({ title: e.target.checked })}
              />
              <span>Title</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={settings.showFields.email}
                onChange={(e) => updateShowFields({ email: e.target.checked })}
              />
              <span>Email</span>
            </label>
          </div>
        </fieldset>
      </div>
    </main>
  );
}
