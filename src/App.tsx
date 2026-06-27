import { useState } from 'react';
import { Card, Typography, Space, Button, ConfigProvider, theme } from 'antd';
import AppLayout from './components/AppLayout';

const { Title, Paragraph } = Typography;

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ConfigProvider
      theme={{
        algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      <AppLayout darkMode={darkMode} onToggleDarkMode={() => setDarkMode(!darkMode)}>
        <Card>
          <Space direction="vertical" size="large">
            <Title level={2}>欢迎使用 React + TypeScript + Ant Design</Title>
            <Paragraph>
              项目已配置好 axios 请求工具，可以在 <code>src/utils/request.ts</code> 中查看。
            </Paragraph>
            <Paragraph>
              使用 <code>import request from './utils/request'</code> 发起 API 请求。
            </Paragraph>
            <Space>
              <Button type="primary">主要按钮</Button>
              <Button>默认按钮</Button>
              <Button danger>危险按钮</Button>
            </Space>
          </Space>
        </Card>
      </AppLayout>
    </ConfigProvider>
  );
}

export default App;
