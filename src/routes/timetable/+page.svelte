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
    <TimeTableCell setlength={180}>Theo Kottis</TimeTableCell>
    <TimeTableCell setlength={120}>Gabrielle Kwarteng</TimeTableCell>
    <TimeTableCell setlength={60}>L.B. Dub Corp</TimeTableCell>
    <TimeTableCell setlength={120}>Palms Trax</TimeTableCell>
    <TimeTableCell setlength={120}>Carista</TimeTableCell>

    <TimeTableCell heading>UFO I</TimeTableCell>
    <TimeTableCell setlength={180}>Wata Igarashi</TimeTableCell>
    <TimeTableCell setlength={120}>Dasha Rush</TimeTableCell>
    <TimeTableCell setlength={120}>Jane Fitz</TimeTableCell>
    <TimeTableCell setlength={60}>Surgeon</TimeTableCell>
    <TimeTableCell setlength={120}>Talismann</TimeTableCell>

    <TimeTableCell heading>UFO II</TimeTableCell>
    <TimeTableCell setlength={180}>Olivia</TimeTableCell>
    <TimeTableCell setlength={60}>Acid Junkies</TimeTableCell>
    <TimeTableCell setlength={60}>Detroit in Effect</TimeTableCell>
    <TimeTableCell setlength={120}>NVST</TimeTableCell>
    <TimeTableCell setlength={60}>Animistic Beliefs</TimeTableCell>
    <TimeTableCell setlength={120}>Beverly Hills 808303</TimeTableCell>

    <TimeTableCell heading>Selectors</TimeTableCell>
    <TimeTableCell setlength={240}>Dr Banana</TimeTableCell>
    <TimeTableCell setlength={180}>Vlada</TimeTableCell>
    <TimeTableCell setlength={180}>Steffi</TimeTableCell>

    <TimeTableCell heading>Greenhouse</TimeTableCell>
    <TimeTableCell setlength={210}>Veronica Vasicka</TimeTableCell>
    <TimeTableCell setlength={60}>Il Quadro Di Troisi</TimeTableCell>
    <TimeTableCell setlength={30}></TimeTableCell>
    <TimeTableCell setlength={60}>Peter Hook and the Light</TimeTableCell>
    <a class="row-span-8 bg-red-500 bg-opacity-20 border-2 border-[#def1cb] flex items-center justify-center text-center break-words text-xs sm:text-base [writing-mode:vertical-lr] sm:[writing-mode:initial] tracking-wider" href="https://dekmantelfestival.com/artists/in-conversation-lena-willikens-vladimir-ivkovic-talk">Lena Willikens & Vladimir Ivkovic (talk)</a>
    <TimeTableCell setlength={120}>Interstellar Funk</TimeTableCell>

    <TimeTableCell heading>The Nest</TimeTableCell>
    <TimeTableCell setlength={165}>Rachel Green</TimeTableCell>
    <TimeTableCell setlength={90}>Bok Bok</TimeTableCell>
    <TimeTableCell setlength={45}>Cakes Da Killa</TimeTableCell>
    <TimeTableCell setlength={90}>Safety Trance & Toccororo</TimeTableCell>
    <TimeTableCell setlength={90}>Pangaea</TimeTableCell>
    <TimeTableCell setlength={120}>Identified Patient</TimeTableCell>

    <TimeTableCell heading>Connects</TimeTableCell>
    <TimeTableCell setlength={90}>William Feltzer</TimeTableCell>
    <TimeTableCell setlength={120}>Hylke & Zto</TimeTableCell>
    <TimeTableCell setlength={120}>Doudou MD</TimeTableCell>
    <TimeTableCell setlength={90}>Naone</TimeTableCell>
    <TimeTableCell setlength={60}>Reptant</TimeTableCell>
    <TimeTableCell setlength={120}>Rey Colino & Mary Lake</TimeTableCell>

    <TimeTableCell heading>Radar</TimeTableCell>
    <TimeTableCell setlength={120}></TimeTableCell>
    <TimeTableCell setlength={90}>Francesco Del Garda</TimeTableCell>
    <TimeTableCell setlength={60}>Konduku</TimeTableCell>
    <TimeTableCell setlength={60}>Roza Terenzi</TimeTableCell>
    <TimeTableCell setlength={60}>Aurora Halal</TimeTableCell>
    <TimeTableCell setlength={60}>Freddy K</TimeTableCell>
    <TimeTableCell setlength={90}>Salome & SPFDJ</TimeTableCell>
    <TimeTableCell setlength={60}>Spekki Webu</TimeTableCell>
  </div>
</div>
