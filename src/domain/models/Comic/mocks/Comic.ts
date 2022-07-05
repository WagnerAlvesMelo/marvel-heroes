import IsoDate from 'domain/type-objects/iso-date';
import Comic from 'domain/models/Comic/Comic';

export default function makeComicMock(): Comic {
  return new Comic({
    id: 22506,
    digitalId: 10949,
    title: 'Mocked Comic',
    dates: [
      {
        type: 'onsaleDate',
        date: new IsoDate('2008-12-17T00:00:00-0500'),
      },
    ],
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/d/03/58dd080719806',
      extension: 'jpg',
      mountedThumbnail: 'http://i.annihil.us/u/prod/marvel/i/mg/d/03/58dd080719806.jpg',
    },
  });
}
