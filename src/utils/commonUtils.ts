export const isFalsyValue = (param: any): boolean => {
  return (
    param === null ||
    param === undefined ||
    param === false ||
    param === '' ||
    isNaN(param) ||
    param === 0
  );
};

export const isUndefined = (param: any): boolean => {
  return param === undefined;
};
