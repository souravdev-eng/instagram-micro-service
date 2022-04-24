import { PostCreatedEvent, Publisher, Subjects } from "@instagram-dev/common";

export class PostCreatedPublisher extends Publisher<PostCreatedEvent> {
  subject: Subjects.PostCreated = Subjects.PostCreated;
}
