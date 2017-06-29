<style scoped>
.note-item {
	border-style: solid;
	border-width: 1px;
	box-sizing: border-box;
	height: 5em;
	margin: 0.5em;
	overflow: auto;
	padding: 1em;
	width: calc(100% / 3 - 1em);
}
</style>

<template>
	<router-link :to="url" class="note-item" routing-animation>
		{{note.title}}
	</router-link>
</template>

<script>
module.exports = {
	props: [
		'note',
	],

	computed: {
		url() {
			return `/notes/${this.note.id}`;
		},
	},
};
</script>
