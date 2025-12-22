export default function updateUniqueItems(updatedMap) {
  if (!(updatedMap instanceof Map)) throw Error('Cannot process');
  for (const entry of updatedMap) if (entry[1] === 1) updatedMap.set(entry[0], 100);
  return updatedMap;
}
