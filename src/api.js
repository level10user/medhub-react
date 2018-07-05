import axios from "axios";


export default {
  user: {
    login: credentials => 
      axios.post("/api/auth",  credentials ).then(res => res.data.user),
    signup: user =>
      axios.post("/api/users", { user }).then(res => res.data.user),
    confirm: token =>
      axios
        .post("/api/auth/confirmation", { token })
        .then(res => res.data.user),
    resetPasswordRequest: email =>
      axios.post("/api/auth/reset_password_request", { email }),
    validateToken: token => axios.post("/api/auth/validate_token", { token }),
    resetPassword: data => axios.post("/api/auth/reset_password", { data }),
    profile: user =>
      axios.post("/api/profile", { user }).then(res => res.data.user),
    fetchUser: email => 
      axios.post("/profile", { email } ).then(res => res.data.user),
    updateProfile: data => 
      axios.post("/profile/update", data  ).then(res => res.data.user)
  },
  claims: {
    fetchAll: () => 
      axios.get("/api/claims").then(res => res.data.claims),
    create: newClaim =>
      axios.post("/api/claims", { newClaim }).then(res => res.data.claims)
  }
};