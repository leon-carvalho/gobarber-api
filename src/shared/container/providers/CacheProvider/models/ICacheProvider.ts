export default interface ICacheProvider {
  invalidate(key: string): Promise<void>;
  recover(key: string): Promise<string | null>;
  save(key: string, value: string): Promise<void>;
}
