<template>
	<div class="c-app" v-if="checked_login">
		<TheSidebar />
		<CWrapper>
			<TheHeader />
			<div class="c-body">
				<main class="c-main">
					<CContainer fluid>
						<transition name="fade" mode="out-in">
							<router-view :key="$route.path"></router-view>
						</transition>
					</CContainer>
				</main>
			</div>
			<TheFooter />
		</CWrapper>
	</div>
</template>

<script>
import TheHeader from "../components/TheHeader.vue";
import TheFooter from "../components/TheFooter.vue";
import TheSidebar from "../components/TheSidebar";
import store from "../store/index";
export default {
	name: "Mainlayout",
	components: {
		TheSidebar,
		TheHeader,
		TheFooter,
	},
	data() {
		return {
			checked_login: false,
		};
	},
	mounted() {
		this.checkAuthenticationAndPermissions();
		setInterval(this.checkAuthenticationAndPermissions, 1000 * 60 * 40);
	},
	methods: {
		checkAuthenticationAndPermissions() {
			store.dispatch("isLogin").then(() => {
				store.dispatch("userPermissions").then(() => {
					let current_route_permission = store.getters.has_permission(this.$router.currentRoute.meta.module_permission_id);
					if (!current_route_permission) {
						this.$store.dispatch("logout").then(() => {
							return this.$router.push({ name: "Login" });
						});
					} else {
						this.checked_login = true;
					}
				});
			});
		},
	},
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>
