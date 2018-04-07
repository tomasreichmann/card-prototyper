import React from 'react';
import { withStyles } from 'material-ui/styles';
import { range } from 'lodash';

import { BuildingCard } from './BuildingCard';
import { OpportunityCard } from './OpportunityCard';
import { EventCard } from './EventCard';
import { UnitMini } from './UnitMini';

import { buildings, placeholders, opportunities, events, units } from '../elements.json';

export const buildingCards = buildings.reduce( (collection, building) => (
  [
    ...collection,
    ...range(building.count).map( buildingIndex => <BuildingCard key={building.name + '-' + buildingIndex} {...building} /> )
  ]
), []);

console.log('placeholders', placeholders);

export const placeholderCards = placeholders.reduce( (collection, item) => (
  [
    ...collection,
    ...range(item.count).map( itemIndex => <BuildingCard key={item.name + '-' + itemIndex} {...item} /> )
  ]
), []);

export const opportunityCards = opportunities.map( (item, itemIndex) => (
  <OpportunityCard {...item} />
) );

export const eventCards = events.reduce( (collection, item) => (
  [
    ...collection,
    ...range(item.count).map( itemIndex => <EventCard key={item.name + '-' + itemIndex} {...item} /> )
  ]
), []);

export const unitMinis = units.reduce( (collection, item) => (
  [
    ...collection,
    ...range(item.count).map( itemIndex => <UnitMini key={item.name + '-' + itemIndex} {...item} /> )
  ]
), []);

export const cards = [
  ...buildingCards,
];