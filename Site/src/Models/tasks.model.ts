class Task {
    id: number;
    description: string;
    creatorId: string;
    creatorName: string;
    creationDate: string;

    constructor(description: string, creatorId: string, creatorName: string, creationDate: string, id: number) {
        this.id = id;
        this.description = description;
        this.creatorId = creatorId;
        this.creatorName = creatorName;
        this.creationDate = creationDate;
    }
}

export default Task
