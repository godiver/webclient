let config;

if (process.env.NODE_ENV === 'production') {
  // production
  return {
      config = process.env.REACT_APP_PROD_API_BASE_URL
  }
} else {
  // development
  return {
      config = process.env.REACT_APP_DEV_API_BASE_URL
  }
}

export default config
