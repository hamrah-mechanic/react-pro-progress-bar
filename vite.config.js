import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/lib/index.tsx"),
      name: "Pro Progress",
      fileName: (format) => `react-library-vite.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
  plugins: [react(), dts()],
});
