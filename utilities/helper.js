const ONE = 1;
const TEN = 10;

module.exports = {
  handlePagination: function (pageNumber =ONE, perPage = TEN) {
    if (isNaN(pageNumber)) {
      throw new Error('page parameter must be a number');
    }

    if (isNaN(perPage)) {
      throw new Error('per page parameter must be a number');
    }

    return { limit: parseInt(perPage), offset: parseInt((parseInt(pageNumber)-ONE) * parseInt(perPage)) };
  }
};