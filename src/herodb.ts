import { Hero } from './hero';

let heroes = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' },
];

export function getHeroes(): Hero[] {
  return heroes;
}

export function getHero(id: number): Hero {
  return heroes.find((h: Hero) => {
    return h.id === id;
  });
}

export function addHero(hero: Hero): Hero {
  const foundHero = heroes.find((h: Hero) => {
    return hero.id === h.id;
  });
  if (foundHero === undefined) {
    const maxId = heroes.reduce((p, current, _) => {
      return current.id > p.id ? current : p;
    });
    hero.id = maxId.id + 1;
    heroes.push(hero);
    return hero;
  } else {
    return null;
  }
}

export function updateHero(hero: Hero): Hero {
  let found = false;
  heroes = heroes.map((h: Hero) => {
    if (h.id === hero.id) {
      found = true;
      return hero;
    } else {
      return h;
    }
  });
  if (found) {
    return hero;
  } else {
    return null;
  }
}

export function deleteHero(id: number): Hero {
  const foundHero = heroes.find((h: Hero) => {
    return id === h.id;
  });
  if (foundHero !== undefined) {
    heroes = heroes.filter((h: Hero) => {
      return h.id !== id;
    });
    return foundHero;
  } else {
    return null;
  }
}
