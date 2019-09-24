module.exports = {
  up: queryInterface => {
    return queryInterface.renameColumn('appointments', 'data', 'date');
  },

  down: queryInterface => {
    return queryInterface.renameColumn('appointments', 'date', 'data');
  },
};
