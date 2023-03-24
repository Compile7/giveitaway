const { apiSuccessRes, apiErrorRes } = require("../../utils/commonResponse.js");
const { errorResponse, CrudMessage, ServerStatusCode } = require("../../utils/constants");
const {
  getEvent,
  AddEventClickCount,
  getBasicStats
} = require("./event.service");

exports.getEventCount = async (req, res) => {
  try {
    const result = await getEvent(req);
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
    console.log("getEventCount Error ===> ", error);
    apiErrorRes(
      res,
      [errorResponse.SOMETHING_WRONG],
      ServerStatusCode.SERVER_ERROR
    );
  }
};

exports.AddEventCount = async (req, res) => {
  try {
    const result = await AddEventClickCount(req);
    if (result.response) {
      apiSuccessRes(
        res,
        [CrudMessage.ADD_SUCCESS],
        result.response,
        ServerStatusCode.SUCCESS_CODE,
        ''
      );
    } else {
      apiErrorRes(res, [errorResponse.SOMETHING_WRONG], ServerStatusCode.UNPROCESSABLE, true);
    }
  } catch (error) {
    console.log("AddEventCount Error ===> ", error);
    apiErrorRes(
      res,
      [errorResponse.SOMETHING_WRONG],
      ServerStatusCode.SERVER_ERROR
    );
  }
};

exports.getBasicInfo = async (req, res) => {
  try {
    const result = await getBasicStats(req);
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
    console.log("getBasicInfo Error ===> ", error);
    apiErrorRes(
      res,
      [errorResponse.SOMETHING_WRONG],
      ServerStatusCode.SERVER_ERROR
    );
  }
};