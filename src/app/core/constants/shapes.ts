export enum Shapes {
  diamond = 'diamond',
  hexagon = 'hexagon',
  octagon = 'octagon',
  triangle = 'triangle'
}

export class Enum {
  public static names<T>(type: T) {
    const arrNames = [];
    for (const key in type) {
      if (Object.prototype.hasOwnProperty.call(type, key)) {
        arrNames.push(type[key]);
      }
    }

    return arrNames;
  }
}