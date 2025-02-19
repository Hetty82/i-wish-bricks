import { Set, Theme } from '../../app/models';

// in Ts for type safety. I'll use this file to generate a JSON

export const sets: Set[] = [
  {
    name: 'Viking Village',
    number: 21343,
    pieceCount: 2103,
    theme: Theme.Ideas,
    price: 139.99,
  },
  {
    name: 'Sandcrawler',
    number: 75059,
    pieceCount: 3296,
    theme: Theme.StarWars,
    price: 299.99,
  },
  {
    name: 'Lion Knights’ Castle',
    number: 10305,
    pieceCount: 4514,
    theme: Theme.Icons,
    price: 399.99,
  },
  {
    name: 'Black Seas Barracuda',
    number: 6285,
    pieceCount: 909,
    theme: Theme.Pirates,
    price: 109.99,
  },
  {
    name: 'Winnie the Pooh',
    number: 21326,
    pieceCount: 1265,
    theme: Theme.Disney,
    price: 99.99,
  },
  {
    name: 'Botanical Garden',
    number: 41757,
    pieceCount: 1072,
    theme: Theme.Friends,
    price: 84.99,
  },
];
