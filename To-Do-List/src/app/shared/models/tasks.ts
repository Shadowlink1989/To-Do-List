//letting angular know what a task object looks like
//this template must match the mockdb.json object properties
export class Task {
    id: number;
    title: string;
    timeToComplete: number;
    description: string;
    items: string;
}