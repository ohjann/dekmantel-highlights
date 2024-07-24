<script>
  import TimeCell from "$lib/components/ui/timecell.svelte";
  import TimeTableCell from "$lib/components/ui/timetablecell.svelte"
</script>
<div class="bg-[#FFB076] p-4">
  <div class="grid grid-cols-[0_repeat(8,minmax(0,1fr))] grid-flow-col grid-rows-41 font-custom text-[#15387a]">
    <div class="text-[#def1cb] relative text-xs sm:text-base"><span class="absolute -bottom-2 sm:-bottom-3 w-[0.8rem] -right-[0.3rem] sm:-right-3 sm:w-5 bg-[#FFB076] [writing-mode:vertical-lr] sm:[writing-mode:initial]">13</span></div>
    <TimeCell time="14" />
    <TimeCell time="15" />
    <TimeCell time="16" />
    <TimeCell time="17" />
    <TimeCell time="18" />
    <TimeCell time="19" />
    <TimeCell time="20" />
    <TimeCell time="21" />
    <TimeCell time="22" />
    <TimeCell time="23" />

    <TimeTableCell heading>The Loop</TimeTableCell>
    <TimeTableCell span="12">Theo Kottis</TimeTableCell>
    <TimeTableCell span="8">Gabrielle Kwarteng</TimeTableCell>
    <TimeTableCell span="4">L.B. Dub Corp</TimeTableCell>
    <TimeTableCell span="8">Palms Trax</TimeTableCell>
    <TimeTableCell span="8">Carista</TimeTableCell>

    <TimeTableCell heading>UFO I</TimeTableCell>
    <TimeTableCell span="12">Wata Igarashi</TimeTableCell>
    <TimeTableCell span="8">Dasha Rush</TimeTableCell>
    <TimeTableCell span="8">Jane Fitz</TimeTableCell>
    <TimeTableCell span="4">Surgeon</TimeTableCell>
    <TimeTableCell span="8">Talismann</TimeTableCell>

    <TimeTableCell heading>UFO II</TimeTableCell>
    <TimeTableCell span="12">Olivia</TimeTableCell>
    <TimeTableCell span="4">Acid Junkies</TimeTableCell>
    <TimeTableCell span="4">Detroit in Effect</TimeTableCell>
    <TimeTableCell span="8">NVST</TimeTableCell>
    <TimeTableCell span="4">Animistic Beliefs</TimeTableCell>
    <TimeTableCell span="8">Beverly Hills 808303</TimeTableCell>

    <TimeTableCell heading>Selectors</TimeTableCell>
    <TimeTableCell span="16">Dr Banana</TimeTableCell>
    <TimeTableCell span="12">Vlada</TimeTableCell>
    <TimeTableCell span="12">Steffi</TimeTableCell>

    <TimeTableCell heading>Greenhouse</TimeTableCell>
    <TimeTableCell span="14">Veronica Vasicka</TimeTableCell>
    <TimeTableCell span="4">Il Quadro Di Troisi</TimeTableCell>
    <TimeTableCell span="2"></TimeTableCell>
    <TimeTableCell span="4">Peter Hook and the Light</TimeTableCell>
    <a class="row-span-8 bg-red-500 bg-opacity-20 border-2 border-[#def1cb] flex items-center justify-center text-center break-words text-xs sm:text-base [writing-mode:vertical-lr] sm:[writing-mode:initial] tracking-wider" href="https://dekmantelfestival.com/artists/in-conversation-lena-willikens-vladimir-ivkovic-talk">Lena Willikens & Vladimir Ivkovic (talk)</a>
    <TimeTableCell span="8">Interstellar Funk</TimeTableCell>

    <TimeTableCell heading>The Nest</TimeTableCell>
    <TimeTableCell span="11">Rachel Green</TimeTableCell>
    <TimeTableCell span="6">Bok Bok</TimeTableCell>
    <TimeTableCell span="3">Cakes Da Killa</TimeTableCell>
    <TimeTableCell span="6">Safety Trance & Toccororo</TimeTableCell>
    <TimeTableCell span="6">Pangaea</TimeTableCell>
    <TimeTableCell span="8">Identified Patient</TimeTableCell>

    <TimeTableCell heading>Connects</TimeTableCell>
    <TimeTableCell span="6">William Feltzer</TimeTableCell>
    <TimeTableCell span="8">Hylke & Zto</TimeTableCell>
    <TimeTableCell span="8">Doudou MD</TimeTableCell>
    <TimeTableCell span="6">Naone</TimeTableCell>
    <TimeTableCell span="4">Reptant</TimeTableCell>
    <TimeTableCell span="8">Rey Colino & Mary Lake</TimeTableCell>

    <TimeTableCell heading>Radar</TimeTableCell>
    <TimeTableCell span="8"></TimeTableCell>
    <TimeTableCell span="6">Francesco Del Garda</TimeTableCell>
    <TimeTableCell span="4">Konduku</TimeTableCell>
    <TimeTableCell span="4">Roza Terenzi</TimeTableCell>
    <TimeTableCell span="4">Aurora Halal</TimeTableCell>
    <TimeTableCell span="4">Freddy K</TimeTableCell>
    <TimeTableCell span="6">Salome & SPFDJ</TimeTableCell>
    <TimeTableCell span="4">Spekki Webu</TimeTableCell>
  </div>
</div>
