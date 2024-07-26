<script>
  import { base } from '$app/paths';
  import dayjs from "dayjs";
  import isBetween from 'dayjs/plugin/isBetween';
  dayjs.extend(isBetween);
  export let data;
  const { artists } = data;

  const FESTIVAL_START_DATE = dayjs("2024-08-01T12:00:00")
  const now = dayjs("2024-08-03T18:01:00").add(1, 'hour'); // hacky compensation for daylight savings https://github.com/iamkun/dayjs/issues/1260
  function getCurrentAndUpcomingActs(artists) {

    const oneHourLater = now.add(1, 'hour');

    let currentActs = [];
    let upcomingActs = [];

    for (const [date, acts] of Object.entries(artists)) {
      for (const act of acts) {
        if (act.startDate && act.endDate) {
          const startTime = dayjs(act.startDate).add(1, 'hour');
          const endTime = dayjs(act.endDate).add(1, 'hour');

          if (now.isBetween(startTime, endTime)) {
            currentActs.push({ ...act, date });
          } else if (startTime.isBetween(now, oneHourLater)) {
            upcomingActs.push({ ...act, date });
          }
        }
      }
    }

    return { currentActs: currentActs.sort((a,b) => b.rating - a.rating), upcomingActs: upcomingActs.sort((a,b) => b.rating - a.rating) };
  }

  const { currentActs, upcomingActs } = getCurrentAndUpcomingActs(artists);
</script>

<div class="bg-[#8fa1ae] p-4 grid grid-cols-1 grid-rows-3 justify-center items-center w-full gap-10 tracking-wide">
  {#if currentActs.length > 0}
    <h3 class="block text-6xl font-custom text-[#92ff97] row-start-1 col-start-1 justify-self-center text-center">Playing Now</h3>
    <ul class="text-lg row-start-1 col-start-1 justify-self-center text-center">
      {#each currentActs as act}
        <li class="font-custom text-[#303032]">
          <a href="{base}/highlights#{act.artistName}">{act.artistName} -  {act.stage} - <span class="text-nowrap">{dayjs(act.startDate).format("HH:mm")}–{dayjs(act.endDate).format("HH:mm")}</span></a>
        </li>
      {/each}
    </ul>
  {/if}

  {#if upcomingActs.length > 0}
    <h3 class="text-6xl font-custom text-[#af5339] row-start-2 col-start-1 justify-self-center">Next Up</h3>
    <ul class="text-lg row-start-2 col-start-1 justify-self-center text-center">
      {#each upcomingActs as act}
        <li class="font-custom text-[#303032]">
          <a href="{base}/highlights#{act.artistName}">{act.artistName} - {act.stage} - <span class="text-nowrap">{dayjs(act.startDate).format("HH:mm")}–{dayjs(act.endDate).format("HH:mm")}</span></a>
        </li>
      {/each}
    </ul>
  {/if}

  {#if now.isBefore(FESTIVAL_START_DATE)}
    <p class="font-custom text-[#303032] text-center text-2xl">{FESTIVAL_START_DATE.diff(dayjs(now), "days")} days until Dekmantel</p>
  {:else if currentActs.length === 0 && upcomingActs.length === 0}
    <p class="font-custom text-[#303032] text-center">No acts currently playing or starting in the next hour.</p>
  {/if}
  <a href="highlights" class="font-custom text-xl justify-self-center text-[#92ff97] hover:bg-[#92ff97] hover:text-[#8fa1ae] w-full text-center py-4">Highlights</a>
</div>

<enhanced:img src="/src/lib/assets/map.webp" alt="map of amsterdamse bos" class="ml-auto mr-auto" />
