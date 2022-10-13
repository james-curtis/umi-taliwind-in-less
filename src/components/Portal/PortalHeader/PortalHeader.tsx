import style from './PortalHeader.less';
import Logo from '@/components/Portal/PortalHeader/Logo';

export default () => {
  return (
    <header className={[style.header, 'w-full'].join(' ')}>
      <Logo />
    </header>
  );
};
