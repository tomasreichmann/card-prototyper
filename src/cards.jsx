import React from 'react';
import { withStyles } from 'material-ui/styles';
import { range } from 'lodash';

import { BuildingCard } from './BuildingCard';

import { buildings } from '../elements.json';

console.log('buildings', buildings);

const buildingCards = buildings.reduce( (collection, building) => (
  [
    ...collection,
    ...range(building.count).map( buildingIndex => <BuildingCard key={building.name + '-' + buildingIndex} {...building} /> )
  ]
), [])

export const cards = [
  ...buildingCards,
];