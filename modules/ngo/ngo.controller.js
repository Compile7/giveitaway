const { apiSuccessRes, apiErrorRes } = require("../../utils/commonResponse.js");
const { errorResponse, CrudMessage, ServerStatusCode } = require("../../utils/constants");
const {
  getNgos
} = require("./ngo.service");

exports.getNgoList= async (req, res) => {
    try {
      const result = await getNgos(req);
      if (result.response) {
       res.status(ServerStatusCode.SUCCESS_CODE).json({
        IsSuccess: true,
        ResponseStatusCode: ServerStatusCode.SUCCESS_CODE,
        Message: [CrudMessage.RECORD_FETCH],
        Result: result.response,
        Error: ""
      });
      } else {
          apiErrorRes(res,  [errorResponse.SOMETHING_WRONG], ServerStatusCode.UNPROCESSABLE, true);
      }
    } catch (error) {
        console.log("error",error);
      apiErrorRes(
        res,
        [errorResponse.SOMETHING_WRONG],
        ServerStatusCode.SERVER_ERROR
      );
    }
};
