export const pick = (obj, keys) => Object.fromEntries(
  keys
  .filter(key => key in obj)
  .map(key => [key, obj[key]])
);

export const inclusivePick = (obj, keys) => Object.fromEntries(
  keys.map(key => [key, obj[key]])
);

export const omit = (obj, keys) => Object.fromEntries(
  Object.entries(obj)
  .filter(([key]) => !keys.includes(key))
);
