<script>
  import dayjs from 'dayjs';
  import * as Card from "$lib/components/ui/card";
  import { Progress } from "$lib/components/ui/progress";
  import {
		Timeline,
		TimelineItem,
		TimelineSeparator,
		TimelineDot,
		TimelineConnector,
		TimelineContent,
    TimelineOppositeContent
	} from 'svelte-vertical-timeline';


  export let data;
  const { artists } = data;
</script>

{#each Object.entries(artists) as [date, acts]}
  <div class="relative bg-green-50 m-10 p-10">
    <h1 class="text-xl font-bold">{date}</h1>
    <Timeline position="alternate">
      {#each acts as act}
        <TimelineItem>
          <TimelineOppositeContent slot="opposite-content">
            <p>{dayjs(act.startDate).format("HH:mm")}–{dayjs(act.endDate).format("HH:mm")}</p>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
        <Card.Root>
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
      </TimelineContent>
    </TimelineItem>
      {/each}
    </Timeline>
  </div>
{/each}
