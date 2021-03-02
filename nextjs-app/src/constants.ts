export const IS_PRODUCTION = process.env.NODE_ENV === 'production'
export const IS_BROWSER = typeof window !== 'undefined'
export const ASSET_PATH = IS_PRODUCTION ? '' : ''
