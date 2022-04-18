import { Subjects } from "../subjects/Subjects";
export interface UserCreatedEvent {
    subject: Subjects.UserCreated;
    data: {
        id: string;
        fullName: string;
        email: string;
        profileURL: string;
        userName: string;
    };
}
