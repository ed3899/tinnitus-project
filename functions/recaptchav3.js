const axios = require("axios");

exports.handler = async function({ body }, context) {
  const { VUE_APP_CAPTCHA_V3_SERVER_SIDE } = process.env;
  const { token } = JSON.parse(body);

  try {
    const {
      data: { score },
    } = await axios({
      method: "post",
      url: `https://www.google.com/recaptcha/api/siteverify`,
      params: {
        secret: VUE_APP_CAPTCHA_V3_SERVER_SIDE,
        response: token,
      },
    });

    const isHuman = score > 0.5 ? true : false;

    return {
      statusCode: 200,
      body: JSON.stringify({
        isHuman,
        score,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error,
      }),
    };
  }
};
