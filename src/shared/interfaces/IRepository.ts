export interface IRepository<T> {
  create(item: Partial<T>): Promise<T>;
  getAll(): Promise<T[]>;
  getById(id: string): Promise<T | null>;
  updateById(id: string, data: Partial<T>): Promise<T | null>;
  deleteById(id: string): Promise<T | null>;
}
