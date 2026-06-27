import { useState, type ReactNode } from 'react';
import { Layout, Menu, Button } from 'antd';
import {
  HomeOutlined,
  UserOutlined,
  SettingOutlined,
  BulbOutlined,
  BulbFilled,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

const menuItems = [
  { key: '1', icon: <HomeOutlined />, label: '首页' },
  { key: '2', icon: <UserOutlined />, label: '用户' },
  { key: '3', icon: <SettingOutlined />, label: '设置' },
];

interface AppLayoutProps {
  children: ReactNode;
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

export default function AppLayout({ children, darkMode, onToggleDarkMode }: AppLayoutProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div
          style={{
            height: 48,
            margin: 16,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: collapsed ? 14 : 18,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
          }}
        >
          {collapsed ? 'MA' : 'My App'}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={menuItems}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: '0 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          <Button
            icon={darkMode ? <BulbFilled /> : <BulbOutlined />}
            onClick={onToggleDarkMode}
          />
        </Header>
        <Content style={{ margin: 24, padding: 24, minHeight: 280 }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
