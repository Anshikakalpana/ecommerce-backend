/// <reference types="jest" />

import app from "../../index.js";
import request from "supertest";
import User from "../../app/models/users/userSchema.js";
import bcrypt from "bcryptjs";

jest.mock("../../app/config/redis");

const mockRedis = require("../__mocks__/redis").default;



describe("POST /api/users/login/email", () => {

  beforeAll(async () => {
    const hashed = await bcrypt.hash("pass123", 10);

    await User.create({
      id: "123",
      name: "Test User",
      email: "test@mail.com",
      password: hashed,
      phoneNo: "9876543210",
      address: "Delhi",
      role: "buyer",
      subscription: { isActive: false }
    });
  });

  it("should login successfully", async () => {
    mockRedis.sAdd.mockResolvedValue(1);

    const res = await request(app)
      .post("/api/users/login/email")
      .send({
        email: "test@mail.com",
        password: "pass123",
      });

    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.accesstoken).toBeDefined();
    expect(mockRedis.sAdd).toHaveBeenCalledTimes(1);
  });

  it("should fail with incorrect password", async () => {
    const res = await request(app)
      .post("/api/users/login/email")
      .send({
        email: "test@mail.com",
        password: "wrongpass",
      });

    expect(res.statusCode).toBe(401);
  });
});
