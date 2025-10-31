export * from "./screen";
export * from "./url";
export * from "./constants";

// Helper function to get absolute asset path with base URL
export const getAssetPath = (path: string): string => {
  // Remove leading slash if present
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  // Get base URL from vite config (e.g., '/MacOsPortfolio/' or '/')
  const base = import.meta.env.BASE_URL;
  return `${base}${cleanPath}`;
};
