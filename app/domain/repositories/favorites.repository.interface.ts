
export interface FavoritesRepositoryInterface {
    add(key: number, signal?: AbortSignal): Promise<void | null>
    remove(key: number, signal?: AbortSignal): Promise<void | null>
}
