export const isNull = (value) => (value === undefined || value === null || value === '-');

export const resourceStringMap = {
  'dřevo': 'wood',
  'kámen': 'stone',
  'železo': 'metal',
  'kov': 'metal',
  'zlato': 'gold',
  'jídlo': 'food',
  'útok': 'attack',
  'obrana': 'defense',
  'odolnost': 'toughness',
  'dosah': 'range',
  'pohyb': 'movement',
  'surovina': 'resource',
};
export const resources = Object.keys(resourceStringMap);

export const resourceRegex = new RegExp(`(\\+?\\-?)(\\d+)x?\\s*(${resources.join('|')})`, 'i');
export const resourceRegexNoCapture = new RegExp(`\\+?\\-?\\d+x?\\s*(?:${resources.join('|')})`, 'gi');

export const parseResource = (costText) => {
  const parsed = costText.match(resourceRegex);
  if (parsed === null) {
    return costText;
  }
  const [ , relative, amount, typeString] = parsed;
  const type = resourceStringMap[typeString.toLowerCase()];
  return {
    relative,
    amount,
    type,
  }
};

export const parseCost = (cost) => {
  return cost.split(/\s*,\s*/).reduce( (costObject, costItem) => {
    const resource = parseResource(costItem);
    if( typeof resource === 'string' ) {
      return costObject;
    }
    return {
      ...costObject,
      [resource.type]: resource.amount,
    }
  }, { wood: 0, stone: 0, metal: 0, gold: 0, food: 0 })
};

export const inch = 2.54;