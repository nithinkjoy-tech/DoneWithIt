import Constants from "expo-constants";

const settings = {
  dev: {
    apiUrl: "http://nkjdonewithit.herokuapp.com/api",
  },
  staging: {
    apiUrl: "http://nkjdonewithit.herokuapp.com/api",
  },
  prod: {
    apiUrl: "http://nkjdonewithit.herokuapp.com/api",
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (Constants.manifest.releaseChannel === "staging") return settings.staging;
  return settings.prod;
};

export default getCurrentSettings();
