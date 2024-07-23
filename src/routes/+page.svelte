<script>
  import dayjs from 'dayjs';
  import * as Card from "$lib/components/ui/card";
  import { Progress } from "$lib/components/ui/progress";
  import { Badge } from "$lib/components/ui/badge";
  import {
		Timeline,
		TimelineItem,
		TimelineSeparator,
		TimelineDot,
		TimelineConnector,
		TimelineContent,
    TimelineOppositeContent
	} from 'svelte-vertical-timeline';


  const imageModules = import.meta.glob(
		'/src/lib/assets/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}',
		{
			eager: true,
			query: {
				enhanced: true
			}
		}
	)

  export let data;
  const { artists } = data;
</script>

{#each Object.entries(artists) as [date, acts]}
  <div class="relative bg-[#8fa1ae] overflow-hidden">
    <h1 class="text-9xl text-center font-custom text-[#92ff97]">{date}</h1>
    <Timeline position="alternate" style="padding: 0">
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
            <Card.Root class="bg-[#8fa1ae] border-[#6a6b59] border-4 rounded-none text-left sm:max-w-none max-w-[40vw] sm:overflow-auto">
              <Card.Header class="pb-1">
                <div class="relative w-full h-[112.5px] overflow-hidden">
                  <a href={act.dekmentalLink} target="_blank">
                    <enhanced:img src={imageModules[`/src/lib/assets/${act.image}.webp`].default} alt="image of {act.artistName}" class="w-full h-full object-cover border-0" />
                  </a>
                </div>
                <Card.Title class="font-custom tracking-wide text-[#6a6b59]">{act.artistName}</Card.Title>
                <Card.Description>
                  <Progress value={act.rating*10} />
                  <div class="flex gap-1 mt-2 flex-wrap">
                    {#each act.tags as tag}
                      <Badge class="font-custom bg-[#303032] text-[#8fa1ae] text-xs text-nowrap">{tag}</Badge>
                    {/each}
                  </div>
                </Card.Description>
              </Card.Header>
              <Card.Content>
                <p class="font-custom text-[#303032]">{act.description}</p>
                <a class="font-custom text-[#af5339] tracking-wide hover:text-[#695582] text-nowrap" href={act.youtubeLink} target="_blank">Youtube <svg class="inline hover:stroke-[#695582] mb-[5px]" width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Interface / External_Link">
<path id="Vector" d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11" stroke="#af5339" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg></a>
              </Card.Content>
              {#if act.overlappingArtists.length}
                <Card.Footer class="bg-[#af5339] p-3">
                  <p class="block font-custom text-[#92ff97] tracking-wider text-sm">Overlapping with: <span class="">{act.overlappingArtists.join(", ")}</span></p>
                </Card.Footer>
              {/if}
            </Card.Root>
          </TimelineContent>
        </TimelineItem>
      {/each}
    </Timeline>
  </div>
{/each}
