const { apiSuccessRes, apiErrorRes } = require("../../utils/commonResponse.js");
const { errorResponse, CrudMessage, ServerStatusCode } = require("../../utils/constants");
const {
  getNgos,
  updateNgos,
  getNgoCount,
  likeNgo,
  disLikeNgo
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


exports.ngoCount = async (req, res) => {
  try {
    const result = await getNgoCount(req);
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
    console.log("ngoCount Error ===> ", error);
    apiErrorRes(
      res,
      [errorResponse.SOMETHING_WRONG],
      ServerStatusCode.SERVER_ERROR
    );
  }
};

exports.like = async (req, res) => {
  try {
    const result = await likeNgo(req);
    if (result.response) {
      apiSuccessRes(
        res,
        [CrudMessage.UPDATE_SUCCESS],
        "Updated successfully",
        ServerStatusCode.SUCCESS_CODE,
        ''
      );
    } else if(result.wrongId) {
      apiErrorRes(res, [errorResponse.BAD_REQUEST], ServerStatusCode.BAD_REQUEST, true);
    } else {
      apiErrorRes(res, [errorResponse.SOMETHING_WRONG], ServerStatusCode.UNPROCESSABLE, true);
    }
  } catch (error) {
    console.log("like Ngo Error ===> ", error);
    apiErrorRes(
      res,
      [errorResponse.SOMETHING_WRONG],
      ServerStatusCode.SERVER_ERROR
    );
  }
};

exports.disLike = async (req, res) => {
  try {
    const result = await disLikeNgo(req);
    if (result.response) {
      apiSuccessRes(
        res,
        [CrudMessage.UPDATE_SUCCESS],
        "Updated successfully",
        ServerStatusCode.SUCCESS_CODE,
        ''
      );
    } else if(result.wrongId) {
      apiErrorRes(res, [errorResponse.BAD_REQUEST], ServerStatusCode.BAD_REQUEST, true);
    } else {
      apiErrorRes(res, [errorResponse.SOMETHING_WRONG], ServerStatusCode.UNPROCESSABLE, true);
    }
  } catch (error) {
    console.log("disLike ngo Error ===> ", error);
    apiErrorRes(
      res,
      [errorResponse.SOMETHING_WRONG],
      ServerStatusCode.SERVER_ERROR
    );
  }
};