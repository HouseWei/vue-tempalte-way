const getters = {
  token: state => state.user.token,
  name: state => state.user.name,
  jobId: state => state.user.jobId,
  roles: state => state.user.roles
}

export default getters
