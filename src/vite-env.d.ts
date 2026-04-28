// src/vite-env.d.ts  یا  src/declarations.d.ts
declare module "*.png" {
  const src: string;
  export default src;
}

declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "*.svg" {
  const src: string;
  export default src;
}

declare module "*.webp" {
  const src: string;
  export default src;
}


interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
  // متغیرهای دیگه رو اینجا اضافه کن
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
/// <reference types="vite/client" />
