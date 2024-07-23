import fs from 'fs';
import path from 'path';
import dayjs from 'dayjs';

export function load({ params }) {
  const filePath = path.join(process.cwd(), 'server', 'data', 'artists.json');
  const fileContents = fs.readFileSync(filePath, 'utf-8');
  const artists = JSON.parse(fileContents);
  function findOverlappingArtists(artists) {
    function parseDate(dateString) {
      return new Date(dateString);
    }

    function isOverlapping(artist1, artist2) {
      const start1 = parseDate(artist1.startDate);
      const end1 = parseDate(artist1.endDate);
      const start2 = parseDate(artist2.startDate);
      const end2 = parseDate(artist2.endDate);

      return (start1 < end2 && end1 > start2);
    }

    return artists.map(artist => {
      artist.overlappingArtists = artists
        .filter(otherArtist => otherArtist.artistName !== artist.artistName && isOverlapping(artist, otherArtist))
        .map(otherArtist => otherArtist.artistName);
      return artist;
    });

  }
  const overlappingArtists = findOverlappingArtists(artists);

  const groupActsByStartDate = (timetable) => {
    return timetable.reduce((groupedActs, act) => {
      const startDate = act.startDate ? dayjs(act.startDate).format('dddd, D MMM') : 'TBD';
      if (!groupedActs[startDate]) {
        groupedActs[startDate] = [];
      }
      groupedActs[startDate].push(act);
      return groupedActs;
    }, {});
  }
  const groupedActs = groupActsByStartDate(overlappingArtists)
  Object.keys(groupedActs).forEach(date => {
    groupedActs[date].sort((a, b) => dayjs(a.startDate).diff(dayjs(b.startDate)));
  });

  return {
      artists: groupedActs
  };
}
