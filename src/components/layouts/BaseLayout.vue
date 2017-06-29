<style scoped>
</style>

<template>
	<div class="wrapper">
		<div class="menu">
			<router-link v-if="backTo" :to="backTo">←</router-link>
		</div>
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
module.exports = {
	props: [
		'backTo',
	],

	mounted() {
		const els = Array.from(this.$el.querySelectorAll('[routing-animation]'));
		els.forEach((el, index)=>{
			setTimeout(()=>el.classList.add('is-preparedRoutingAnimation'), 50 * index);
		});
	},
};
</script>
