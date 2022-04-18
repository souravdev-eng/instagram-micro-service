import { Listener, Subjects, UserCreatedEvent } from "@instagram-dev/common";
import { Message } from "node-nats-streaming";
import { User } from "../../model/userModel";

export class UserCreatedListener extends Listener<UserCreatedEvent> {
  subject: Subjects.UserCreated = Subjects.UserCreated;
  queueGroupName = "post-service";

  async onMessage(data: UserCreatedEvent["data"], msg: Message) {
    const { id, email, fullName, userName, profileURL } = data;
    const user = User.build({ id, email, fullName, userName, profileURL });

    await user.save();

    msg.ack();
  }
}
