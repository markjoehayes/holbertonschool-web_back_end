export default function cleanSet(set, startString) {
  if (startString === '' || typeof startString !== 'string') {
    return '';
  }
  const array = [];
  for (const value of set) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      array.push(value.slice(startString.length));
    }
  }
  return array.join('-');
}
