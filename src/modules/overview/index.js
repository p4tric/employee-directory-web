import React, { useCallback, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

// antd
import { Button, Col, Empty, Row, Typography } from 'antd';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { getEmployeeOverview } from '@redux/actions';

// utils
import { convertToTitleCase } from '@utils/methods';

// components
import RecursiveComponent from './components/RecursiveComponent';

const { Title } = Typography;

const Overview = () => {
  const history = useHistory();
  const location = useLocation();
  const employeeName = location.search?.split('=')[1];

  const dispatch = useDispatch();
  const { employeeTree, position } = useSelector(state => state);

  const getEmployeeDetails = useCallback(() => {
    dispatch(getEmployeeOverview({
      empName: employeeName,
      level: 1,
    }));
  }, [dispatch, employeeName]);

  useEffect(() => {
    getEmployeeDetails();
  }, [getEmployeeDetails]);

  const handleBack = () => {
    history.goBack();
  };

  if (!employeeName || !position) return <Empty description="Employee not found."/>

  return (
      <>
        <Row style={{ height: '55vh' }} align="middle" justify="center">
          <Col style={{ textAlign: 'center' }}>
            <Title level={3}>Employee Overview</Title>
            <Title level={5}>
              Subordinates of employee {decodeURI(employeeName)} ({convertToTitleCase(position)}):
            </Title>

            <div style={{ textAlign: 'left' }}>
              {employeeTree && employeeTree.items.length > 0 ? (
                <RecursiveComponent {...employeeTree} />
              ) : (
                <Empty description="No subordinates found."/>
              )}
            </div>

            <Button size="large" style={{ marginTop: 20 }} type="primary" onClick={handleBack}>
              Back to Search
            </Button>
          </Col>
        </Row>
      </>
    );
};

export default Overview;
