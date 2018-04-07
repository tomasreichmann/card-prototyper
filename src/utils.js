export const isNull = (value) => (value === undefined || value === null || value === '-');

export const resourceRegex = /(\d+)x\s*([^\s^]+)/;

export const parseResource = (costText) => {
  const stringMap = {
    'dřevo': 'wood',
    'kámen': 'stone',
    'železo': 'metal',
    'zlato': 'gold',
    'jídlo': 'food',
  };
  const parsed = resourceRegex.exec(costText);
  if (parsed === null) {
    return costText;
  }
  const [ , amount, typeString] = parsed;
  const type = stringMap[typeString];
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