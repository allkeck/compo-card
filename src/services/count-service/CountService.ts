class CountService {
  private count: number = 1;

  constructor(count?: number) {
    if (count) {
      this.count = count;
    }
  }

  setCount(newCount: number) {
    this.count = newCount;

    return this;
  }

  setFullBoxCount() {
    this.count = 12;

    return this;
  }

  getCount() {
    return this.count;
  }
}

export default new CountService();
