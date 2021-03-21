import "babel-polyfill";
const request = require("supertest");
const app = require("../index");
const json = require("../mockAPI");

describe("Server Test", () => {
  it("should test return data from sentiment API", async () => {
    const res = await request(app).post("/analyse-document").send({
      url:
        "https://blog.logrocket.com/creating-beautiful-tooltips-with-only-css",
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("agreement");
  });
});

describe('Test path "/test"', () => {
  test("It should response the GET method", async () => {
    const response = await request(app).get("/test");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(json);
  });
});
jest.setTimeout(30000);
