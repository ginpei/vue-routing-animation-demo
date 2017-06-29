<template>
	<base-layout backTo="/">
		<h1 routing-animation>About</h1>
		<ul>
			<li routing-animation>Author: <a href="https://github.com/ginpei/">@ginpei</a></li>
			<li routing-animation>Codes: <a href="https://github.com/ginpei/vue-routing-animation-demo">ginpei/vue-routing-animation-demo</a></li>
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
