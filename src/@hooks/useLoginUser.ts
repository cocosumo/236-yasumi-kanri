export const useLoginUer = () => kintone.getLoginUser();

export const useLoginUserCode = () => useLoginUer().code;
