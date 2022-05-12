<template>
	<CRow>
		<CCol md="5" lg="5" sm="4">
			<transition name="fade">
				<CRow>
					<!--Create New User-->
					<CCol md="12" lg="12">
						<CCard v-if="showNewUserCard">
							<CCardHeader>
								<strong>Create new user</strong>
								<div class="card-header-actions">
									<CLink class="card-header-action btn-minimize" @click="isCollapsedNewUserCard = !isCollapsedNewUserCard">
										<CIcon :name="`cil-chevron-${isCollapsedNewUserCard ? 'bottom' : 'top'}`" />
									</CLink>
									<CLink href="#" class="card-header-action btn-close" v-on:click="showNewUserCard = false">
										<CIcon name="cil-x-circle" />
									</CLink>
								</div>
							</CCardHeader>
							<CCollapse :show="isCollapsedNewUserCard" :duration="400">
								<CCardBody>
									<CCardBody class="p-0">
										<CForm>
											<div class="form-row form-group mb-20 align-items-center">
												<label class="col-3"> User Role </label>
												<div class="col">
													<v-select
														single
														:options="roles"
														v-model="user_role"
														label="label"
														class="w-100"
														placeholder="Please select a Role"
													/>
													<small v-if="role_error" class="text text-danger">{{ role_error }}</small>
												</div>
											</div>
											<CInput class="mb-0 mt-3" label="Name" horizontal v-model="name" placeholder="Enter Name" />
											<div v-if="errors.name" class="offset-sm-3">
												<small class="text text-danger tex-sm" v-for="(error, index) in errors.name" :key="index">{{
													error
												}}</small>
											</div>
											<CInput
												label="Email"
												v-model="email"
												placeholder="Enter  email"
												type="email"
												horizontal
												required
												class="mb-0 mt-3"
											/>
											<div v-if="errors.email" class="offset-sm-3">
												<small class="text text-danger tex-sm" v-for="(error, index) in errors.email" :key="index">{{
													error
												}}</small>
											</div>
											<CInput
												class="mt-3 mb-0"
												label="Password"
												placeholder="Enter password"
												v-model="password"
												type="password"
												horizontal
											/>
											<div v-if="errors.password" class="offset-sm-3">
												<small class="text text-danger tex-sm" v-for="(error, index) in errors.password" :key="index">{{
													error
												}}</small>
											</div>

											<CInputFile
												label="Image"
												class="mt-3 mb-0"
												horizontal
												custom
												:placeholder="image_placeholder"
												v-on:change="getImage($event)"
											/>
											<div v-if="errors.image" class="offset-sm-3">
												<small class="text text-danger tex-sm" v-for="(error, index) in errors.image" :key="index">{{
													error
												}}</small>
											</div>
											<CButton class="mt-3" color="success" @click.prevent="createNewUser" block>Create Account</CButton>
										</CForm>
									</CCardBody>
								</CCardBody>
							</CCollapse>
						</CCard>
					</CCol>
					<!--End Create New User-->
					<!--update User-->
					<CCol md="12" lg="12">
						<CCard v-if="showUpdateUserCard">
							<CCardHeader>
								<strong>Update user</strong>
								<div class="card-header-actions">
									<CLink class="card-header-action btn-minimize" @click="isCollapsedNewUserCard = !isCollapsedNewUserCard">
										<CIcon :name="`cil-chevron-${isCollapsedNewUserCard ? 'bottom' : 'top'}`" />
									</CLink>
									<CLink href="#" class="card-header-action btn-close" v-on:click="showUpdateUserCard = false">
										<CIcon name="cil-x-circle" />
									</CLink>
								</div>
							</CCardHeader>
							<CCollapse :show="isCollapsedNewUserCard" :duration="400">
								<CCardBody>
									<CCardBody class="p-0">
										<CForm>
											<div class="form-row form-group mb-20 align-items-center">
												<label class="col-3"> User Role </label>
												<div class="col">
													<v-select
														single
														:options="roles"
														v-model="editUser.role"
														label="label"
														class="w-100"
														placeholder="Please select a Role"
													/>
													<small v-if="role_error" class="text text-danger">{{ role_error }}</small>
												</div>
											</div>
											<CInput class="mb-0 mt-3" label="Name" horizontal v-model="editUser.name" placeholder="Enter Name" />
											<div v-if="errors.name" class="offset-sm-3">
												<small class="text text-danger tex-sm" v-for="(error, index) in errors.name" :key="index">{{
													error
												}}</small>
											</div>
											<CInput
												label="Email"
												v-model="editUser.email"
												placeholder="Enter  email"
												type="email"
												horizontal
												required
												class="mb-0 mt-3"
											/>
											<div v-if="errors.email" class="offset-sm-3">
												<small class="text text-danger tex-sm" v-for="(error, index) in errors.email" :key="index">{{
													error
												}}</small>
											</div>
											<CInputFile
												label="Image"
												class="mt-3 mb-0"
												horizontal
												custom
												:placeholder="image_placeholder"
												v-on:change="getImage($event)"
											/>
											<div v-if="errors.image" class="offset-sm-3">
												<small class="text text-danger tex-sm" v-for="(error, index) in errors.image" :key="index">{{
													error
												}}</small>
											</div>
											<CButton class="mt-3" color="success" @click.prevent="updateUser" block>Update User</CButton>
										</CForm>
									</CCardBody>
								</CCardBody>
							</CCollapse>
						</CCard>
					</CCol>
					<!--End update User-->
					<!--Create New Role Modal-->
					<CCol md="12" lg="12">
						<CCard v-if="showNewRoleModal">
							<CCardHeader>
								<strong>Create New User Role</strong>
								<div class="card-header-actions">
									<CLink href="#" class="card-header-action btn-close" v-on:click="showNewRoleModal = false">
										<CIcon name="cil-x-circle" />
									</CLink>
								</div>
							</CCardHeader>
							<CCollapse :show="isCollapsedNewUserPermissionCard" :duration="400">
								<CCardBody>
									<CCardBody class="p-0">
										<CForm>
											<CInput class="mb-0" label="Name" horizontal v-model="role_name" placeholder="Enter Role Name" />
											<div v-if="errors.role_name" class="offset-sm-3">
												<small class="text text-danger tex-sm" v-for="(error, index) in errors.role_name" :key="index">{{
													error
												}}</small>
											</div>
											<h6 class="mt-2 mb-2 font-weight-bold">User's permissions</h6>
											<ul class="list-unstyled d-flex row">
												<li class="mb-20 col-6" v-for="(field, index) in all_permissions" :key="`field-${index}`">
													<span class="custom-checkbox">
														<label class="checkbox-label">
															<input type="checkbox" name="permissionList" :value="field.id" v-model="selectedPermission" />
															<span class="checkbox-text fz-12">{{ field.name }}</span>
														</label>
													</span>
												</li>
											</ul>
											<CButton color="success" @click.prevent="createUserRole" block>Create New User's Role</CButton>
										</CForm>
									</CCardBody>
								</CCardBody>
							</CCollapse>
						</CCard>
					</CCol>
					<!--End Create New Role Modal-->
					<!--Create New Role Modal-->
					<CCol md="12" lg="12">
						<CCard v-if="showUpdatePermissionCard">
							<CCardHeader>
								<strong>Update User Role</strong>
								<div class="card-header-actions">
									<CLink href="#" class="card-header-action btn-close" v-on:click="showUpdatePermissionCard = false">
										<CIcon name="cil-x-circle" />
									</CLink>
								</div>
							</CCardHeader>
							<CCardBody>
								<CCardBody class="p-0">
									<CForm>
										<CInput
											class="mb-0"
											label="Name"
											horizontal
											v-model="role_info.role_name"
											readonly
											placeholder="Enter Role Name"
										/>
										<div v-if="errors.role_name" class="offset-sm-3">
											<small class="text text-danger tex-sm" v-for="(error, index) in errors.role_name" :key="index">{{
												error
											}}</small>
										</div>
										<h6 class="mt-2 mb-2 font-weight-bold">User's permissions</h6>
										<div v-if="errors.permissions" class="offset-sm-3">
											<small class="text text-danger tex-sm" v-for="(error, index) in errors.permissions" :key="index">{{
												error
											}}</small>
										</div>
										<ul class="list-unstyled d-flex row">
											<li class="mb-20 col-6" v-for="(field, index) in all_permissions" :key="`field-${index}`">
												<span class="custom-checkbox">
													<label class="checkbox-label">
														<input type="checkbox" name="permissionList" :value="field.id" v-model="selectedPermission" />
														<span class="checkbox-text fz-12">{{ field.name }}</span>
													</label>
												</span>
											</li>
										</ul>
										<CButton color="success" @click.prevent="updateUserRole" block>Update User's Role</CButton>
									</CForm>
								</CCardBody>
							</CCardBody>
						</CCard>
					</CCol>
					<!--End Create New Role Modal-->
				</CRow>
			</transition>
		</CCol>
		<CCol col="7" xl="7" sm="8">
			<CRow>
				<!--Users table-->
				<CCol md="12" lg="12">
					<CCard>
						<CCardHeader>
							<strong> Users</strong>
							<div class="card-header-actions">
								<CLink
									block
									color="primary"
									class="btn btn-success btn-sm btn-pill btn-round"
									shape="pill"
									aria-pressed="true"
									@click.prevent="showNewUserCard = true"
								>
									Create new user
								</CLink>
								<CLink
									pressed
									block
									class="btn btn-primary text-white btn-sm btn-pill btn-round"
									color="warning"
									shape="pill"
									aria-pressed="true"
									@click.prevent="showUserRoleCard = true"
								>
									User roles
								</CLink>
							</div>
						</CCardHeader>
						<CCardBody>
							<CDataTable
								hover
								striped
								border
								small
								:items="items"
								:fields="fields"
								:items-per-page="perPage"
								:active-page="currentPage"
								:pagination="{ doubleArrows: false, align: 'center' }"
								@page-change="pageChange"
							>
								<template #index="data">
									<td>
										{{ data.index + 1 }}
									</td>
								</template>
								<template #image="data">
									<td>
										<img :src="data.item.image" v-if="data.item.image" class="image-round table-image" />
										<img v-else src="/img/avatars/2.jpg" class="image-round" />
									</td>
								</template>
								<template #action="data">
									<td>
										<p @click="editUserInfo(data.item.id)" class="cursor-pointer btn btn-sm btn-info">Edit</p>
										<p @click.prevent="deleteUser(data.item.id)" class="cursor-pointer btn btn-sm btn-danger">Delete</p>
									</td>
								</template>
							</CDataTable>
						</CCardBody>
					</CCard>
				</CCol>
				<!--End Users table-->
				<!--User Role Table-->
				<CCol md="12" lg="12">
					<CCard v-if="showUserRoleCard">
						<CCardHeader>
							<strong> User Roles</strong>
							<div class="card-header-actions">
								<CLink
									block
									color="warning"
									class="btn btn-primary text-white btn-sm btn-pill btn-round"
									shape="pill"
									aria-pressed="true"
									@click.prevent="displayNewRoleCard"
								>
									Create New User Role
								</CLink>
								<CLink class="card-header-action btn-minimize" @click="isCollapsedUserRoleCard = !isCollapsedUserRoleCard">
									<CIcon :name="`cil-chevron-${isCollapsedUserRoleCard ? 'bottom' : 'top'}`" />
								</CLink>
								<CLink href="#" class="card-header-action btn-close" v-on:click="showUserRoleCard = false">
									<CIcon name="cil-x-circle" />
								</CLink>
							</div>
						</CCardHeader>
						<CCollapse :show="isCollapsedUserRoleCard" :duration="400">
							<CCardBody>
								<CCardBody class="p-0">
									<CDataTable
										hover
										striped
										border
										small
										:items="roles"
										:fields="roleFields"
										:items-per-page="perPage"
										:active-page="currentPage"
										:pagination="{ doubleArrows: false, align: 'center' }"
										@page-change="pageChange"
									>
										<template #index="data">
											<td>
												{{ data.index + 1 }}
											</td>
										</template>
										<template #action="data">
											<td>
												<p @click="getPermissionsOfRole(data.item.id)" class="cursor-pointer btn btn-sm btn-warning text-white">
													Udate Permission
												</p>
											</td>
										</template>
									</CDataTable>
								</CCardBody>
							</CCardBody>
						</CCollapse>
					</CCard>
				</CCol>
				<!--End User Role table-->
			</CRow>
		</CCol>
	</CRow>
</template>

<script>
import axios from "axios";
export default {
	name: "Users",
	metaInfo() {
		return {
			title: this.title,
		};
	},
	data() {
		return {
			title: "Users management",
			showUpdatePermissionCard: false,
			showNewUserCard: true,
			isCollapsedNewUserCard: true,
			showUserRoleCard: false,
			showNewRoleModal: false,
			isCollapsedNewUserPermissionCard: true,
			isCollapsedUserRoleCard: true,
			editUser: {},
			showUpdateUserCard: false,
			items: [],
			errors: [],
			roles: [],
			role_info: {},
			all_permissions: [],
			selectedPermission: [],
			roleFields: [{ key: "index", label: "#" }, { key: "label", label: "Name" }, { key: "action" }],
			fields: [
				{ key: "index", label: "#" },
				{ key: "name", label: "Name" },
				{ key: "image", label: "Image" },
				{ key: "email" },
				{ key: "role", label: "Role" },
				{ key: "action" },
			],
			currentPage: 1,
			perPage: 5,
			role_name: "",
			name: "",
			email: "",
			password: "",
			image_placeholder: "Choose image",
			image: "",
			user_role: "",
			role_error: "",
		};
	},
	watch: {
		$route: {
			immediate: true,
			handler(route) {
				if (route.query && route.query.page) {
					this.currentPage = Number(route.query.page);
				}
			},
		},
		showNewUserCard() {
			if (this.showNewUserCard) {
				this.isCollapsedNewUserCard = true;
			}
		},
	},
	mounted() {
		this.getUsers();
		this.AllRoles();
	},
	methods: {
		/**
		 * Get image from input
		 */
		getImage(event) {
			this.image_placeholder = event[0].name;
			this.image = event[0];
			console.log(event[0].name);
		},
		/**
		 * Get all user list
		 */
		getUsers() {
			axios.defaults.headers.common = {
				Authorization: `Bearer ${localStorage.getItem("adminSessionToken")}`,
			};
			axios
				.post("/api/get-all-users")
				.then((response) => {
					if (response.data.success) {
						this.items = response.data.users;
					} else {
						this.flash("Something went wrong", "error");
					}
				})
				.catch((error) => {
					this.flash("Something went wrong", "error");
				});
		},
		/**
		 * Get all user's role
		 */
		AllRoles() {
			axios.defaults.headers.common = {
				Authorization: `Bearer ${localStorage.getItem("adminSessionToken")}`,
			};
			axios
				.get("/api/get-all-roles")
				.then((response) => {
					if (response.data.success) {
						this.roles = response.data.roles;
					} else {
						this.flash("Something went wrong", "error");
					}
				})
				.catch((error) => {
					this.flash("Something went wrong", "error");
				});
		},
		/**
		 * Display new user role form card
		 */
		displayNewRoleCard() {
			axios.defaults.headers.common = {
				Authorization: `Bearer ${localStorage.getItem("adminSessionToken")}`,
			};
			axios
				.post("/api/get-permission-of-user-role", {
					id: "",
				})
				.then((response) => {
					if (response.data.success) {
						this.all_permissions = response.data.all_permissions;
						this.selectedPermission = response.data.role_permission;
						this.isCollapsedNewUserCard = false;
						this.showNewRoleModal = true;
					} else {
						this.flash("Something went wrong", "error");
					}
				})
				.catch((error) => {
					this.flash("Something went wrong", "error");
				});
		},
		/**
		 * Create new user role
		 */
		createUserRole() {
			axios.defaults.headers.common = {
				Authorization: `Bearer ${localStorage.getItem("adminSessionToken")}`,
			};
			axios
				.post("/api/create-new-user-role", {
					role_name: this.role_name,
					permissions: this.selectedPermission,
				})
				.then((response) => {
					if (response.data.success) {
						this.flash("New role created successfully", "success");
						this.role_name = "";
						this.selectedPermission = [];
						this.errors = [];
						this.AllRoles();
					} else {
						this.flash("Something went wrong", "error");
					}
				})
				.catch((error) => {
					if (error.response.status === 400) {
						this.errors = error.response.data;
					} else {
						this.flash("Something went wrong", "error");
					}
				});
		},
		/**
		 * Update user role
		 */
		updateUserRole() {
			axios.defaults.headers.common = {
				Authorization: `Bearer ${localStorage.getItem("adminSessionToken")}`,
			};
			axios
				.post("/api/update-user-role", {
					role_name: this.role_info.role_name,
					role_id: this.role_info.id,
					permissions: this.selectedPermission,
				})
				.then((response) => {
					if (response.data.success) {
						this.flash("User role updated successfully", "success");
						this.role_name = "";
						this.all_permissions = [];
						this.selectedPermission = [];
						this.errors = [];
						this.showUpdatePermissionCard = false;
						this.isCollapsedNewUserCard = true;
						this.AllRoles();
					} else {
						this.flash("Something went wrong", "error");
					}
				})
				.catch((error) => {
					if (error.response.status === 400) {
						this.errors = error.response.data;
					} else {
						this.flash("Something went wrong", "error");
					}
				});
		},
		/**
		 * Create new user
		 */
		createNewUser() {
			this.role_error = "";
			axios.defaults.headers.common = {
				Authorization: `Bearer ${localStorage.getItem("adminSessionToken")}`,
			};
			if (this.user_role) {
				let role_id = this.user_role.id;
				let data = new FormData();
				data.append("name", this.name);
				data.append("email", this.email);
				data.append("password", this.password);
				data.append("image", this.image);
				data.append("role", role_id);
				axios
					.post("/api/create-new-user", data, {
						headers: {
							"Content-Type": "multipart/form-data",
						},
					})
					.then((response) => {
						if (response.data.success) {
							this.flash("New user created successfully", "success");
							this.name = "";
							this.email = "";
							this.password = "";
							this.user_role = "";
							this.image = "";
							this.errors = [];
							this.getUsers();
						} else {
							this.flash("Something went wrong", "error");
						}
					})
					.catch((error) => {
						if (error.response.status === 400) {
							this.errors = error.response.data;
						} else {
							this.flash("Something went wrong", "error");
						}
					});
			} else {
				this.role_error = "Please select a user role";
			}
		},
		/**
		 * Get single user details
		 */
		editUserInfo(id) {
			axios.defaults.headers.common = {
				Authorization: `Bearer ${localStorage.getItem("adminSessionToken")}`,
			};
			axios
				.post("/api/edit-user", {
					id: id,
				})
				.then((response) => {
					if (response.data.success) {
						this.editUser = response.data.user_info;
						const role = this.roles.filter((role) => role.id == response.data.user_info.role_id);
						this.editUser.role = {
							id: role[0].id,
							label: role[0].label,
						};
						this.showUpdateUserCard = true;
						this.showNewUserCard = false;
					} else {
						this.flash("Something went wrong", "error");
					}
				})
				.catch((error) => {
					this.flash("Something went wrong", "error");
				});
		},
		/**
		 * Update single user
		 */
		updateUser() {
			this.role_error = "";
			axios.defaults.headers.common = {
				Authorization: `Bearer ${localStorage.getItem("adminSessionToken")}`,
			};
			if (this.editUser.role.id) {
				let role_id = this.editUser.role.id;
				let data = new FormData();
				data.append("id", this.editUser.id);
				data.append("name", this.editUser.name);
				data.append("email", this.editUser.email);
				data.append("image", this.image);
				data.append("role", role_id);
				axios
					.post("/api/update-user-info", data, {
						headers: {
							"Content-Type": "multipart/form-data",
						},
					})
					.then((response) => {
						if (response.data.success) {
							this.flash("User information updated successfully", "success");
							this.editUser = {};
							this.image = "";
							this.image_placeholder = "Choose image";
							this.errors = [];
							this.showUpdateUserCard = false;
							this.showNewUserCard = true;
							this.getUsers();
						} else {
							this.flash("Something went wrong", "error");
						}
					})
					.catch((error) => {
						if (error.response.status === 400) {
							this.errors = error.response.data;
						} else {
							this.flash("Something went wrong", "error");
						}
					});
			} else {
				this.role_error = "Please select a user role";
			}
		},
		/**
		 * Delete single user
		 */
		deleteUser(id) {
			axios.defaults.headers.common = {
				Authorization: `Bearer ${localStorage.getItem("adminSessionToken")}`,
			};
			axios
				.post("/api/delete-user", {
					id: id,
				})
				.then((response) => {
					if (response.data.success) {
						this.flash("User deleted successfully", "success");
						this.getUsers();
					} else {
						this.flash("Something went wrong", "error");
					}
				})
				.catch((error) => {
					this.flash("Something went wrong", "error");
				});
		},
		/**
		 * Get all permission of a user role
		 */
		getPermissionsOfRole(id) {
			axios.defaults.headers.common = {
				Authorization: `Bearer ${localStorage.getItem("adminSessionToken")}`,
			};
			axios
				.post("/api/get-permission-of-user-role", {
					id: id,
				})
				.then((response) => {
					if (response.data.success) {
						this.all_permissions = response.data.all_permissions;
						this.selectedPermission = response.data.role_permission;
						this.role_info = response.data.role_info;
						this.isCollapsedNewUserCard = false;
						this.showNewRoleModal = false;
						this.showUpdatePermissionCard = true;
					} else {
						this.flash("Something went wrong", "error");
					}
				})
				.catch((error) => {
					this.flash("Something went wrong", "error");
				});
		},
		/**
		 * Pagination
		 */
		pageChange(val) {
			this.$router.push({ query: { page: val } });
		},
	},
};
</script>
