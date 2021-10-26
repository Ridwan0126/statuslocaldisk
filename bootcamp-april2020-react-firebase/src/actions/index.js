const doLogin = payload => {
    return { type: "LOGIN_OK", payload: { user: payload } }
}

export { doLogin }