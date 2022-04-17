import { Stan } from "node-nats-streaming";
import { Subjects } from "./subjects/Subjects";
interface Event {
    subject: Subjects;
    data: any;
}
export declare abstract class Publisher<T extends Event> {
    abstract subject: T["subject"];
    private client;
    constructor(client: Stan);
    published(data: T["data"]): Promise<void>;
}
export {};
