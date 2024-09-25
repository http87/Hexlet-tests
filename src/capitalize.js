export const capitalize = (str) => {
  if (str === '') {
    return '';
  }
  const [firstChar, ...restChars] = str;
  return `${firstChar.toUpperCase()}${restChars.join('')}`;
};