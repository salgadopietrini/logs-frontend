/* Added this eslint to prevent eslint throwing error for the reducers, as they use immer and change the state directly */

module.exports = {
  rules: {
    "no-param-reassign": ["error", { props: false }],
  },
};
