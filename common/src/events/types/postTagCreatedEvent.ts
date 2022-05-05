import { Subjects } from "../subjects/Subjects";

interface PostTagCreatedEvent {
  subject: Subjects.TagsCreated;
  data: {
    postId: string;
    userId: string;
    tags: string[];
  };
}
