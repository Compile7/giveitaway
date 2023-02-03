const apiSuccessRes = (res, message, result, code, error) => {
  return res.status(code).json({
    IsSuccess: true,
    ResponseStatusCode: code,
    Message: message,
    Result: result,
    Error: error,
  });
};
const apiErrorRes = (res, message, code, error) => {;
  return res.status(code).json({
    IsSuccess: false,
    ResponseStatusCode: code,
    Message: message,
    Error: error,
  });
};


module.exports = { apiSuccessRes, apiErrorRes };
