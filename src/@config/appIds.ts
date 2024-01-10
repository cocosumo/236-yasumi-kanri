import {isProd} from '@helpers/isProd';

export const prodAppId = 108;
export const devAppId = 130;

/** 休み管理のアプリ番号 */
export const appId: number = isProd ? prodAppId : devAppId;

console.log('appId', appId);
