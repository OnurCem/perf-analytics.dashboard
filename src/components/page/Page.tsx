import React, { FunctionComponent } from 'react';
import { Layout } from 'antd';

import logo from 'img/logo.png';

import 'components/page/page.scss';

const { Header, Content } = Layout;

interface PageProps {
  children: React.ReactNode;
}

const Page: FunctionComponent<PageProps> = ({ children }): JSX.Element => (
  <Layout>
    <Header>
      <img className="logo" src={logo as string} alt="PerfAnalytics" />
    </Header>
    <Content>
      <div className="inner-content">{children}</div>
    </Content>
  </Layout>
);

export default Page;
