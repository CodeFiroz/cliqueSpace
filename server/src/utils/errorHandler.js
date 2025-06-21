const errorHandler = (error, req, res, next) => {
  console.error(err.stack);
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "errorHandler :: Server Error 💥",
  });
};

export default errorHandler;