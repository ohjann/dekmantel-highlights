<script>
  import dayjs from 'dayjs';
  export let data;
  const { artists } = data;
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
  const groupedActs = groupActsByStartDate(artists)
  Object.keys(groupedActs).forEach(date => {
    groupedActs[date].sort((a, b) => dayjs(a.startDate).diff(dayjs(b.startDate)));
  });
</script>

{#each Object.entries(groupedActs) as [date, acts]}
  <div class="relative bg-green-50 m-10 p-10">
    <h1>{date}</h1>
    {#each acts as act}
      <div class="bg-gray-100 w-1/3 m-2 rounded-md p-2">
      <h1 class="text-lg font-bold">{act.artistName}</h1>
      <div class="bg-green-200 w-[300px] flex">
        <div class="bg-red-400" style="width: {act.rating * 10}%">{act.rating}</div>
      </div>
      <p>{act.description}</p>
      <a href={act.youtubeLink}>{act.youtubeLink}</a>
      <a href={act.dekmentalLink}>{act.dekmentalLink}</a>
      <p>{act.startDate}</p>
      <p>{act.endDate}</p>
      <img src={act.image} />
      </div>
    {/each}
  </div>
{/each}
