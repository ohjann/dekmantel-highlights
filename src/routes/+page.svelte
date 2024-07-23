<script>
  export let data;
  const { artists } = data;
</script>

{#each artists as artist}
	<h1>{artist.artistName}</h1>
  <span>{artist.rating}</span>
  <p>{artist.description}</p>
    <a href={artist.youtubeLink}>{artist.youtubeLink}</a>
    <a href={artist.dekmentalLink}>{artist.dekmentalLink}</a>
{/each}
