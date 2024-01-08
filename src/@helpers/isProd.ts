export const isProd = ['production', 'localproduction'].includes(process.env.NODE_ENV ?? '');
