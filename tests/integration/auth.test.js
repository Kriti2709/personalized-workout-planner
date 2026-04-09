process.env.NODE_ENV = "test";
process.env.JWT_SECRET = "testsecret";
process.env.JWT_REFRESH_SECRET = "refreshsecret";
process.env.JWT_EXPIRES_IN = "1h";          // ✅ ADD THIS
process.env.JWT_REFRESH_EXPIRES_IN = "7d";  // ✅ ADD THIS
const request = require("supertest");
const { connectTestDB, disconnectTestDB } = require("../helpers");

let app;

beforeAll(async () => {
  await connectTestDB();
  app = require("../../src/server"); // 🔥 moved here
});

afterAll(disconnectTestDB);

describe("Auth API", () => {
  it("should register a user", async () => {
    const res = await request(app).post("/api/auth/register").send({
      email: "test@test.com",
      password: "12345678"
    });

    expect(res.statusCode).toBe(201);
  });
});