export class Magazine {
  issueNumber(): number {
    return 42;
  }
}

// use open interface to add "magazine" type to DataTypeRegistry
declare module "../lib/registry" {
  export interface DataTypeRegistry {
    magazine: Magazine;
  }
}
