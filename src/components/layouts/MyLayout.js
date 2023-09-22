import styles from './MyLayout.module.css'
import React from 'react';
import { DashboardOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Layout, Menu, theme, Avatar } from 'antd';
import logoImage from '../../assets/logoTiflux.png';
import loginAvatar from '../../assets/loginAvatar.png'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import MyContent from '../contents/MyContent';
import Login from '../login/Login';
const { Header, Content, Footer, Sider } = Layout;

const MyLayout = () => {
    const {
      token: { colorBgContainer },
    } = theme.useToken();
    return (
      <Router>
        <Layout className={styles.container}>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
            style={{
              backgroundColor: '#03363d',
              position: 'relative'
            }}
          >
            <div className={styles.logo}>
            <Link to='/'><img src={logoImage} alt='Logo' style={{ width: '100%', height: '100%' }}/></Link>
            </div>
            <Menu
              style={{
                backgroundColor: 'transparent', 
                color: 'white'
              }}
              mode="inline"
              defaultSelectedKeys={['']}
            >
              <Menu.Item key="1" icon={<DashboardOutlined />}>
                <Link to='/'>Dashboard</Link>
              </Menu.Item>
            </Menu>
            <div className={styles.footerSider}>
              <div className={styles.footerSiderLine}></div>
              <Link to='/'><MenuFoldOutlined className={styles.footerSiderIcon}/></Link>
            </div>
          </Sider>
          <Layout>
            <Header className={styles.header}
              style={{
                padding: 0,
                background: colorBgContainer,
              }}
            >
              <Link to='/login' className={styles.login}>
                <div className={styles.login}>
                  <Avatar size={32} src={loginAvatar} alt='Avatar' className={styles.avatar} />
                  <a className={styles.avatarLabel}>User</a>
                </div>
              </Link>
            </Header>
            <Content
              style={{
                margin: '24px 16px 0',
              }}
            >
              <Routes>
                <Route path="/" element={<MyContent />}  />
                <Route path="/login" element={<Login />}  />
              </Routes>
            </Content>
            <Footer
              style={{
                textAlign: 'center',
              }}
            >
              Ant Design ©2023 Created by Vitor Comin with Ant UED
            </Footer>
          </Layout>
        </Layout>
      </Router>
    );
  };
  export default MyLayout;