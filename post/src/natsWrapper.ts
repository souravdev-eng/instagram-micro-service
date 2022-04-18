import nats, { Stan } from "node-nats-streaming";

class NatsWrapper {
  private _client?: Stan;

  get client() {
    if (!this._client) {
      throw new Error(
        "Nats Server did not connect before initialize the nats client "
      );
    }
    return this._client;
  }

  connect(clusterId: string, clientId: string, url: string) {
    this._client = nats.connect(clusterId, clientId, { url });

    return new Promise<void>((resolve, reject) => {
      this.client.on("connect", () => {
        console.log("Nats server is connected!");
        resolve();
      });

      this.client.on("error", (err) => {
        console.log("Nats connection is closed!");
        reject(err);
      });
    });
  }
}

export const natsWrapper = new NatsWrapper();
