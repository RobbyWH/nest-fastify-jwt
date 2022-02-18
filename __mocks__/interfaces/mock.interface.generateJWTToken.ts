export interface GenerateJWTToken {
  email: string;
  name: string;
  scope: 'user';
  /** @mockType {random.uuid} */
  external_id: string;
}
