import { css } from '@emotion/react';
import Image from 'next/image';

import { colors } from '../constants/colors';
import { marginBottom } from '../styles/marginBottom';

const style = {
  container: css`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    align-items: center;
  `,
  list: css`
    display: flex;
  `,
};

export const Header = () => (
  <header css={style.container}>
    <div>
      <Image src='/logo.png' alt='ロゴ' width={100} height={100} layout='intrinsic' />
    </div>
    <nav>
      <ul css={style.list}>
        <li>Profile</li>
        <li>Work</li>
      </ul>
    </nav>
  </header>
);
