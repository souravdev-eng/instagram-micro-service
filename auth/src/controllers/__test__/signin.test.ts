console.clear();
import request from "supertest";
import { app } from "../../app";
jest.mock("../../nats-wrapper");

const newUser = {
  email: "sourav.dev@gmail.com",
  password: "1234567",
  userName: "sourav_dev",
  fullName: "Sourav Majumdar",
};

describe("Success", () => {
  it("should return 200 if user successfully login", async () => {
    await request(app).post("/api/auth/signup").send(newUser).expect(201);
    const response = await request(app)
      .post("/api/auth/signin")
      .send({
        email: newUser.email,
        password: newUser.password,
      })
      .expect(200);
    expect(response.body.token).toBeDefined();
  });
});

describe("Failure", () => {
  it("should return 400 if user email does not exist", async () => {
    await request(app).post("/api/auth/signup").send(newUser).expect(201);

    await request(app)
      .post("/api/auth/signin")
      .send({
        email: "sourav@gmail.com",
        password: "1234567",
      })
      .expect(400);
  });
  it("should return 400 if user password does not exist", async () => {
    await request(app).post("/api/auth/signup").send(newUser).expect(201);

    await request(app)
      .post("/api/auth/signin")
      .send({
        email: newUser.email,
        password: "12345670000",
      })
      .expect(400);
  });
});
