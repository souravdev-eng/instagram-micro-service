import { Listener, Subjects, UserCreatedEvent } from "@instagram-dev/common";
import { Message } from "node-nats-streaming";

export class UserCreatedListener extends Listener<UserCreatedEvent> {
  subject: Subjects.UserCreated = Subjects.UserCreated;
  queueGroupName = "followers-service";

  onMessage(data: UserCreatedEvent["data"], msg: Message) {
    //
    msg.ack();
  }
}
