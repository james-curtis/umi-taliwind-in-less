import { Outlet } from 'umi';
import PortalHeader from '@/components/Portal/PortalHeader/PortalHeader';

export default () => {
  return (
    <>
      <PortalHeader />
      <Outlet />
    </>
  );
};
