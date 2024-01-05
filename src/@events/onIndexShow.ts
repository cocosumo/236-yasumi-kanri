/**
 * レコード一覧画面表示時のイベント
 * @see https://cybozu.dev/ja/kintone/docs/js-api/events/idx/index-show-event/
 */
export const onIndexShow = [
  'app.record.index.show',
	'mobile.app.record.index.show'
]

export interface Event<T = Yasumi.SavedFields[]> {
  type: string;
  appId: number;
  viewId: number;
  viewName: string;
  viewType: string;
  records: T;
  date?: string;
  offset?: number;
  size?: number;
}