<script>
  import { onMount } from 'svelte';
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
  import { goto } from '$app/navigation';

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

  let searchTerm = '';
  $: filteredArtists = filterArtists(artists, searchTerm);

  function filterArtists(artists, term) {
    if (!term.trim()) return artists;
    
    const lowercaseTerm = term.toLowerCase();
    return Object.entries(artists).reduce((acc, [date, acts]) => {
      const filteredActs = acts.filter(act => 
        act.artistName.toLowerCase().includes(lowercaseTerm) ||
        act.description.toLowerCase().includes(lowercaseTerm) ||
        act.tags.some(tag => tag.toLowerCase().includes(lowercaseTerm))
      );
      if (filteredActs.length > 0) {
        acc[date] = filteredActs;
      }
      return acc;
    }, {});
  }

  onMount(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const initialSearch = searchParams.get('search');
    if (initialSearch) {
      searchTerm = initialSearch;
    }
  });
</script>

<div class="sticky top-0 z-50">
  <div class="max-w-3xl mx-auto px-4 py-2 items-center space-x-4 grid grid-cols-[10%_80%_10%]">
    <button 
      on:click={() => goto('/')}
      class="text-main-highlight hover:text-sub-highlight focus:outline-none"
      aria-label="Go back"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
        <path d="M10 6L4 12L10 18"/>
        <path d="M4 12H20"/>
      </svg>
    </button>
    <div class="contents">
      <input
        type="text"
        bind:value={searchTerm}
        class="w-full py-2 pl-3 pr-10 text-base bg-transparent border-b-2 border-main-highlight focus:outline-none focus:border-main-highlight font-custom tracking-widest"
      />
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#92ff97">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
  </div>
</div>

{#each Object.entries(filteredArtists).sort((a, b) => dayjs(a[0]).diff(dayjs(b[0]))) as [date, acts]}
  <h1 class="text-9xl text-center font-custom text-main-highlight">{date}</h1>
  <Timeline position="alternate" style="padding: 0">
    {#each acts as act}
      <TimelineItem>
        <TimelineOppositeContent slot="opposite-content">
          {#if act.startDate}
            <p class="font-custom text-text-black">{dayjs(act.startDate).format("HH:mm")}–{dayjs(act.endDate).format("HH:mm")}</p>
          {/if}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot style="background: #af5339; border-color: #af5339"/>
          <TimelineConnector style="background: #af5339"/>
        </TimelineSeparator>
        <TimelineContent>
          <Card.Root class="bg-main-background border-sub-lowlight border-4 rounded-none text-left sm:max-w-none max-w-[40vw] sm:overflow-auto" id="{act.artistName}">
            <Card.Header class="pb-1">
              <div class="relative w-full h-[112.5px] overflow-hidden">
                <a href={act.dekmentalLink} target="_blank">
                  <enhanced:img src={imageModules[`/src/lib/assets/${act.image}.webp`].default} alt="image of {act.artistName}" class="w-full h-full object-cover border-0" />
                </a>
              </div>
              <Card.Title class="font-custom tracking-wide text-sub-lowlight"><a href="#{act.artistName}">{act.artistName}</a></Card.Title>
              <Card.Description>
                <Progress value={act.rating*10} />
                <div class="flex gap-1 mt-2 flex-wrap">
                  {#each act.tags as tag}
                    <Badge class="font-custom bg-text-black text-main-background text-xs text-nowrap">{tag}</Badge>
                  {/each}
                </div>
              </Card.Description>
            </Card.Header>
            <Card.Content>
              <p class="font-custom text-text-black hyphens-auto break-words">{act.description}</p>
              <a class="font-custom text-sub-highlight tracking-wide hover:text-hover text-nowrap" href={act.youtubeLink} target="_blank">Youtube <svg class="inline hover:stroke-hover mb-[5px]" width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="Interface / External_Link">
                    <path id="Vector" d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11" stroke="#af5339" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
              </svg></a>
            </Card.Content>
            {#if act.overlappingArtists.length}
              <Card.Footer class="bg-sub-highlight p-3">
                <p class="block font-custom text-main-highlight tracking-wider text-sm">Overlapping with: <span class="">{act.overlappingArtists.join(", ")}</span></p>
              </Card.Footer>
            {/if}
          </Card.Root>
        </TimelineContent>
      </TimelineItem>
    {/each}
  </Timeline>
{/each}

{#if Object.keys(filteredArtists).length === 0}
  <p class="text-center text-2xl font-custom text-main-highlight mt-10">No results found for "{searchTerm}"</p>
{/if}
