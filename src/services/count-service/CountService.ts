class CountService {
  private count: number;

  constructor(count: number) {
    this.count = count;
  }

  setCount(newCount: number) {
    this.count = newCount;

    return this;
  }

  getCount() {
    return this.count;
  }

  increaseCount() {
    this.count += 1;

    return this;
  }

  decreaseCount() {
    this.count -= 1;

    return this;
  }
}

export default new CountService(0);
