import { plainToInstance, Type, ClassConstructor } from 'class-transformer';

export function ClassType<T>(typeFunction: () => ClassConstructor<any>) {
  return Type(typeFunction);
}

export function plainToClassInstance<T, V extends Array<any>>(
  cls: ClassConstructor<T>,
  plain: V,
): T[];
export function plainToClassInstance<T, V>(cls: ClassConstructor<T>, plain: V): T;
export function plainToClassInstance<T, V>(cls: ClassConstructor<T>, plain: V | V[]): T | T[] {
  return plainToInstance(cls, plain as any);
}
