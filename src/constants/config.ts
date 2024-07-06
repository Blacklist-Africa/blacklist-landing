const environment = process.env.REACT_APP_ENVIRONMENT;

const isProduction = environment === "production";

export const config = {
  environment,
  isProduction,
  isStaging: !isProduction,
  isDevelopment: process.env.NODE_ENV === "development",
  social: {
    youtube: "https://www.youtube.com/channel/UC8GP5W3BJun7kt5cNARVsWw",
    instagram: "https://www.instagram.com/blacklist.alu/",
  },
};
