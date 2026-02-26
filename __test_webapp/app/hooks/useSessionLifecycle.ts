import { useCallback, useRef } from "react";

const HEARTBEAT_INTERVAL = 30_000;

interface SessionOptions {
  onEnd: () => void;
}

/**
 * Manages client-side session lifecycle: heartbeat keep-alive and
 * graceful session termination.
 */
export function useSessionLifecycle({ onEnd }: SessionOptions) {
  const heartbeatRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startHeartbeat = useCallback(() => {
    if (heartbeatRef.current) return;
    heartbeatRef.current = setInterval(() => {
      navigator.sendBeacon?.("/api/session/ping", "");
    }, HEARTBEAT_INTERVAL);
  }, []);

  const stopHeartbeat = useCallback(() => {
    if (heartbeatRef.current) {
      clearInterval(heartbeatRef.current);
      heartbeatRef.current = null;
    }
  }, []);

  const endSession = useCallback(async () => {
    stopHeartbeat();

    // Notify server so the session token is revoked server-side.
    const res = await fetch("/api/session/end", { method: "DELETE" });

    if (!res.ok) {
      // Surface the failure so the error boundary can handle it.
      throw new Response(res.statusText || "session termination failed", {
        status: res.status,
      });
    }

    onEnd();
  }, [onEnd, stopHeartbeat]);

  return { startHeartbeat, endSession };
}
