<template>
	<CSidebar fixed :minimize="minimize" :show="show" @update:show="(value) => $store.commit('set', ['sidebarShow', value])">
		<CSidebarBrand class="d-md-down-none" to="/">
			<CIcon class="c-sidebar-brand-full" name="logo" size="custom-size" :height="35" viewBox="0 0 556 134" />
			<CIcon class="c-sidebar-brand-minimized" name="logo" size="custom-size" :height="35" viewBox="0 0 110 134" />
		</CSidebarBrand>

		<CRenderFunction flat :content-to-render="currentItems" v-if="load" />
		<CSidebarMinimizer class="d-md-down-none" @click.native="$store.commit('set', ['sidebarMinimize', !minimize])" />
	</CSidebar>
</template>

<script>
import NavMenuItems from "./nav_menu_items";
import store from "../store/index";
export default {
	name: "TheSidebar",
	NavMenuItems,
	data() {
		return {
			load: true,
			role: "admin",
			newmenuBar: [
				{
					_children: [],
					_name: "CSidebarNav",
					permission: "1",
				},
			],
		};
	},
	mounted() {
		this.checkAuthenticationAndPermissions();
	},
	computed: {
		show() {
			return this.$store.state.sidebarShow;
		},
		minimize() {
			return this.$store.state.sidebarMinimize;
		},
		currentItems() {
			return this.newmenuBar;
		},
	},
	methods: {
		checkAuthenticationAndPermissions() {
			store.dispatch("isLogin").then(() => {
				store.dispatch("userPermissions").then(() => {
					if (NavMenuItems.length > 0) {
						let nav_menus = NavMenuItems[0]._children;
						for (let i = 0; i < nav_menus.length; i++) {
							let has_permission = store.getters.has_permission(nav_menus[i].permission);
							if (has_permission) {
								let nav_menu_sub_items = [];
								if (nav_menus[i].items && nav_menus[i].items.length > 0) {
									for (let j = 0; j < nav_menus[i].items.length; j++) {
										let has_items_permission = store.getters.has_permission(nav_menus[i].items[j].permission);
										if (has_items_permission) {
											nav_menu_sub_items.push(nav_menus[i].items[j]);
										}
									}
								}
								nav_menus[i].items = nav_menu_sub_items;
								this.newmenuBar[0]._children.push(nav_menus[i]);
							}
						}
					}
				});
			});
		},
	},
};
</script>
