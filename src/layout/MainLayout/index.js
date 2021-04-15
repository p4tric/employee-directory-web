import React, { Suspense } from 'react';
import { useHistory } from 'react-router-dom';

// antd
import { Affix, Layout, Typography } from 'antd';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { setMovieDetail } from '@redux/actions';

// components
import LoadComponent from '@components/LoadComponent';

// styling
import 'antd/dist/antd.css';
import './index.less';

const { Footer, Header, Content } = Layout;
const { Title } = Typography;

const MainLayout = ({ children }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { movieDetail } = useSelector(state => state);

  const handleBack = () => {
    dispatch(setMovieDetail(null));
    history.push('/');
  };

  return (
    <Layout>
      <Affix offsetTop={0}>
        <Header>
          <Title
            className="main-layout-title"
            onClick={handleBack}
            level={2}>
              Movie List
              {movieDetail &&
                <span className="main-layout-sub-title"
                  type="secondary">Click here to go back to movie listing.</span>
              }
            </Title>
        </Header>
      </Affix>


      <Content className="main-layout-content">
        <Suspense fallback={<LoadComponent />}>{children}</Suspense>
      </Content>
      <Footer className="main-layout-footer">
        <div className="footer-container">
          <div>
            <a style={{ textDecoration: 'none' }}
              href="https://github.com/p4tric">
              {`https://github.com/p4tric`}</a></div>
          <div>[©2021 Movies Webapp]</div>
        </div>
      </Footer>
    </Layout>
  );
};

export default MainLayout;
