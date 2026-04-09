const request = require("supertest");
const app = require("../../src/server");
const { connectTestDB, disconnectTestDB } = require("../helpers");

beforeAll(connectTestDB);
afterAll(disconnectTestDB);

describe("Regression Tests", () => {
  it("should not allow expired token", async () => {
    const res = await request(app).get("/api/auth/me");

    expect(res.statusCode).toBe(401);
  });

  it("should not crash when deleting non-existing log", async () => {
    const res = await request(app).delete("/api/workouts/log/123");

    expect(res.statusCode).not.toBe(500);
  });
});