import Character from 'domain/models/Character/Character';
import Thumbnail from 'domain/type-objects/thumbnail';

export default function makeCharacterMock() {
  return new Character({
    id: 1011334,
    name: 'MockedCharacter',
    description: 'MockedDescription',
    modified: '2014-04-29T14:18:17-0400',
    thumbnail: new Thumbnail({
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
      extension: 'jpg',
    }),
    resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011334',
    comics: {
      available: 1,
      collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011334/comics',
      items: [
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/21366',
          name: 'Avengers: The Initiative (2007) #14',
        },
      ],
      returned: 1,
    },
    series: {
      available: 1,
      collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011334/series',
      items: [
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/1945',
          name: 'Avengers: The Initiative (2007 - 2010)',
        },
      ],
      returned: 1,
    },
    stories: {
      available: 1,
      collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011334/stories',
      items: [
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/stories/19947',
          name: 'Cover #19947',
          type: 'cover',
        },
      ],
      returned: 1,
    },
    events: {
      available: 1,
      collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011334/events',
      items: [
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/events/269',
          name: 'Secret Invasion',
        },
      ],
      returned: 1,
    },
    urls: [
      {
        type: 'detail',
        url: 'http://marvel.com/comics/characters/1011334/3-d_man?utm_campaign=apiRef&utm_source=aa85767ec16983d315248eedf25d05e8',
      },
    ],
  });
}
