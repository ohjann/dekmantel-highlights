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
  <div class="relative bg-[#8fa1ae]">
    <h1 class="text-xl font-custom text-[#92ff97]">{date}</h1>
    <Timeline position="alternate">
      {#each acts as act}
        <TimelineItem>
          <TimelineOppositeContent slot="opposite-content">
            {#if act.startDate}
              <p class="font-custom">{dayjs(act.startDate).format("HH:mm")}–{dayjs(act.endDate).format("HH:mm")}</p>
            {/if}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot style="background: #af5339; border-color: #af5339"/>
            <TimelineConnector style="background: #af5339"/>
          </TimelineSeparator>
          <TimelineContent>
            <Card.Root class="bg-[#8fa1ae] border-[#6a6b59] border-4 rounded-none">
              <Card.Header>
                <div class="relative w-full h-[112.5px] overflow-hidden">
                  <a href={act.dekmentalLink} target="_blank">
                    <img src={act.image} class="w-full h-full object-cover border-0">
                  </a>
                </div>
                <Card.Title class="font-custom tracking-wide text-[#6a6b59]">{act.artistName}</Card.Title>
                <Card.Description>
                  <Progress value={act.rating*10} />
                </Card.Description>
              </Card.Header>
              <Card.Content>
                <p>{act.description}</p>
                <a class="text-[#af5339]" href={act.youtubeLink} target="_blank">Music sample</a>
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
