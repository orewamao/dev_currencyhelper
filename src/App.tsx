import { useState, useEffect } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { MenuFoldOutlined, MenuUnfoldOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons'
import { Button, Layout, Menu, theme } from 'antd'
import './index.css'

const { Header, Sider, Content } = Layout

function App() {

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const menuItems: any[] = [
    {
      key: 'cur-list',
      icon: <UserOutlined />,
      label: '货币列表',
    },
    {
      key: 'api-prvd-conf',
      icon: <VideoCameraOutlined />,
      label: 'API配置',
    },
    {
      key: 'other',
      icon: <UploadOutlined />,
      label: '其它',
    },
  ];

  const [, setCurrentMenu] = useState({})
  const [, setSelectedKeys] = useState([{}]);
  const location = useLocation();

  useEffect(() => {
    setSelectedKeys([location.pathname]);
    setCurrentMenu(menuItems.find((item) => item.key === location.pathname));
  }, [location]);

  return (
    <Layout style={{ height: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo">
        <img src="https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/d0a4481f-e801-4cb7-9daa-17cdae32cc89/icon-design-21-opt.png" alt="Logo" />
      </div>
      <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={menuItems.map((item) => {
            return {
              key: item.key,
              label: <NavLink to={item.key}>{item.label}</NavLink>,
              disabled: item.disabled,
              icon: item.icon,
            };
          })}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default App

