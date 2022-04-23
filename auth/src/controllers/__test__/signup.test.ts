import request from "supertest";
import { app } from "../../app";
import { natsWrapper } from "../../nats-wrapper";

jest.mock("../../nats-wrapper");

const newUser = {
  email: "sourav.dev@gmail.com",
  password: "1234567",
  userName: "sourav_dev",
  fullName: "Sourav Majumdar",
};

describe("Success", () => {
  it("should return 201 if user provide required properties", async () => {
    const response = await request(app).post("/api/auth/signup").send(newUser);
    expect(response.body.token).toBeDefined();
    expect(response.statusCode).toEqual(201);
  });

  it("should published an Event after user create an account", async () => {
    await request(app).post("/api/auth/signup").send(newUser).expect(201);
    expect(natsWrapper.client.publish).toHaveBeenCalled();
  });
});

describe("Failure", () => {
  it("should return 400 if user does not provide required data", async () => {
    await request(app)
      .post("/api/auth/signup")
      .send({
        email: "sourav.dev@gmail.com",
        password: "1234567",
        userName: "sourav_dev",
      })
      .expect(400);
    await request(app)
      .post("/api/auth/signup")
      .send({
        email: "sourav.dev@gmail.com",
        password: "1234567",
        // userName: "sourav_dev",
        fullName: "Sourav Majumdar",
      })
      .expect(400);
    await request(app)
      .post("/api/auth/signup")
      .send({
        // email: "sourav.dev@gmail.com",
        password: "1234567",
        userName: "sourav_dev",
        fullName: "Sourav Majumdar",
      })
      .expect(400);
    await request(app)
      .post("/api/auth/signup")
      .send({
        email: "sourav.dev@gmail.com",
        // password: "1234567",
        userName: "sourav_dev",
        fullName: "Sourav Majumdar",
      })
      .expect(400);
  });

  it("should return 400 if user provide invalid email address or give bellow 6 characters password", async () => {
    await request(app)
      .post("/api/auth/signup")
      .send({
        email: "sourav.devgmail.com",
        password: "1234567",
        userName: "sourav_dev",
        fullName: "Sourav Majumdar",
      })
      .expect(400);
    await request(app)
      .post("/api/auth/signup")
      .send({
        email: "sourav.dev@gmail.com",
        password: "123",
        userName: "sourav_dev",
        fullName: "Sourav Majumdar",
      })
      .expect(400);
  });
});
