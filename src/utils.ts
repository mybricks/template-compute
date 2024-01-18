const isObject = (target) => {
  return Object.prototype.toString.call(target) === "[object Object]";
};

export function costumier(objValue, srcValue) {
  if (Array.isArray(objValue)) {
    objValue.unshift(...srcValue)
    return objValue;
  }
}
