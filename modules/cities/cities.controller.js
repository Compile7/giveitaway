const { apiSuccessRes, apiErrorRes } = require("../../utils/commonResponse.js");
const { errorResponse, CrudMessage, ServerStatusCode } = require("../../utils/constants");
const {
  getCities,
  getActiveCities
} = require("./cities.service");

exports.getCitiesList = async (req, res) => {
  try {
    const result = await getCities(req);
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
    console.log("getCitiesList Error ===> ", error);
    apiErrorRes(
      res,
      [errorResponse.SOMETHING_WRONG],
      ServerStatusCode.SERVER_ERROR
    );
  }
};

exports.getActiveCitiesList = async (req, res) => {
  try {
    const result = await getActiveCities(req);
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
    console.log("getActiveCitiesList Error ===> ", error);
    apiErrorRes(
      res,
      [errorResponse.SOMETHING_WRONG],
      ServerStatusCode.SERVER_ERROR
    );
  }
};