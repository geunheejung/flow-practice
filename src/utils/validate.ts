const regexp = {
  phone: /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/,
};

const phone = (value: string) => {
  let message = "";
  if (!value) message = "전화번호를 입력하세요";

  if (!regexp.phone.test(value)) message = "양식이 틀렸어요";

  return message;
};

export default {
  phone,
};
