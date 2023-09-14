import { box } from "@styles/helpers";
import styled from "styled-components";

export const Divider = styled.div`
  ${box("100%", "1px")};
  background-color: ${({ theme }) => theme.divider};
  margin: 20px 0px;
`;