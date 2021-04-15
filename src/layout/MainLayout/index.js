import React, { Suspense } from 'react';
import { useHistory } from 'react-router-dom';

// antd
import { Affix, Layout, Typography } from 'antd';

// components
import LoadComponent from '@components/LoadComponent';

// styling
import 'antd/dist/antd.css';
import './index.less';

const { Footer, Header, Content } = Layout;
const { Title } = Typography;

const MainLayout = ({ children }) => {
  const history = useHistory();

  const handleBack = () => history.push('/');

  return (
    <Layout>
      <Affix offsetTop={0}>
        <Header>
          <Title
            className="main-layout-title"
            onClick={handleBack}
            level={2}>
              Employee Directory Application
            </Title>
        </Header>
      </Affix>


      <Content className="main-layout-content">
        <Suspense fallback={<LoadComponent />}>{children}</Suspense>
      </Content>
      {/*

      */}
      <Footer className="main-layout-footer">
        <div className="footer-container">
          <div>
            <a style={{ textDecoration: 'none' }}
              href="https://github.com/p4tric/employee-directory-web">
              Github</a></div>
          <div>[©2021 Employee Directory Application]</div>
        </div>
      </Footer>
    </Layout>
  );
};

export default MainLayout;
