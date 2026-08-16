import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/react-app/", // replace 'react-app' with your actual GitHub repo name
});
