import type { ImageProps } from "next/image";
import NextImage from "next/image";
import styled from "styled-components";

const StyledNextImage = styled(NextImage)`
  height: auto;
  width: 100%;
  border-radius: 16px;
  aspect-ratio: 16/9;
  object-fit: cover;
`;

const Image = (props: ImageProps): JSX.Element => (
  <StyledNextImage
    placeholder="blur"
    sizes="(max-width: 768px) 100vw, 50vw"
    {...props}
  />
);

export default Image;
