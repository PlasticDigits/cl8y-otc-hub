/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_OTC_TERRACLASSIC_URL: string;
  readonly VITE_OTC_BSC_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
