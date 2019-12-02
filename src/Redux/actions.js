const appLoaded = () => ({
  type: "APP_LOADED"
});

const appLoading = () => ({
  type: "APP_LOADING"
});

const appFailed = () => ({
  type: "APP_FAILED"
});

export const saveUser = (un, pw) => ({
  type: "SAVE_USER",
  username: un,
  password: pw
});

// or if the second option in App.js then comment saveUser out
