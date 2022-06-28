// eslint-disable-next-line max-classes-per-file
import { plainToClassInstance, ClassType } from 'infra/adapters/class/type-mapper';

describe('TypeMapper', () => {
  it('should not transform A class into an instance', () => {
    class A {
      attr!: string;
    }

    class B {
      A: A;

      constructor(a: A) {
        this.A = a;
      }
    }

    const sut = { A: { attr: 'a' } } as B;
    expect(plainToClassInstance(B, sut).A).not.toBeInstanceOf(A);
  });

  it('should transform A class into an instance', () => {
    class A {
      attr!: string;
    }

    class B {
      @ClassType(() => A)
      A: A;

      constructor(a: A) {
        this.A = a;
      }
    }

    const sut = { A: { attr: 'a' } } as B;
    expect(plainToClassInstance(B, sut)).toBeInstanceOf(B);
    expect(plainToClassInstance(B, sut).A).toBeInstanceOf(A);
  });
});
