console.clear();
import request from "supertest";
import { app } from "../../app";

jest.mock("../../nats-wrapper");

it("should return current user if user have a JWT token in request header", async () => {
  const user = await request(app).post("/api/auth/signup").send({
    email: "test@gmail.com",
    password: "1234567",
    fullName: "Test",
    userName: "test",
  });

  await request(app)
    .get("/api/auth/me")
    .set("Authorization", `Bearer ${user.body.token}`)
    .send()
    .expect(200);
});

it("should return 400 if user does not have a JWT token in request header", async () => {
  await request(app).get("/api/auth/me").send().expect(400);
});
