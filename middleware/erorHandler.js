module.exports = (err, req, res, next) => {
  let code = 0;
  let name = err.name;
  let message = '';

  switch (name) {
    case 'NOT_FOUND':
      code = 404;
      message = 'data tidak di temukan';
      break;

    case 'UNAUTHORIZED':
      code = 401;
      message = 'prohibited';
      break;

    default:
      code = 500;
      message = 'internal server error';
  }
  res.status(code).json({ message: message });
};
