import { Injectable } from '@nestjs/common';
@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    const item = 50;
    console.log('Phase 1');
    this.nonBlockingFunc(item);
    console.log('Phase 2');
    this.blockingFunction(item);
    return 'Hello World!';
  }
  blockingFunction(item: number) {
    for (let i = 0; i < item; i++) {
      console.log(`Number: ${i}`);
    }
  }
  async nonBlockingFunc(item: number) {
    for (let i = 0; i < item; i++) {
      console.log(`Number: ${i}`);
      await this.delay(10000);
      console.log('Finish');
    }
  }
  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
