export interface useAuthProps {
  urlPathname: string;
  setCheckedInput: React.Dispatch<React.SetStateAction<boolean>>;
  checkedInput: boolean;
}
