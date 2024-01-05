import { onIndexShow } from "@events/onIndexShow";

(() => {
  console.log('Running in ', process.env.NODE_ENV)
  kintone.events.on(onIndexShow, () => console.log('hello world!'));
})();