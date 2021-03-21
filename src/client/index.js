import handleSubmit from "./js/formHandler";
import "./styles/style.scss";
// import "./styles/resets.scss";
// import "./styles/base.scss";
// import "./styles/footer.scss";
// import "./styles/form.scss";
// import "./styles/header.scss";

window.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.getElementById("submit-button");
  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    handleSubmit();
  });
});
export { handleSubmit };
