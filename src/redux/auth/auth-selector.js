const getAuth = state => state.auth.token;
const getUserName = state => state.auth.user.name;

// eslint-disable-next-line
export default { getAuth, getUserName };
