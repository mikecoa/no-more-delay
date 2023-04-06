import styled from "styled-components";

interface ContainerProps {
  column?: boolean;
  gap?: number;
}

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div<ContainerProps>`
  display: flex;
  text-align: center;
  ${({ column }) =>
    column ? "flex-direction: column;" : "flex-direction:row;"}
  ${({ gap }) =>
    gap
      ? `
        gap: ${gap}px;
      `
      : "gap: 10px;"}
  align-items: center;
  justify-content: center;
`;
