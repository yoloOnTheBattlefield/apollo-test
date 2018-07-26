export const farmer = {
  firstName: "Alex",
  lastName: "Mitchels",
  id: 1,
  email: "email",
  time: "time"
};

export const farmerProps = {
  farmers: [farmer],
  farmer: 1,
  rota: {},
  // Apollo props
  data: {
    loading: false,
    getCompany: { response: { sites: [{ siteId: 1, name: "capera" }] } }
  },
  roles: {
    loading: false,
    getRoles: { response: [{ roleName: "role", role: 1 }] }
  }
};
