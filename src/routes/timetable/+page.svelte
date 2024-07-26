<script>
  import timecell from "$lib/components/ui/timecell.svelte";
  import timetablecell from "$lib/components/ui/timetablecell.svelte"
  import dayprogressbar from '$lib/components/ui/dayprogressbar.svelte'
</script>
<div class="bg-[#FFB076] p-4 relative">
  <div class="grid grid-cols-[0_repeat(8,minmax(0,1fr))] grid-flow-col grid-rows-41 font-custom text-[#15387a] relative">
    <DayProgressBar />
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

    <TimetableCell heading>The Loop</TimetableCell>
    <TimetableCell setlength={180}>Theo Kottis</TimetableCell>
    <TimetableCell setlength={120}>Gabrielle Kwarteng</TimetableCell>
    <TimetableCell setlength={60}>L.B. Dub Corp</TimetableCell>
    <TimetableCell setlength={120}>Palms Trax</TimetableCell>
    <TimetableCell setlength={120}>Carista</TimetableCell>

    <TimetableCell heading>UFO I</TimetableCell>
    <TimetableCell setlength={180}>Wata Igarashi</TimetableCell>
    <TimetableCell setlength={120}>Dasha Rush</TimetableCell>
    <TimetableCell setlength={120}>Jane Fitz</TimetableCell>
    <TimetableCell setlength={60}>Surgeon</TimetableCell>
    <TimetableCell setlength={120}>Talismann</TimetableCell>

    <TimetableCell heading>UFO II</TimetableCell>
    <TimetableCell setlength={180}>Olivia</TimetableCell>
    <TimetableCell setlength={60}>Acid Junkies</TimetableCell>
    <TimetableCell setlength={60}>Detroit in Effect</TimetableCell>
    <TimetableCell setlength={120}>NVST</TimetableCell>
    <TimetableCell setlength={60}>Animistic Beliefs</TimetableCell>
    <TimetableCell setlength={120}>Beverly Hills 808303</TimetableCell>

    <TimetableCell heading>Selectors</TimetableCell>
    <TimetableCell setlength={240}>Dr Banana</TimetableCell>
    <TimetableCell setlength={180}>Vlada</TimetableCell>
    <TimetableCell setlength={180}>Steffi</TimetableCell>

    <TimetableCell heading>Greenhouse</TimetableCell>
    <TimetableCell setlength={210}>Veronica Vasicka</TimetableCell>
    <TimetableCell setlength={60}>Il Quadro Di Troisi</TimetableCell>
    <TimetableCell setlength={30}></TimetableCell>
    <TimetableCell setlength={60}>Peter Hook and the Light</TimetableCell>
    <a class="row-span-8 bg-red-500 bg-opacity-20 border-2 border-[#def1cb] flex items-center justify-center text-center break-words text-xs sm:text-base [writing-mode:vertical-lr] sm:[writing-mode:initial] tracking-wider" href="https://dekmantelfestival.com/artists/in-conversation-lena-willikens-vladimir-ivkovic-talk">Lena Willikens & Vladimir Ivkovic (talk)</a>
    <TimetableCell setlength={120}>Interstellar Funk</TimetableCell>

    <TimetableCell heading>The Nest</TimetableCell>
    <TimetableCell setlength={165}>Rachel Green</TimetableCell>
    <TimetableCell setlength={90}>Bok Bok</TimetableCell>
    <TimetableCell setlength={45}>Cakes Da Killa</TimetableCell>
    <TimetableCell setlength={90}>Safety Trance & Toccororo</TimetableCell>
    <TimetableCell setlength={90}>Pangaea</TimetableCell>
    <TimetableCell setlength={120}>Identified Patient</TimetableCell>

    <TimetableCell heading>Connects</TimetableCell>
    <TimetableCell setlength={90}>William Feltzer</TimetableCell>
    <TimetableCell setlength={120}>Hylke & Zto</TimetableCell>
    <TimetableCell setlength={120}>Doudou MD</TimetableCell>
    <TimetableCell setlength={90}>Naone</TimetableCell>
    <TimetableCell setlength={60}>Reptant</TimetableCell>
    <TimetableCell setlength={120}>Rey Colino & Mary Lake</TimetableCell>

    <TimetableCell heading>Radar</TimetableCell>
    <TimetableCell setlength={120}></TimetableCell>
    <TimetableCell setlength={90}>Francesco Del Garda</TimetableCell>
    <TimetableCell setlength={60}>Konduku</TimetableCell>
    <TimetableCell setlength={60}>Roza Terenzi</TimetableCell>
    <TimetableCell setlength={60}>Aurora Halal</TimetableCell>
    <TimetableCell setlength={60}>Freddy K</TimetableCell>
    <TimetableCell setlength={90}>Salome & SPFDJ</TimetableCell>
    <TimetableCell setlength={60}>Spekki Webu</TimetableCell>
  </div>
</div>
