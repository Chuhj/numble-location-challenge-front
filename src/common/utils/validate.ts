export const isEmailValid = (email: string) => {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(email);
};

export const isPhoneValid = (phone: string) => {
  const regex = /^010-\d{4}-\d{4}$/;
  return regex.test(phone);
};
