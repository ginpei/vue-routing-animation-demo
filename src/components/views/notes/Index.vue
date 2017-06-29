<style scoped>
.note-list {
	display: flex;
	flex-wrap: wrap;
}
</style>

<template>
	<base-layout backTo="/">
		<h1 routing-animation>Notes</h1>
		<div class="note-list">
			<note-item v-for="d in notes" :note="d"></note-item>
		</div>
	</base-layout>
</template>

<script>
const BaseLayout = require('../../layouts/BaseLayout.vue');
const NoteItem = require('./Index-NoteItem.vue');

module.exports = {
	components: {
		BaseLayout,
		NoteItem,
	},

	data() {
		return {
			notes: this.$store.state.note.items,
		};
	},
};
</script>
