import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router";
import { useAuth } from "../context/AuthContext";
import { useApp } from "../context/AppContext";
import { usePageTitle, useSessionLifecycle } from "../hooks";
import { messages } from "../data/messages";

const PAGE_SIZE = 3;

export default function Messages() {
  const { isLoggedIn, logout } = useAuth();
  const { readMessageIds, settings } = useApp();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { startHeartbeat, endSession } = useSessionLifecycle({ onEnd: logout });

  usePageTitle("Messages");

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    } else {
      startHeartbeat();
    }
  }, [isLoggedIn, navigate, startHeartbeat]);

  // Dummy WebSocket connection
  useEffect(() => {
    try {
      const ws = new WebSocket("ws://localhost:9999");
      return () => ws.close();
    } catch {
      // intentionally ignored
    }
  }, []);

  if (!isLoggedIn) return <p className="p-4 text-gray-500">Redirecting...</p>;

  const query = searchParams.get("q") || "";

  const searchedMessages = query
    ? messages.filter(
        (m) =>
          m.name.toLowerCase().includes(query.toLowerCase()) ||
          m.title.toLowerCase().includes(query.toLowerCase())
      )
    : messages;

  const filteredMessages = settings.doNotShowRead
    ? searchedMessages.filter((m) => !readMessageIds.has(m.id))
    : searchedMessages;

  const page = Math.max(1, Number(searchParams.get("page")) || 1);
  const totalPages = Math.max(1, Math.ceil(filteredMessages.length / PAGE_SIZE));
  const start = (page - 1) * PAGE_SIZE;
  const pageMessages = filteredMessages.slice(start, start + PAGE_SIZE);

  const [searchInput, setSearchInput] = useState(query);

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    // Bug: pageパラメータをリセットしない。検索で件数が減ってもpage=3等が残り空ページになる
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      if (searchInput) {
        next.set("q", searchInput);
      } else {
        next.delete("q");
      }
      return next;
    });
  }

  function goToPage(p: number) {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.set("page", String(p));
      return next;
    });
  }

  function handleLogout() {
    endSession();
  }

  return (
    <main className="max-w-2xl mx-auto p-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Messages</h1>
        <div className="flex gap-3">
          <Link to="/settings" className="text-blue-600 hover:underline">
            Settings
          </Link>
          <button onClick={handleLogout} className="text-red-600 hover:underline">
            Logout
          </button>
        </div>
      </div>

      <form onSubmit={handleSearch} className="flex gap-2 mb-4">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search by name or title..."
          className="flex-1 px-3 py-2 border rounded"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {pageMessages.length === 0 ? (
        <p className="text-gray-500">No messages to display.</p>
      ) : (
        <div className="space-y-3">
          {pageMessages.map((msg) => (
            <Link
              key={msg.id}
              to={`/messages/${msg.id}`}
              className={`block p-4 border rounded hover:bg-gray-50 ${
                readMessageIds.has(msg.id) ? "opacity-60" : ""
              }`}
            >
              {settings.showFields.name && (
                <p className="font-semibold">{msg.name}</p>
              )}
              {settings.showFields.title && (
                <p className="text-gray-700">{msg.title}</p>
              )}
              {settings.showFields.email && (
                <p className="text-sm text-gray-500">{msg.email}</p>
              )}
            </Link>
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-6">
          <button
            onClick={() => goToPage(page - 1)}
            disabled={page <= 1}
            className="px-3 py-1 border rounded disabled:opacity-40"
          >
            Prev
          </button>
          <span>
            {page} / {totalPages}
          </span>
          <button
            onClick={() => goToPage(page + 1)}
            disabled={page >= totalPages}
            className="px-3 py-1 border rounded disabled:opacity-40"
          >
            Next
          </button>
        </div>
      )}
    </main>
  );
}
