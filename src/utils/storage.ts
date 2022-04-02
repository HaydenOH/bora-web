export const storage = {
  get(key: string): string | null {
    return localStorage.getItem(key);
  },
  set(key: string, value: any): void {
    localStorage.setItem(key, value);
  },
  remove(key: string): void {
    localStorage.removeItem(key);
  },
  clear(): void {
    localStorage.clear();
  },
};
