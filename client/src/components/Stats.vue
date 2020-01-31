<template>
	<div class="stats">
		<div class="row">
			<div class="col">
				<h1>Stats</h1>
			</div>
		</div>
		<div class="row">
			<div class="col-6">Chart</div>
			<div class="col-6">
				<div class="row">
					<div v-for="profile in profiles" :key="profile._id">
						Total chore points by {{profile.name}}:
						<childStat :childStatData="profile" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import ChildStat from "@/components/ChildStat";

export default {
	name: "stats",
	mounted() {},
	components: {
		ChildStat
	},
	data() {
		return { count: 0, profileId: this.profileData._id };
	},
	computed: {
		profiles() {
			return this.$store.state.profiles;
		}
	}
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Lato:400,700,400italic");
template {
	--blue: #375a7f;
	--indigo: #6610f2;
	--purple: #6f42c1;
	--pink: #e83e8c;
	--red: #e74c3c;
	--orange: #fd7e14;
	--yellow: #f39c12;
	--green: #00bc8c;
	--teal: #20c997;
	--cyan: #3498db;
	--white: #fff;
	--gray: #999;
	--gray-dark: #303030;
	--primary: #375a7f;
	--secondary: #444;
	--success: #00bc8c;
	--info: #3498db;
	--warning: #f39c12;
	--danger: #e74c3c;
	--light: #999;
	--dark: #303030;
	--font-family-sans-serif: "Lato", -apple-system, BlinkMacSystemFont,
		"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
		"Segoe UI Emoji", "Segoe UI Symbol";
	--font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas,
		"Liberation Mono", "Courier New", monospace;
	overflow: hidden;
}
h1 {
	color: white;
	text-transform: uppercase;
	margin: 5%;
}
.col-6 {
	color: white;
}
</style>