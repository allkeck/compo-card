export interface ICountService {
  setCount(newCount: number): this;
  setFullBoxCount(): this;
  getCount(): number;
}
