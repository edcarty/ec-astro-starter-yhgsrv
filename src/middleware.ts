import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  console.log("context.url.pathname:", context.url.pathname)
  if (context.url.pathname === "/test-ssr-astro-rewrite") {
    return context.rewrite("/revalidation");
  }
  if (context.url.pathname === "/test-ssg-astro-rewrite") {
    return context.rewrite("/image-cdn");
  }
  return next();
});
