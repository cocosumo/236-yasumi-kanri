/** Identify which database environment to use */
export const isProd = ['production', 'localproduction'].includes(process.env.NODE_ENV ?? '');
