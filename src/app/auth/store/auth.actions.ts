import { Action } from "@ngrx/store";

export const LOGIN_START = "[Auth] Login Start";
export const AUTHENTICATE_SUCCES = "[Auth] Login";
export const AUTENTHICATE_FAIL = "[Auth] Login Fail";
export const SIGNUP_START = "[Auth] Signup Start";
export const LOGOUT = "[Auth] Logout";

export class AutenthicateSucces implements Action {
  readonly type = AUTHENTICATE_SUCCES;

  constructor(
    public payload: {
      email: string;
      userId: string;
      token: string;
      expirationDate: Date;
    }
  ) {}
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export class LoginStart implements Action {
  readonly type = LOGIN_START;

  constructor(public payload: { email: string; password: string }) {}
}

export class AuthenticateFail implements Action {
  readonly type = AUTENTHICATE_FAIL;

  constructor(public payload: string) {}
}

export class SignupStart implements Action {
  readonly type = SIGNUP_START;

  constructor(public payload: { email: string; password: string }) {}
}

export type AuthActions =
  | AutenthicateSucces
  | Logout
  | LoginStart
  | AuthenticateFail
  | SignupStart;
