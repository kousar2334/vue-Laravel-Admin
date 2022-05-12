<template>
	<div class="c-app flex-row align-items-center" v-if="is_login_checked">
		<CContainer>
			<CRow class="justify-content-center">
				<CCol md="8">
					<CCardGroup>
						<CCard class="p-4">
							<CCardBody>
								<CForm>
									<h1>Login</h1>
									<p class="text-muted">Sign In to your account</p>
									<CInput placeholder="Username" autocomplete="username email" v-model="email" class="mb-0">
										<template #prepend-content><CIcon name="cil-user" /></template>
									</CInput>
									<div v-if="errors.email">
										<small class="text text-danger mt-0" v-for="(error, index) in errors.email" :key="index">{{ error }}</small>
									</div>
									<CInput
										placeholder="Password"
										type="password"
										autocomplete="curent-password"
										v-model="password"
										class="mb-0 mt-4"
									>
										<template #prepend-content><CIcon name="cil-lock-locked" /></template>
									</CInput>
									<div v-if="errors.error">
										<small class="text text-danger mt-0">{{ errors.error }}</small>
									</div>
									<CRow class="mt-4">
										<CCol col="6" class="text-left">
											<CButton color="primary" class="px-4" @click="admin_login">Login</CButton>
										</CCol>
										<CCol col="6" class="text-right">
											<CButton color="link" class="px-0">Forgot password?</CButton>
										</CCol>
									</CRow>
								</CForm>
							</CCardBody>
						</CCard>
						<CCard color="primary" text-color="white" class="text-center py-5 d-md-down-none" body-wrapper>
							<CCardBody>
								<h2>Sign up</h2>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
									magna aliqua.
								</p>
								<CButton color="light" variant="outline" size="lg"> Register Now! </CButton>
							</CCardBody>
						</CCard>
					</CCardGroup>
				</CCol>
			</CRow>
		</CContainer>
	</div>
</template>

<script>
import axios from "axios";
export default {
	metaInfo() {
		return {
			title: this.title,
		};
	},
	data() {
		return {
			title: "Login",
			email: "",
			password: "",
			errors: {},
			is_login_checked: false,
		};
	},
	mounted() {
		this.checkIsLogin();
	},
	methods: {
		/**
		 * Admin login
		 */
		admin_login() {
			localStorage.removeItem("adminSessionToken");
			let credentials = {
				email: this.email,
				password: this.password,
			};
			axios
				.post("/api/admin-login", credentials)
				.then((response) => {
					if (response.data.success) {
						this.errors = {};
						this.$store.dispatch("login", response).then(() => {
							return this.$router.push({ name: "Dashboard" });
						});
					} else {
						this.errors = response.data.errors;
					}
				})
				.catch((response) => {
					this.flash("Something went wrong");
				});
		},
		/**
		 * Check admin is already login or not
		 */
		checkIsLogin() {
			if (this.$store.state.isLogin) {
				return this.$router.push({ name: "Dashboard" });
			}

			this.is_login_checked = true;
		},
	},
};
</script>
