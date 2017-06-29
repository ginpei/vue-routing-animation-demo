<style scoped>
.note-list {
	display: flex;
	flex-wrap: wrap;
}

.note-item {
	border: 1px solid #009;
	box-sizing: border-box;
	height: 5em;
	margin: 1em;
	padding: 1em;
	width: calc(100% / 3 - 2em);
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
