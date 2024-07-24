<script>
  export let heading;
  export let span = "1"
</script>

{#if heading}
  <h1 class="border-b-2 border-[#def1cb] text-[#def1cb] flex items-center justify-center text-center text-xs sm:text-base tracking-wider "><slot /></h1>
{:else}
  <div class="border-2 border-[#def1cb] flex items-center justify-center text-center p-1 break-all text-xs sm:text-base tracking-wider [writing-mode:vertical-lr] sm:[writing-mode:initial]" style="grid-row: span {span} / span {span};"><slot /></div>
{/if}
