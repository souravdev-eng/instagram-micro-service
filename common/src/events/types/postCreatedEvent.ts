import { Subjects } from "../subjects/Subjects";

export interface PostCreatedEvent {
  subject: Subjects.PostCreated;
  data: {
    id: string;
    title: string;
    photoUrl: string;
    userId: string;
  };
}
