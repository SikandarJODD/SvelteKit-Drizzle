<script lang="ts">
	export let data;
	$: allUsers = data.allUsers;
</script>

<div class="prose">
	<div class="md:w-[80vw] prose-h1:md:text-5xl">
		<h1>Welcome to SvelteKit + <span class="text-warning">Drizzle ORM</span></h1>
		<blockquote>
			<h4>This Data Comes from Database :</h4>
		</blockquote>
		<div class="px-10">
			<table>
				{#each allUsers as item}
					<tr>
						<th>
							<h3>{item.fullName}</h3>
						</th>
						<th class="shade"><h3>{item.quote}</h3></th>
					</tr>
				{/each}
			</table>
		</div>
	</div>
</div>

<style>
	th,
	tr {
		padding: 0px 10px;
		border: 1px solid #827f7f;
	}
	h3 {
		margin: 10px 5px;
	}
	.shade{
		background: #f5f5f513;
	}
</style>
