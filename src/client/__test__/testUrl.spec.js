// TODO: import the url check function
import checkURL from "../js/checkURL";

describe("Test check url functionality", () => {
  test("Testing the checkUrl function defined or not", () => {
    expect(typeof checkURL).toBe("function");
  });

  test("Testing the checkUrl function return false for invalid url", () => {
    expect(checkURL("invalid_url")).toBe(false);
  });

  test("Testing the checkUrl function return true for valid url", () => {
    expect(
      checkURL(
        "https://blog.logrocket.com/creating-beautiful-tooltips-with-only-css"
      )
    ).toBe(true);
  });
});
