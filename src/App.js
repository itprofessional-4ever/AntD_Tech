import React from 'react';
import './App.css';
import 'antd/dist/antd.css';

import AppHeader from './components/common/header';
import AppHome from './views/home';

import { Layout } from 'antd';
import { Footer } from 'antd/lib/layout/layout';
import AppFooter from './components/home/footer';


const { Header, Content } = Layout;

function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
     </Header>
     <Content>
       <AppHome />
     </Content>
     <Footer>
       <AppFooter />
     </Footer>
  </Layout>
  );
}

export default App;
