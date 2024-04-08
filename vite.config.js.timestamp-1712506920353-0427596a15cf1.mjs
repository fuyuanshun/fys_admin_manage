// vite.config.js
import { defineConfig } from "file:///D:/VueProject/Vue3/fys_admin_manage/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/VueProject/Vue3/fys_admin_manage/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import path from "path";
import { createSvgIconsPlugin } from "file:///D:/VueProject/Vue3/fys_admin_manage/node_modules/vite-plugin-svg-icons/dist/index.mjs";
import { viteMockServe } from "file:///D:/VueProject/Vue3/fys_admin_manage/node_modules/vite-plugin-mock/dist/index.mjs";
var __vite_injected_original_dirname = "D:\\VueProject\\Vue3\\fys_admin_manage";
var vite_config_default = defineConfig(({ command }) => {
  return {
    plugins: [
      vue(),
      //矢量图
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
        symbolId: "icon-[dir]-[name]"
      }),
      //mock
      viteMockServe({
        localEnabled: command === "serve"
      })
    ],
    resolve: {
      alias: {
        "@": path.resolve(__vite_injected_original_dirname, "./src")
        // 其他别名
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxWdWVQcm9qZWN0XFxcXFZ1ZTNcXFxcZnlzX2FkbWluX21hbmFnZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcVnVlUHJvamVjdFxcXFxWdWUzXFxcXGZ5c19hZG1pbl9tYW5hZ2VcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L1Z1ZVByb2plY3QvVnVlMy9meXNfYWRtaW5fbWFuYWdlL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbi8vXHU3N0UyXHU5MUNGXHU1NkZFXG5pbXBvcnQge2NyZWF0ZVN2Z0ljb25zUGx1Z2lufSBmcm9tICd2aXRlLXBsdWdpbi1zdmctaWNvbnMnXG4vL21vY2tcbmltcG9ydCB7dml0ZU1vY2tTZXJ2ZX0gZnJvbSAndml0ZS1wbHVnaW4tbW9jaydcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoe2NvbW1hbmR9KT0+e1xuICByZXR1cm4ge1xuICAgIHBsdWdpbnM6IFt2dWUoKSxcbiAgICAvL1x1NzdFMlx1OTFDRlx1NTZGRVxuICAgIGNyZWF0ZVN2Z0ljb25zUGx1Z2luKHtcbiAgICAgIGljb25EaXJzOiBbcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksICdzcmMvYXNzZXRzL2ljb25zJyldLFxuICAgICAgc3ltYm9sSWQ6ICdpY29uLVtkaXJdLVtuYW1lXSdcbiAgICB9KSxcbiAgICAvL21vY2tcbiAgICB2aXRlTW9ja1NlcnZlKHtcbiAgICAgIGxvY2FsRW5hYmxlZCA6IGNvbW1hbmQgPT09ICdzZXJ2ZSdcbiAgICB9KVxuICAgIF0sXG4gICAgcmVzb2x2ZToge1xuICAgICAgYWxpYXM6IHtcbiAgICAgICAgJ0AnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMnKSxcbiAgICAgICAgLy8gXHU1MTc2XHU0RUQ2XHU1MjJCXHU1NDBEXG4gICAgICB9LFxuICAgIH0sXG4gIH1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW1TLFNBQVMsb0JBQW9CO0FBQ2hVLE9BQU8sU0FBUztBQUNoQixPQUFPLFVBQVU7QUFFakIsU0FBUSw0QkFBMkI7QUFFbkMsU0FBUSxxQkFBb0I7QUFONUIsSUFBTSxtQ0FBbUM7QUFTekMsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBQyxRQUFPLE1BQUk7QUFDdkMsU0FBTztBQUFBLElBQ0wsU0FBUztBQUFBLE1BQUMsSUFBSTtBQUFBO0FBQUEsTUFFZCxxQkFBcUI7QUFBQSxRQUNuQixVQUFVLENBQUMsS0FBSyxRQUFRLFFBQVEsSUFBSSxHQUFHLGtCQUFrQixDQUFDO0FBQUEsUUFDMUQsVUFBVTtBQUFBLE1BQ1osQ0FBQztBQUFBO0FBQUEsTUFFRCxjQUFjO0FBQUEsUUFDWixjQUFlLFlBQVk7QUFBQSxNQUM3QixDQUFDO0FBQUEsSUFDRDtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsT0FBTztBQUFBLFFBQ0wsS0FBSyxLQUFLLFFBQVEsa0NBQVcsT0FBTztBQUFBO0FBQUEsTUFFdEM7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
