import React from 'react';
import { css } from '@emotion/react';

const styles = {
  container: css`
    background-image: url('/mainVisual.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-color: rgba(0, 0, 0, 0.4);
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  text: css`
    color: #333;
  `,
};

export const MainVisual = () => (
  <div css={styles.container}>
    <h1 css={styles.text}>Hikari Portfolio</h1>
  </div>
);
