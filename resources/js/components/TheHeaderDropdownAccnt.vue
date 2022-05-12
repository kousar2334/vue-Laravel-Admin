<template>
	<CDropdown inNav class="c-header-nav-items" placement="bottom-end" add-menu-classes="pt-0">
		<template #toggler>
			<CHeaderNavLink>
				<div class="c-avatar" v-if="user_info">
					<img v-if="user_info.image" :src="'/' + user_info.image" class="c-avatar-img" />

					<img src="img/avatars/6.jpg" class="c-avatar-img" v-else />
				</div>
			</CHeaderNavLink>
		</template>
		<CDropdownHeader tag="div" class="text-center" color="light">
			<strong>Account</strong>
		</CDropdownHeader>
		<CDropdownItem>
			<CIcon name="cil-bell" /> Updates
			<CBadge color="info" class="mfs-auto">{{ itemsCount }}</CBadge>
		</CDropdownItem>
		<CDropdownItem>
			<CIcon name="cil-envelope-open" /> Messages
			<CBadge color="success" class="mfs-auto">{{ itemsCount }}</CBadge>
		</CDropdownItem>
		<CDropdownItem>
			<CIcon name="cil-task" /> Tasks
			<CBadge color="danger" class="mfs-auto">{{ itemsCount }}</CBadge>
		</CDropdownItem>
		<CDropdownItem>
			<CIcon name="cil-comment-square" /> Comments
			<CBadge color="warning" class="mfs-auto">{{ itemsCount }}</CBadge>
		</CDropdownItem>
		<CDropdownHeader tag="div" class="text-center" color="light">
			<strong>Settings</strong>
		</CDropdownHeader>
		<CDropdownItem @click.prevent="manageAccount"><CIcon name="cil-user" />Profile</CDropdownItem>
		<CDropdownItem> <CIcon name="cil-settings" /> Settings </CDropdownItem>
		<CDropdownDivider />
		<CDropdownItem> <CIcon name="cil-shield-alt" /> Lock Account </CDropdownItem>
		<CDropdownItem @click.prevent="logout"> <CIcon name="cil-lock-locked" /> Logout </CDropdownItem>
	</CDropdown>
</template>

<script>
import store from "../store/index";
export default {
	name: "TheHeaderDropdownAccnt",
	data() {
		return {
			itemsCount: 42,
		};
	},
	computed: {
		user_info() {
			return store.state.loggedin_user;
		},
	},
	methods: {
		/**
		 * admin logout
		 */
		logout() {
			this.$store.dispatch("logout").then(() => {
				this.$router.push({ name: "Login" });
			});
		},
		/**
		 * Manage Account link
		 */
		manageAccount() {
			this.$router.push({ name: "Manage Account" });
		},
	},
};
</script>

<style scoped>
.c-icon {
	margin-right: 0.3rem;
}
</style>