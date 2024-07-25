<script>
  import dayjs from "dayjs";
  import isBetween from 'dayjs/plugin/isBetween';

  dayjs.extend(isBetween);
  export let data;
  const { artists } = data;

  // TODO: UTC time zone confusion here 
  function getCurrentAndUpcomingActs(artists) {
    const now = dayjs("2024-08-03T19:00:00");
    const oneHourLater = now.add(1, 'hour');

    let currentActs = [];
    let upcomingActs = [];

    for (const [date, acts] of Object.entries(artists)) {
      for (const act of acts) {
        if (act.startDate && act.endDate) {
          const startTime = dayjs(act.startDate);
          const endTime = dayjs(act.endDate);

          console.log(act.artistName, startTime.toString(), endTime.toString(), now.toString());
          if (now.isBetween(startTime, endTime)) {
            currentActs.push({ ...act, date });
          } else if (startTime.isBetween(now, oneHourLater)) {
            upcomingActs.push({ ...act, date });
          }
        }
      }
    }

    return { currentActs, upcomingActs };
  }

  const { currentActs, upcomingActs } = getCurrentAndUpcomingActs(artists);
</script>

<div class="bg-[#8fa1ae] p-4 grid grid-cols-1 grid-rows-3 justify-center items-center w-full gap-10">
  {#if currentActs.length > 0}
    <h3 class="block text-6xl font-custom text-[#92ff97] row-start-1 col-start-1 justify-self-center text-center">Playing Now</h3>
    <ul class="text-lg row-start-1 col-start-1 justify-self-center text-center">
      {#each currentActs as act}
        <li class="font-custom text-[#303032]">
          <a href="/highlights#{act.artistName}">{act.artistName} -  {act.stage} - {dayjs(act.startDate).format("HH:mm")}–{dayjs(act.endDate).format("HH:mm")}</a>
        </li>
      {/each}
    </ul>
  {/if}

  {#if upcomingActs.length > 0}
    <h3 class="text-6xl font-custom text-[#af5339] row-start-2 col-start-1 justify-self-center">Next Up</h3>
    <ul class="text-lg row-start-2 col-start-1 justify-self-center text-center">
      {#each upcomingActs as act}
        <li class="font-custom text-[#303032]">
          <a href="/highlights#{act.artistName}">{act.artistName} - {act.stage} - {dayjs(act.startDate).format("HH:mm")}–{dayjs(act.endDate).format("HH:mm")}</a>
        </li>
      {/each}
    </ul>
  {/if}

  {#if currentActs.length === 0 && upcomingActs.length === 0}
    <p class="font-custom text-[#303032]">No acts currently playing or starting in the next hour.</p>
  {/if}
  <a href="highlights" class="font-custom text-xl justify-self-center">Highlights</a>
</div>

<enhanced:img src="/src/lib/assets/map.webp" alt="map of amsterdamse bos" />
