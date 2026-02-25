import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("messages", "routes/messages.tsx"),
  route("messages/:id", "routes/messages.$id.tsx"),
  route("settings", "routes/settings.tsx"),
] satisfies RouteConfig;
