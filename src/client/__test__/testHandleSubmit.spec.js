// to solve ReferenceError: regeneratorRuntime is not defined
// https://knowledge.udacity.com/questions/174638
import "babel-polyfill";
import handleSubmit from "../js/formHandler";

describe("Client Test", () => {
  test("It should be a function", async () => {
    expect(typeof handleSubmit).toBe("function");
  });

  test("It should return true", async () => {
    expect(handleSubmit).toBeDefined();
  });
});
