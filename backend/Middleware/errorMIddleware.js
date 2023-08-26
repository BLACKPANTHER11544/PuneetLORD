const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  // for normal Custom error (apart form async errors)
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;

  // Mongoose cast-error
  if (err.name === "CastError" && err.kind === "ObjectId") {
    message = "Resource Not Found";
    statusCode = 404;
  }

  res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === "Production" ? "Pancakes" : err.stack,
  });
};

export { notFound, errorHandler };
