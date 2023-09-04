interface ILogiInReq {
  username: string;
  password: string;
}
interface ILogInRes {
  status: number;
  message: string;
  data: AuthData;
}
