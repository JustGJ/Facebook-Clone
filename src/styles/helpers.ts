import { css } from "styled-components";

export const box = (width: string, height?: string) => css`
  width: ${width};
  height: ${height ?? width};
`
export const flexLayout = ({ display = 'flex', direction = 'row', justify = 'stretch', align = 'stretch' }) => css`
  ${display === 'flex-column' &&
  css`
    display: flex;
    flex-direction: column;
  `}
  ${display === 'flex-center' &&
  css`
    display: flex;
    justify-content: center;
    align-items: center;
  `}
  ${display === 'flex-center-column' &&
  css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}
  ${display === 'flex-center-vert' &&
  css`
    display: flex;
    align-items: center;
  `}
  ${display !== 'flex-center' &&
  display !== 'flex-center-column' &&
  display !== 'flex-center-vert' &&
  css`
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
  `}
`;

