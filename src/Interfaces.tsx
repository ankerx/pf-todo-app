export interface ILoginForm {
        email: string;
        password: string
}
export interface IRegisterForm {
        email: string;
        password: string
        confirmedPassword: string
}
export interface RoutProps {
  user: string,
  children: any
}
export interface InputProps  {
  value: string,
  onChange: () => {},
  // onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export interface Errors {
    email?: string
    password?: string
    confirmedPassword?: string
}

export interface Todo {
  _id?: string,
  name: string

}