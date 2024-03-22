import { projectSettings } from '@/settings';

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

  increaseCount(fullBoxCount?: boolean) {
    this.count += fullBoxCount ? projectSettings.fullBoxCount : 1;

    return this;
  }

  decreaseCount(fullBoxCount?: boolean) {
    this.count -= fullBoxCount ? projectSettings.fullBoxCount : 1;

    return this;
  }
}

export default new CountService(0);
