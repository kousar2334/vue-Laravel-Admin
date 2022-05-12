<template>
	<CRow>
		<CCol col="12" lg="5">
			<CCard>
				<CCardHeader>My Account Information </CCardHeader>
				<CCardBody>
					<center>
						<img :src="'/' + user_info.image" class="my-account-image" v-if="user_info.image" />
					</center>
					<ul class="offset-lg-2 offset-sm-0 col-sm-12 col-lg-8 mt-3">
						<li class="d-flex justify-content-between align-items-center">
							<div class="col-3">Name:</div>
							<div class="col-9">{{ user_info.name }}</div>
						</li>
						<li class="d-flex justify-content-between align-items-center">
							<div class="col-3">Email:</div>
							<div class="col-9">{{ user_info.email }}</div>
						</li>
						<li class="d-flex justify-content-between align-items-center">
							<div class="col-3">Role:</div>
							<div class="col-9">{{ user_info.role_name }}</div>
						</li>
					</ul>
				</CCardBody>
			</CCard>
		</CCol>
		<CCol col="12" lg="7">
			<CRow>
				<CCol col="12" lg="12">
					<CCard>
						<CCardHeader>Update Account Information </CCardHeader>
						<CCardBody>
							<CForm>
								<CInput class="mb-0 mt-3" label="Name" horizontal v-model="name" placeholder="Enter Name" />
								<div v-if="errors.name" class="offset-sm-3">
									<small class="text text-danger tex-sm" v-for="(error, index) in errors.name" :key="index">{{ error }}</small>
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
									<small class="text text-danger tex-sm" v-for="(error, index) in errors.email" :key="index">{{ error }}</small>
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
									<small class="text text-danger tex-sm" v-for="(error, index) in errors.image" :key="index">{{ error }}</small>
								</div>
								<CButton class="mt-3" color="success" @click.prevent="updateProfile" block>Update Account</CButton>
							</CForm>
						</CCardBody>
					</CCard>
				</CCol>
				<CCol col="12" lg="12">
					<CCard>
						<CCardHeader>Update Password </CCardHeader>
						<CCardBody>
							<CForm>
								<CInput
									class="mb-0 mt-3"
									label="Password"
									horizontal
									v-model="password"
									type="password"
									placeholder="Enter Password"
								/>
								<CInput
									label="Confirm Password"
									v-model="confirm_password"
									placeholder="Confirm Password"
									type="password"
									horizontal
									required
									class="mb-0 mt-3"
								/>
								<div v-if="errors.password" class="offset-sm-3">
									<small class="text text-danger tex-sm" v-for="(error, index) in errors.password" :key="index">{{
										error
									}}</small>
								</div>
								<CButton class="mt-3" color="success" @click.prevent="updatePassword" block>Update Password</CButton>
							</CForm>
						</CCardBody>
					</CCard>
				</CCol>
			</CRow>
		</CCol>
	</CRow>
</template>

<script>
import store from "../../store/index";
import axios from "axios";
export default {
	name: "User",
	metaInfo() {
		return {
			title: this.title,
		};
	},
	data() {
		return {
			title: "My Account",
			usersOpened: null,
			user_info: {},
			name: "",
			email: "",
			password: "",
			confirm_password: "",
			image_placeholder: "Choose image",
			image: "",
			errors: [],
		};
	},
	mounted() {
		this.getProfileDetails();
	},
	methods: {
		/**
		 *Get my profile details
		 */
		getProfileDetails() {
			axios.defaults.headers.common = {
				Authorization: `Bearer ${localStorage.getItem("adminSessionToken")}`,
			};
			axios
				.post("/api/get-user-profile-details")
				.then((response) => {
					if (response.data.success) {
						this.user_info = response.data.user;
						this.name = response.data.user.name;
						this.email = response.data.user.email;
					} else {
						this.flash("Something went wrong", "error");
					}
				})
				.catch((error) => {
					this.flash("Something went wrong", "error");
				});
		},
		/**
		 * Get image
		 */
		getImage(event) {
			this.image_placeholder = event[0].name;
			this.image = event[0];
		},
		/**
		 * Update my profile
		 */
		updateProfile() {
			this.errors = [];
			axios.defaults.headers.common = {
				Authorization: `Bearer ${localStorage.getItem("adminSessionToken")}`,
			};
			let data = new FormData();
			data.append("name", this.name);
			data.append("email", this.email);
			data.append("image", this.image);
			axios
				.post("/api/update-user-profile", data, {
					headers: {
						"Content-Type": "multipart/form-data",
					},
				})
				.then((response) => {
					if (response.data.success) {
						this.image = "";
						this.image_placeholder = "Choose image";
						this.errors = [];
						store.dispatch("isLogin");
						this.flash("Profile updated successfully", "success");
						this.getProfileDetails();
					} else {
						this.flash("Something went wrong", "error");
					}
				})
				.catch((error) => {
					if (error.response.status === 400) {
						this.errors = error.response.data;
					} else {
						this.flash("Something went wrong " + error.response.status, "error");
					}
				});
		},
		/**
		 * Update my profile
		 */
		updatePassword() {
			this.errors = [];
			axios.defaults.headers.common = {
				Authorization: `Bearer ${localStorage.getItem("adminSessionToken")}`,
			};
			let data = new FormData();
			data.append("password", this.password);
			data.append("password_confirmation", this.confirm_password);
			axios
				.post("/api/update-user-password", data)
				.then((response) => {
					if (response.data.success) {
						this.password = "";
						this.confirm_password = "";
						this.errors = [];
						this.flash("Password updated sucessfully", "Success");
					} else {
						this.flash("Something went wrong", "error");
					}
				})
				.catch((error) => {
					if (error.response.status === 400) {
						this.errors = error.response.data;
					} else {
						this.flash("Something went wrong " + error.response.status, "error");
					}
				});
		},
	},
};
</script>
