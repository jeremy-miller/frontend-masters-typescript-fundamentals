export class Book {
  deweyDecimalNumber(): number {
    return 42;
  }
}

// use open interface to add "book" type to DataTypeRegistry
declare module "../lib/registry" {
  export interface DataTypeRegistry {
    book: Book;
  }
}
