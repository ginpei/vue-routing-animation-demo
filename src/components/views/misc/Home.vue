<template>
	<base-layout>
		<h1 routing-animation>Home</h1>
		<ul>
			<li routing-animation><router-link to="/notes/">Notes</router-link></li>
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
