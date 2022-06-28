import { plainToInstance, Type, ClassConstructor } from 'class-transformer';

export function ClassType(typeFunction: () => Function) {
  return Type(typeFunction);
}

export function plainToClassInstance<T>(cls: ClassConstructor<T>, plain: unknown): T {
  return plainToInstance(cls, plain);
}
