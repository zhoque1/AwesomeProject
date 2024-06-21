
export interface IStudentRepository {
    add(key: number, signal?: AbortSignal): Promise<void | null>
    remove(key: number, signal?: AbortSignal): Promise<void | null>
    get(key: number, signal?: AbortSignal): Promise<string | null>
    all(signal?: AbortSignal): Promise<string[] | null>
}
