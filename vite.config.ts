import { createRequire } from "node:module";
import { defineConfig, loadEnv, UserConfig } from "vite";
import svgrPlugin from "vite-plugin-svgr";
import viteTsconfigPaths from "vite-tsconfig-paths";

import ckeditor5 from "@ckeditor/vite-plugin-ckeditor5";
import react from "@vitejs/plugin-react";

// import { theme } from "./src/config/theme/themeVariables";
const require = createRequire(import.meta.url);

export default defineConfig(({ mode }): UserConfig => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [
      react(),
      viteTsconfigPaths(),
      svgrPlugin(),
      ckeditor5({ theme: require.resolve("@ckeditor/ckeditor5-theme-lark") }),
    ],
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            // ...theme,
          },
          javascriptEnabled: true,
          additionalData: "@root-entry-name: default;",
        },
      },
    },
    build: {
      outDir: "build",
    },
    server: {
      port: parseInt(env.PORT) || 5173,
      host: true,
      strictPort: true,
    },
    preview: {
      port: 5173,
    },
  };
});
