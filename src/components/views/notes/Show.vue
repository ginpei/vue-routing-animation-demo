<style scoped>
</style>

<template>
	<base-layout backTo="/notes/">
		<template v-if="note">
			<h1 routing-animation>{{note.title}}</h1>
			<p routing-animation>Ipsum odio similique officia magni libero Optio illum error magnam non commodi Perspiciatis tempore doloremque odit quo corrupti rerum Cumque placeat aperiam aperiam suscipit fuga at Tenetur cum repellat eveniet?</p>
			<p routing-animation>Elit esse ducimus iusto odio iure neque! Impedit amet perspiciatis a fugit praesentium Facilis explicabo repellendus nisi ipsum odio perferendis dicta ea deserunt Illo molestiae excepturi repellat placeat ex. Eos.</p>
			<p routing-animation>Amet inventore tempora voluptatibus optio quibusdam. Soluta hic repellat sequi consequatur magnam. Dolorum nemo illo ullam officia nesciunt? Magnam neque beatae autem aspernatur itaque Porro voluptates dolor non tempore aut?</p>
		</template>
		<template v-else>
			<div>Wow</div>
		</template>
	</base-layout>
</template>

<script>
const BaseLayout = require('../../layouts/BaseLayout.vue');

module.exports = {
	components: {
		BaseLayout,
	},

	data() {
		const id = Number(this.$route.params.id);
		const note = this.$store.state.note.items.find(d=>d.id===id);
		return {
			note,
		};
	},
};
</script>
