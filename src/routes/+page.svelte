<script lang="ts">
	const screenshot = (async () => await (await fetch('/')).text())()
</script>

{#await screenshot}
	<p>Loading...</p>
{:then answer}
	<img src={answer} alt="Screenshot" />
{/await}
