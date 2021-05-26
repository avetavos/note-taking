export class GetAllQuery {
  readonly sortBy: 'title' | 'createdAt';
  readonly orderBy: 'asc' | 'desc';
  readonly tags?: string;
}
