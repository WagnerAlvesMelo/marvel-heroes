import { plainToInstance, Type, ClassConstructor } from 'class-transformer';

export function ClassType<T>(typeFunction: () => ClassConstructor<T>) {
  return Type(typeFunction);
}

export function plainToClassInstance<T, V extends Array<unknown>>(
  cls: ClassConstructor<T>,
  plain: V,
): T[];
export function plainToClassInstance<T, V>(cls: ClassConstructor<T>, plain: V): T;
export function plainToClassInstance<T, V>(cls: ClassConstructor<T>, plain: V | V[]): T | T[] {
  return plainToInstance(cls, plain);
}
