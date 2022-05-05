import {
  Publisher,
  PostTagCreatedEvent,
  Subjects,
} from "@instagram-dev/common";

export class PostTagCreatedPublisher extends Publisher<PostTagCreatedEvent> {
  subject: Subjects.TagsCreated = Subjects.TagsCreated;
}
