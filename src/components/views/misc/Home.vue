<template>
	<base-layout>
		<h1>Home</h1>
		<ul>
			<li><router-link to="/tasks/">Tasks</router-link></li>
		</ul>
	</base-layout>
</template>

<script>
const BaseLayout = require('../../layouts/BaseLayout.vue');

module.exports = {
	components: {
		BaseLayout,
	},
};
</script>
