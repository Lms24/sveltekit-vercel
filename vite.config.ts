import { sentrySvelteKit } from "@sentry/sveltekit";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    sourcemap: true,
  },
  plugins: [
    sentrySvelteKit({
      autoUploadSourceMaps: true,
      sourceMapsUploadOptions: {
        include: [
          { paths: [`.svelte-kit/output/client`] },
          { paths: [`.svelte-kit/output/server/chunks`] },
          { paths: [`.svelte-kit/output/server`], ignore: ["chunks/**"] },
        ],
      },
    }),
    sveltekit(),
  ],
});
