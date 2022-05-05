import { Subjects } from "../subjects/Subjects";

export interface PostTagCreatedEvent {
  subject: Subjects.TagsCreated;
  data: {
    postId: string;
    userId: string;
    tags: string[] | string;
  };
}
