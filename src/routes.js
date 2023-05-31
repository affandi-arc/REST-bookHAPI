const {
  addBookHandler, getAllbooks, getBookByIdHandler, editBookById, deleteBookByIdHandler, filterQuery,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: (req, h) => {
      if (Object.keys(req.query).length > 0) {
        return filterQuery(req, h);
      }
      return getAllbooks(req, h);
    },
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookByIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBookById,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookByIdHandler,
  },
];

module.exports = routes;
