import React from 'react';
import { Button, Result } from 'antd';

const ErrorPage: React.FC = () => {

  return (
    <div style={{marginTop:100, marginBottom:100}}>
    <Result
      status="404"
      title="Page Not Found"
      subTitle="Sorry, you are not authorized to access this page."
  
      extra={<Button type="primary" href='/'>404</Button>}
    />
    </div>
  )
};

export default ErrorPage;