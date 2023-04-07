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
    (column ? "flex-direction: column;" : "flex-direction:row;")}
  ${({ gap }) =>
    (gap
      ? `
        gap: ${gap}px;
      `
      : "gap: 10px;")}
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
