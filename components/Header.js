import { css } from '@emotion/react';

const style = css`
  background-color: #000;
`;

export const Header = () => {
  return (
    <header css={style}>
      ここはheaderです。
    </header>
  )
}
