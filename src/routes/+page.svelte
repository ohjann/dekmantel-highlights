<script>
  import { base } from '$app/paths';
  import dayjs from "dayjs";
  import isSameOrAfter from  "dayjs/plugin/isSameOrAfter";
  import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
  import isBetween from "dayjs/plugin/isBetween";
  dayjs.extend(isSameOrAfter);
  dayjs.extend(isSameOrBefore);
  dayjs.extend(isBetween);
  export let data;
  const { artists } = data;

  const FESTIVAL_START_DATE = dayjs("2024-08-01T12:00:00")
  const now = dayjs() 
  function getCurrentAndUpcomingActs(artists) {

    const oneHourLater = now.add(1, 'hour');

    let currentActs = [];
    let upcomingActs = [];

    for (const [date, acts] of Object.entries(artists)) {
      for (const act of acts) {
        if (act.startDate && act.endDate) {
          const startTime = dayjs(act.startDate);
          const endTime = dayjs(act.endDate);

          if (now.isSameOrAfter(startTime) && now.isBefore(endTime)) {
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

<div class="bg-main-background p-4 grid grid-cols-1 grid-rows-3 justify-center items-center w-full gap-10 tracking-wide">
  {#if currentActs.length > 0}
    <h3 class="block text-6xl font-custom text-main-highlight row-start-1 col-start-1 justify-self-center text-center">Playing Now</h3>
    <ul class="text-lg row-start-1 col-start-1 justify-self-center text-center">
      {#each currentActs as act}
        <li class="font-custom text-text-black backdrop-blur-[1px]">
          <a href="{base}/highlights#{act.artistName}">{act.artistName} -  {act.stage} - <span class="text-nowrap">{dayjs(act.startDate).format("HH:mm")}–{dayjs(act.endDate).format("HH:mm")}</span></a>
        </li>
      {/each}
    </ul>
  {/if}

  {#if upcomingActs.length > 0}
    <h3 class="text-6xl font-custom text-sub-highlight row-start-2 col-start-1 justify-self-center">Next Up</h3>
    <ul class="text-lg row-start-2 col-start-1 justify-self-center text-center">
      {#each upcomingActs as act}
        <li class="font-custom text-text-black backdrop-blur-[1px]">
          <a href="{base}/highlights#{act.artistName}">{act.artistName} - {act.stage} - <span class="text-nowrap">{dayjs(act.startDate).format("HH:mm")}–{dayjs(act.endDate).format("HH:mm")}</span></a>
        </li>
      {/each}
    </ul>
  {/if}

  {#if now.isBefore(FESTIVAL_START_DATE)}
    <p class="font-custom text-text-black text-center text-2xl">{FESTIVAL_START_DATE.diff(dayjs(now), "days")} days until Dekmantel</p>
  {:else if currentActs.length === 0 && upcomingActs.length === 0}
    <p class="font-custom text-text-black text-center">No acts currently playing or starting in the next hour.</p>
  {/if}
  <a href="highlights" class="font-custom text-xl justify-self-center text-hover hover:bg-hover hover:text-text-black w-full text-center py-4 border-4 rounded-[100px] border-hover">Highlights</a>
</div>

<div class="relative bg-[#5d6781] mt-5 min-h-[59vh] flex flex-col">
  <svg width="100%" height="100" viewBox="0 0 1000 100" preserveAspectRatio="none" class="rotate-180 absolute -top-20 z-0">
    <path d="M0,0 
      L0,30 
      L20,35 L40,25 L60,40 L80,20 L100,30
      L120,40 L140,25 L160,35 L180,15 L200,30
      L220,40 L240,20 L260,35 L280,25 L300,40
      L320,30 L340,45 L360,20 L380,35 L400,25
      L420,40 L440,30 L460,20 L480,35 L500,25
      L520,40 L540,15 L560,30 L580,45 L600,25
      L620,35 L640,20 L660,40 L680,30 L700,25
      L720,40 L740,20 L760,35 L780,25 L800,40
      L820,30 L840,45 L860,20 L880,35 L900,25
      L920,40 L940,30 L960,20 L980,35 L1000,30
      L1000,0 
      Z" 
      fill="#5d6781"/>
  </svg>

  <enhanced:img src="/src/lib/assets/map.webp" alt="map of amsterdamse bos" class="ml-auto mr-auto z-10 relative" />
  <div class="flex-grow"></div>
</div>
