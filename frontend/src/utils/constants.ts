export const OTC_URLS = {
  terraclassic:
    import.meta.env.VITE_OTC_TERRACLASSIC_URL || 'https://cl8y.com/otc/terraclassic',
  bsc: import.meta.env.VITE_OTC_BSC_URL || 'https://cl8y.com/otc/bsc',
} as const;
