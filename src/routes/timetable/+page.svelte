<script>
  import Timecell from "$lib/components/ui/Timecell.svelte";
  import Timetablecell from "$lib/components/ui/Timetablecell.svelte"
  import Dayprogressbar from '$lib/components/ui/Dayprogressbar.svelte'
</script>
<div class="bg-[#FFB076] p-4 relative">
  <div class="grid grid-cols-[0_repeat(8,minmax(0,1fr))] grid-flow-col grid-rows-41 font-custom text-[#15387a] relative">
    <Dayprogressbar />
    <div class="text-[#def1cb] relative text-xs sm:text-base"><span class="absolute -bottom-2 sm:-bottom-3 w-[0.8rem] -right-[0.3rem] sm:-right-3 sm:w-5 bg-[#FFB076] [writing-mode:vertical-lr] sm:[writing-mode:initial]">13</span></div>
    <Timecell time="14" />
    <Timecell time="15" />
    <Timecell time="16" />
    <Timecell time="17" />
    <Timecell time="18" />
    <Timecell time="19" />
    <Timecell time="20" />
    <Timecell time="21" />
    <Timecell time="22" />
    <Timecell time="23" />

    <Timetablecell heading>The Loop</Timetablecell>
    <Timetablecell setlength={180}>Theo Kottis</Timetablecell>
    <Timetablecell setlength={120}>Gabrielle Kwarteng</Timetablecell>
    <Timetablecell setlength={60}>L.B. Dub Corp</Timetablecell>
    <Timetablecell setlength={120}>Palms Trax</Timetablecell>
    <Timetablecell setlength={120}>Carista</Timetablecell>

    <Timetablecell heading>UFO I</Timetablecell>
    <Timetablecell setlength={180}>Wata Igarashi</Timetablecell>
    <Timetablecell setlength={120}>Dasha Rush</Timetablecell>
    <Timetablecell setlength={120}>Jane Fitz</Timetablecell>
    <Timetablecell setlength={60}>Surgeon</Timetablecell>
    <Timetablecell setlength={120}>Talismann</Timetablecell>

    <Timetablecell heading>UFO II</Timetablecell>
    <Timetablecell setlength={180}>Olivia</Timetablecell>
    <Timetablecell setlength={60}>Acid Junkies</Timetablecell>
    <Timetablecell setlength={60}>Detroit in Effect</Timetablecell>
    <Timetablecell setlength={120}>NVST</Timetablecell>
    <Timetablecell setlength={60}>Animistic Beliefs</Timetablecell>
    <Timetablecell setlength={120}>Beverly Hills 808303</Timetablecell>

    <Timetablecell heading>Selectors</Timetablecell>
    <Timetablecell setlength={240}>Dr Banana</Timetablecell>
    <Timetablecell setlength={180}>Vlada</Timetablecell>
    <Timetablecell setlength={180}>Steffi</Timetablecell>

    <Timetablecell heading>Greenhouse</Timetablecell>
    <Timetablecell setlength={210}>Veronica Vasicka</Timetablecell>
    <Timetablecell setlength={60}>Il Quadro Di Troisi</Timetablecell>
    <Timetablecell setlength={30}></Timetablecell>
    <Timetablecell setlength={60}>Peter Hook and the Light</Timetablecell>
    <a class="row-span-8 bg-red-500 bg-opacity-20 border-2 border-[#def1cb] flex items-center justify-center text-center break-words text-xs sm:text-base [writing-mode:vertical-lr] sm:[writing-mode:initial] tracking-wider" href="https://dekmantelfestival.com/artists/in-conversation-lena-willikens-vladimir-ivkovic-talk">Lena Willikens & Vladimir Ivkovic (talk)</a>
    <Timetablecell setlength={120}>Interstellar Funk</Timetablecell>

    <Timetablecell heading>The Nest</Timetablecell>
    <Timetablecell setlength={165}>Rachel Green</Timetablecell>
    <Timetablecell setlength={90}>Bok Bok</Timetablecell>
    <Timetablecell setlength={45}>Cakes Da Killa</Timetablecell>
    <Timetablecell setlength={90}>Safety Trance & Toccororo</Timetablecell>
    <Timetablecell setlength={90}>Pangaea</Timetablecell>
    <Timetablecell setlength={120}>Identified Patient</Timetablecell>

    <Timetablecell heading>Connects</Timetablecell>
    <Timetablecell setlength={90}>William Feltzer</Timetablecell>
    <Timetablecell setlength={120}>Hylke & Zto</Timetablecell>
    <Timetablecell setlength={120}>Doudou MD</Timetablecell>
    <Timetablecell setlength={90}>Naone</Timetablecell>
    <Timetablecell setlength={60}>Reptant</Timetablecell>
    <Timetablecell setlength={120}>Rey Colino & Mary Lake</Timetablecell>

    <Timetablecell heading>Radar</Timetablecell>
    <Timetablecell setlength={120}></Timetablecell>
    <Timetablecell setlength={90}>Francesco Del Garda</Timetablecell>
    <Timetablecell setlength={60}>Konduku</Timetablecell>
    <Timetablecell setlength={60}>Roza Terenzi</Timetablecell>
    <Timetablecell setlength={60}>Aurora Halal</Timetablecell>
    <Timetablecell setlength={60}>Freddy K</Timetablecell>
    <Timetablecell setlength={90}>Salome & SPFDJ</Timetablecell>
    <Timetablecell setlength={60}>Spekki Webu</Timetablecell>
  </div>
</div>
