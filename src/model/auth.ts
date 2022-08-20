// 임시

enum role {
  CUSTOMER,
  DEILVERY,
}

export interface LoginResponse {
  email: string;
  password: string;
  role: role;
  token: string;
}
