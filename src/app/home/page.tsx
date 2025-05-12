"use client";

import React, { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, Input, Button, Alert } from 'antd';
import Image from 'next/image';
import Title from 'antd/es/typography/Title';
import RegisterPet from "../registerPet/page";
import PetProfile from '../petProfile/[id]/page';

const { Content, Footer, Sider } = Layout;

type MenuItem = {
  key: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
};

type Pet = {
  id: string;
  name: string;
  photo: string;
  birthDate: string;
  weight: number;
  breed: string;
  color: string;
  tutorName: string;
  cpf: string;
  phone: string;
  email: string;
  address: string;
};

const mockDatabase: Pet[] = [
  { id: "123", name: "Benedito", photo: "/benedito.jpeg", birthDate: "2020-01-01", weight: 10, breed: "Shitzu", color: "Amarelo", tutorName: "João", cpf: "12345678901", phone: "11999999999", email: "joao@email.com", address: "Rua A, 123" },
  { id: "1234", name: "Lucy", photo: "/lucy.jpeg", birthDate: "2019-05-15", weight: 8, breed: "Poodle", color: "Branco", tutorName: "Maria", cpf: "98765432100", phone: "21988888888", email: "maria@email.com", address: "Rua B, 456" },
  { id: "12345", name: "Jade", photo: "/jade.jpg", birthDate: "2021-07-20", weight: 12, breed: "Golden Retriever", color: "Dourado", tutorName: "Carlos", cpf: "12312312399", phone: "31977777777", email: "carlos@email.com", address: "Rua C, 789" },
];

const Home: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeKey, setActiveKey] = useState<string>("1");
  const [searchResult, setSearchResult] = useState<Pet | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [searchValue, setSearchValue] = useState<string>("");

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleSearch = (value: string) => {
    const pet = mockDatabase.find((item) => item.id === value);
    if (pet) {
      setSearchResult(pet);
      setNotFound(false);
    } else {
      setSearchResult(null);
      setNotFound(true);
    }
  };

  const items: MenuItem[] = [
    { key: "1", label: "Localizar Pet", icon: <SearchOutlined /> },
    { key: "2", label: "Perfil do pet" },
  ];

  const renderContent = () => {
    if (activeKey === "1") {
      return (
        <div style={{ width: '100%', maxWidth: 700, margin: '0 auto', }}>
          <div style={{ textAlign: 'center', marginTop: '46px', marginBottom: '36px' }}>
            <Title level={2}>Localizar Pet</Title>
          </div>
  
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginTop: '16px' }}>
          <Input.Search
            placeholder="Digite o ID do pet para buscar"
            enterButton={<SearchOutlined />}
            size="large"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onSearch={(value) => {
              handleSearch(value);
              setSearchValue(""); 
              setShowForm(false);
            }}
            style={{ flex: 1, maxWidth: '700px' }}
          />
            <Button
              type="primary"
              size="large"
              onClick={() => {
                setShowForm(true);
                setSearchResult(null);
                setNotFound(false);
              }}
            >
              Cadastrar Pet
            </Button>
          </div>
  
          {searchResult && (
            <>
              <Alert
                message="Pet encontrado"
                type="success"
                showIcon
                style={{ marginTop: 16 }}
              />
              <div
                onClick={() => setActiveKey("2")}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  marginTop: 16,
                  padding: '16px',
                  border: '1px solid #d9d9d9',
                  borderRadius: 8,
                  cursor: 'pointer',
                }}
              >
                <Image
                  src={searchResult.photo}
                  alt={`Foto de ${searchResult.name}`}
                  width={64}
                  height={64}
                  style={{ borderRadius: '50%' }}
                />
                <div>
                  <Title level={4} style={{ margin: 0 }}>{searchResult.name}</Title>
                  <p style={{ margin: 0 }}>ID: {searchResult.id}</p>
                </div>
              </div>
            </>
          )}
          {notFound && (
            <Alert
              message="Pet não encontrado"
              description="O ID do pet buscado não foi encontrado na base de dados."
              type="error"
              showIcon
              style={{ marginTop: 16 }}
            />
          )}
          {showForm && (
            <div style={{ marginTop: 24 }}>
              <RegisterPet />
            </div>
          )}
        </div>
      );
    } else if (activeKey === "2" && searchResult) {
      return <PetProfile pet={searchResult} />;
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div
          style={{
            height: 64,
            margin: '16px',
            background: 'rgba(255, 255, 255, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 8,
          }}
        >
          {collapsed ? (
            <Image
              src="/dosepet.svg"
              alt="Dose Pet logo pequeno"
              width={38}
              height={38}
              priority
            />
          ) : (
            <Image
              src="/dosepet-logo-vertical.svg"
              alt="Dose Pet logo"
              width={160}
              height={38}
              priority
            />
          )}
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={items}
          onClick={(e) => setActiveKey(e.key)}
        />
      </Sider>
      <Layout>
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Início</Breadcrumb.Item>
            <Breadcrumb.Item>{activeKey === "1" ? "Localizar Pet" : "Perfil do pet"}</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              paddingTop: 40,
              minHeight: '100%',
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {renderContent()}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          DosePet © 2025
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Home;