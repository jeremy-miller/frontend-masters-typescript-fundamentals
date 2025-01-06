export interface DataTypeRegistry {
  // empty by design
}

export function fetchRecord(
  arg: keyof DataTypeRegistry & string, // the "& string" is just a trick to get a nicer tooltip
  id: string
) {}
