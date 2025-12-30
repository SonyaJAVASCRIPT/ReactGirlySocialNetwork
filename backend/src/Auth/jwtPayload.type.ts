export interface jwtPayloadType {
  userId: string;
  username: string;
  iat?: number;
  exp?: number;
}
