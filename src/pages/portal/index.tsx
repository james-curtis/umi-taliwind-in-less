import { Button } from 'antd';
import styles from './index.scss';

export default () => {
  return (
    <div>
      <span className={styles.testMain}>sdfd</span>
      <Button>只有 Admin 可以看到这个按钮</Button>
    </div>
  );
};
