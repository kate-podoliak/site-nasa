export class LibraryEntity {
  collection: CollectionEntity;
}

export class CollectionEntity {
  href: string;
  items: [href: string];
  version: number;
}
