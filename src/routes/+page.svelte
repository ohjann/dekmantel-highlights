<script>
  import dayjs from 'dayjs';
  import * as Card from "$lib/components/ui/card";
  import { Progress } from "$lib/components/ui/progress";

  export let data;

  const { artists } = data;
  function findOverlappingArtists(artists) {
    // Convert the artist's start and end times to Date objects
    function parseDate(dateString) {
        return new Date(dateString);
    }

    // Check if two artists' performances overlap
    function isOverlapping(artist1, artist2) {
        const start1 = parseDate(artist1.startDate);
        const end1 = parseDate(artist1.endDate);
        const start2 = parseDate(artist2.startDate);
        const end2 = parseDate(artist2.endDate);
        
        // Check if the time ranges overlap
        return (start1 < end2 && end1 > start2);
    }

    // Add an overlappingArtists array to each artist
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
      const startDate = dayjs(act.startDate).format('dddd, D MMM');
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
</script>

{#each Object.entries(groupedActs) as [date, acts]}
  <div class="relative bg-green-50 m-10 p-10">
    <h1 class="text-xl font-bold">{date}</h1>
    <div class="flex items-stretch gap-4 flex-wrap">
      {#each acts as act}
        <Card.Root class="max-w-80">
          <Card.Header>
            <div class="relative w-full h-[112.5px] rounded-md overflow-hidden">
              <a href={act.dekmentalLink} target="_blank">
                <img src={act.image} class="w-full h-full object-cover rounded-md border-0">
              </a>
            </div>
            <Card.Title>{act.artistName}</Card.Title>
            <Card.Description>
              <Progress value={act.rating*10} />
  </Card.Description>
          </Card.Header>
          <Card.Content>
            <p>{act.description}</p>
            <a class="text-red-500" href={act.youtubeLink} target="_blank">Music sample</a>
            <p>{dayjs(act.startDate).format("HH:mm")}–{dayjs(act.endDate).format("HH:mm")}</p>
            {#if act.overlappingArtists.length}
              <p>Overlapping with: <span class="italic">{act.overlappingArtists.join(", ")}</span></p>
            {/if}
          </Card.Content>
        </Card.Root>
      {/each}
    </div>
  </div>
{/each}
