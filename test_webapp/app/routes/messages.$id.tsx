import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { useAuth } from "../context/AuthContext";
import { useApp } from "../context/AppContext";
import { messages } from "../data/messages";

export default function MessageDetail() {
  const { isLoggedIn } = useAuth();
  const { readMessageIds, toggleRead } = useApp();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  if (!isLoggedIn) return <p className="p-4 text-gray-500">Redirecting...</p>;

  const message = messages.find((m) => m.id === Number(id));

  if (!message) {
    return (
      <main className="max-w-2xl mx-auto p-4">
        <p>Message not found.</p>
        <Link to="/messages" className="text-blue-600 hover:underline">
          Back to messages
        </Link>
      </main>
    );
  }

  const isRead = readMessageIds.has(message.id);

  return (
    <main className="max-w-2xl mx-auto p-4">
      <Link to="/messages" className="text-blue-600 hover:underline text-sm">
        &larr; Back to messages
      </Link>
      <div className="mt-4 p-4 border rounded">
        <h1 className="text-2xl font-bold mb-2">{message.title}</h1>
        <p className="text-sm text-gray-500 mb-1">From: {message.name}</p>
        <p className="text-sm text-gray-500 mb-4">Email: {message.email}</p>
        <p className="whitespace-pre-wrap">{message.body}</p>
      </div>
      <button
        onClick={() => toggleRead(message.id)}
        className="mt-4 px-4 py-2 border rounded hover:bg-gray-100"
      >
        {isRead ? "Mark as unread" : "Mark as read"}
      </button>
    </main>
  );
}
