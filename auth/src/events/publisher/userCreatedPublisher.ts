import { Subjects, Publisher, UserCreatedEvent } from "@instagram-dev/common";

export class UserCreatedPublisher extends Publisher<UserCreatedEvent> {
  subject: Subjects.UserCreated = Subjects.UserCreated;
}
