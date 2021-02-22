import { ReactElement } from 'react';

export interface NavProps {}

function Nav(props: NavProps): ReactElement | null {
  console.log(props);
  return <div>Nav</div>;
}

export default Nav;
