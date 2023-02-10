const { apiSuccessRes, apiErrorRes } = require("../../utils/commonResponse.js");
const { errorResponse, CrudMessage, ServerStatusCode } = require("../../utils/constants");
const {
  getNgos,
  updateNgos
} = require("./ngo.service");

exports.getNgoList = async (req, res) => {
  try {
    const result = await getNgos(req);
    if (result.response) {
      apiSuccessRes(
        res,
        [CrudMessage.RECORD_FETCH],
        result.response,
        ServerStatusCode.SUCCESS_CODE,
        ''
      );
    } else {
      apiErrorRes(res, [errorResponse.SOMETHING_WRONG], ServerStatusCode.UNPROCESSABLE, true);
    }
  } catch (error) {
    console.log("getNgoList Error ===> ", error);
    apiErrorRes(
      res,
      [errorResponse.SOMETHING_WRONG],
      ServerStatusCode.SERVER_ERROR
    );
  }
};

exports.updateNgoList = async (req, res) => {
  try {
    const result = await updateNgos(req);
    if (result.response) {
      apiSuccessRes(
        res,
        [CrudMessage.UPDATE_SUCCESS],
        "Updated successfully",
        ServerStatusCode.SUCCESS_CODE,
        ''
      );
    } else if(result.wrongPin) {
      apiErrorRes(res, [errorResponse.BAD_REQUEST], ServerStatusCode.BAD_REQUEST, true);
    } else {
      apiErrorRes(res, [errorResponse.SOMETHING_WRONG], ServerStatusCode.UNPROCESSABLE, true);
    }
  } catch (error) {
    console.log("updateNgoList Error ===> ", error);
    apiErrorRes(
      res,
      [errorResponse.SOMETHING_WRONG],
      ServerStatusCode.SERVER_ERROR
    );
  }
};
