import React from 'react';
import { Layout, Typography } from 'antd';
import ChatInterface from '../components/ChatInterface';

const { Content } = Layout;
const { Title } = Typography;

const CustomerService: React.FC = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content style={{ padding: '24px', background: '#f0f2f5' }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: '24px' }}>
          智能客服中心
        </Title>
        <ChatInterface />
      </Content>
    </Layout>
  );
};

export default CustomerService;