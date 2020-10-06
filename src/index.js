import { get } from 'lodash';

export const SOME_UNRELATED_CONSTANT = ['a', 'b', 'c'];

class SomeClass {
  static CONSTANT = {
    a: 1,
    b: 2
  };

  constructor() {
    this.somevar = 'abc';
  }

  writeSomething() {
    console.log('def');
  }

  doStuff() {
    const initialObject = { z: 'y', y: 'z' };

    const anotherObject = {
      ...initialObject,
      w: 'x'
    };

    const { z, w } = anotherObject;

    return get(anotherObject, 'w');
  }
}

export default SomeClass;
