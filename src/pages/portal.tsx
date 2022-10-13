import { Outlet } from 'umi';
import PortalLayout from '@/layouts/PortalLayout';

export default () => {
  return (
    <>
      <PortalLayout>
        <Outlet />
      </PortalLayout>
    </>
  );
};
