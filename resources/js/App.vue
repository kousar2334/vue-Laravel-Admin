<template>
	<router-view></router-view>
</template>

<script>
export default {
	name: "App",
	metaInfo: [
		{ title: "Default Title" },
		// all titles will be injected into this template
		{ titleTemplate: "%s | My Awesome Webapp" },
		{
			vmid: "description",
			name: "description",
			content: "my standard description",
		},
	],
};
</script>

<style lang="scss">
// Import Main styles for this application
@import "assets/scss/style";
</style>
