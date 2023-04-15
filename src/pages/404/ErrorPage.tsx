import React from 'react';
import { Button, Result } from 'antd';
import { useTranslation } from 'react-i18next';

const ErrorPage: React.FC = () => {
  const { t } = useTranslation(['errorpage']);

  return (
    <div style={{marginTop:100, marginBottom:100}}>
    <Result
      status="404"
      title={t("statusTitle")}
      // subTitle="Sorry, you are not authorized to access this page."
      subTitle={t("statusPara")}
  
      extra={<Button type="primary" href='/'>{t("statusBtn")}</Button>}
    />
    </div>
  )
};

export default ErrorPage;
;