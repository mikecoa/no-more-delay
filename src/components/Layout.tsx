import { ReactNode } from "react";

import { Card } from "antd";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

interface LayoutProps {
  children: ReactNode;
}

const NavigationContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* gap: 20px; */
  align-items: center;
  justify-content: space-between;

  & > div {
    display: inherit;
    flex-direction: inherit;
    align-items: center;
    gap: 1rem;
  }
`;

const StyledMain = styled.main`
  padding: 25px;
`;

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>No More Delay</title>
        <meta content="Generated by create next app" name="description" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <Card>
        <NavigationContainer>
          <h3>No More Delay</h3>
          <div>
            <Link href="/">Explore</Link>
            <Link href="/test">Test</Link>
            <Link href="/chat">Chat</Link>
            <Link href="/profile">Profile</Link>
            {/* <Link href="/help">Need Help</Link> */}
          </div>
        </NavigationContainer>
      </Card>
      <StyledMain>{children}</StyledMain>
    </>
  );
};

export default Layout;
