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
};
export const resources = Object.keys(resourceStringMap);

export const resourceRegex = new RegExp(`(\\d+)x\\s*(${resources.join('|')})|(\\+?\\-?\\d+)\\s*(${resources.join('|')})`);
export const resourceRegexNoCapture = new RegExp(`\\d+x\\s*(?:${resources.join('|')})|\\+?\\-?\\d+\\s*(?:${resources.join('|')})`, 'gi');

export const parseResource = (costText) => {
  const parsed = costText.match(resourceRegex);
  console.log('parsed', parsed);
  if (parsed === null) {
    return costText;
  }
  const [ , amount1, typeString1, amount2, typeString2] = parsed;
  const amount = amount1 || amount2;
  const typeString = typeString1 || typeString2;
  const type = resourceStringMap[typeString];
  return {
    amount,
    type,
  }
};

export const parseCost = (cost) => {
  const stringMap = {
    'dřevo': 'wood',
    'kámen': 'stone',
    'železo': 'metal',
    'zlato': 'gold',
    'jídlo': 'food',
  };
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