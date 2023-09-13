import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  box-shadow: 2px 2px 2px rgb(0 0 0 / 12%);
  background-color: ${({ theme }) => theme.white};
`

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

