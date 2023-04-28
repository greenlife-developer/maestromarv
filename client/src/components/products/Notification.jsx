import React from 'react';
// import 'antd/dist/antd.css';
import { SmileOutlined } from '@ant-design/icons';
import { Button, notification } from 'antd';


const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    icon: <SmileOutlined style={{ color: '#108ee9' }} />,
  });
};

const Notification = (props) => (
  <Button type="primary" onClick={openNotification}>
    Open the notification box
  </Button>
);

export default Notification;