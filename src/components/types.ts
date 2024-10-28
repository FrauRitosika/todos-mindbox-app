type Task = {
    id: number,
    text: string,
    isCompleted: boolean
}

enum FILTER {
    ALL,
    COMPLETED,
    ACTIVE
}

export type { Task }
export { FILTER }