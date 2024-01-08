import {isProd} from '@helpers/isProd';

export const prodAppId = 108;
export const devAppId = 130;

export const appId = isProd ? prodAppId : devAppId;

console.log('appId', appId);
