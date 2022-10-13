import { history } from 'umi';
import { useEffect } from 'react';

export default () => {
  useEffect(() => {
    history.push('/portal');
  });
  return <></>;
};
