import React from 'react';

import { Typography } from 'antd';

import { convertToTitleCase } from '@utils/methods';

const { Text, Title } = Typography;


const RecursiveComponent = ({ name, position, level, items }) => {
  const hasChildren = items && items.length > 0

  return (
    <>
      {level === 2 &&
        <Title style={{ marginTop: 8 }} level={5}>- {convertToTitleCase(position)}: {name}</Title>
      }

      {level === 3 &&
        <>
          <Text style={{ marginLeft: 20 }} type="secondary">- {convertToTitleCase(position)}: {name}</Text>
          <br/>
        </>
      }

      {level === 4 &&
        <>
          <Text style={{ marginLeft: 30 }}>- {convertToTitleCase(position)}: {name}</Text>
          <br/>
        </>
      }

      {level === 5 &&
        <>
          <Text style={{ marginLeft: 40 }}>- {convertToTitleCase(position)}: {name}</Text>
          <br/>
        </>
      }

      {hasChildren && items.map((item) => (
        <RecursiveComponent key={item.name} {...item} />
      ))}
    </>
  )
};

export default RecursiveComponent;
