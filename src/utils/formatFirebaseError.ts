const formatFirebaseError = (rawErrorMessage : string) => {
  let errorMessageArr = rawErrorMessage
    .slice(22, rawErrorMessage.length - 2)
    .split("-");

  errorMessageArr = errorMessageArr.map((message) => {
    return message[0].toUpperCase() + message.slice(1, message.length);
  });

  let errorMessage = errorMessageArr.join(" ");
  return errorMessage;
};
export default formatFirebaseError;