<style scoped>
</style>

<template>
	<base-layout>
		<template v-if="task">
			<h1>{{task.title}}</h1>
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
		const task = this.$store.state.task.items.find(d=>d.id===id);
		return {
			task,
		};
	},
};
</script>
