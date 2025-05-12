"use client";

import React from 'react';
import { Button, Form, Input, Row, Col } from 'antd';
import Image from 'next/image';
import Title from 'antd/es/typography/Title';

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

const PetProfile: React.FC<{ pet: Pet }> = ({ pet }) => {
  if (!pet) return null;

  return (
    
    <Row gutter={[24, 24]}>
      <Col xs={24} md={21}>
        <Title level={2}>Perfil do Pet</Title>
      </Col>
      <Col xs={24} md={3}>
        <Button
          type="primary"
          size="large"
          onClick={() => {
            console.log('Cadastrar Pet');
          }}
        >
          Cadastrar Pet
        </Button>
      </Col>
      <Col xs={24} md={12}>
        <div style={{ flex: 1, padding: '16px', border: '1px solid #d9d9d9', borderRadius: 8 }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '16px', 
            marginBottom: 24, 
          }}>
            <Image
              src={pet.photo}
              alt={`Foto de ${pet.name}`}
              width={100}
              height={100}
              style={{ borderRadius: '50%' }} />
            <div>
              <Title level={4} style={{ margin: 0 }}>{pet.name}</Title>
              <p style={{ margin: 0 }}>ID: {pet.id}</p>
            </div>
          </div>
          <Title level={4}>Dados do Pet</Title>
          <Form layout="vertical">
            <Form.Item label="Nome do Pet">
              <Input defaultValue={pet.name} />
            </Form.Item>
            <Form.Item label="ID do Pet">
              <Input defaultValue={pet.id} disabled />
            </Form.Item>
            <Form.Item label="Data de Nascimento">
              <Input defaultValue={pet.birthDate} />
            </Form.Item>
            <Form.Item label="Peso (kg)">
              <Input defaultValue={pet.weight} />
            </Form.Item>
            <Form.Item label="Raça">
              <Input defaultValue={pet.breed} />
            </Form.Item>
            <Form.Item label="Cor">
              <Input defaultValue={pet.color} />
            </Form.Item>
          </Form>
        </div>
        </Col>
        <Col xs={24} md={12} style={{ flex: 1, padding: '16px', border: '1px solid #d9d9d9', borderRadius: 8 }}>
          <Title level={4}>Dados do Tutor</Title>
          <Form layout="vertical">
            <Form.Item label="Nome do Tutor">
              <Input defaultValue={pet.tutorName} />
            </Form.Item>
            <Form.Item label="CPF do Tutor">
              <Input defaultValue={pet.cpf} />
            </Form.Item>
            <Form.Item label="Telefone do Tutor">
              <Input defaultValue={pet.phone} />
            </Form.Item>
            <Form.Item label="Email do Tutor">
              <Input defaultValue={pet.email} />
            </Form.Item>
            <Form.Item label="Endereço do Tutor">
              <Input defaultValue={pet.address} />
            </Form.Item>
          </Form>
        </Col>
        <Col xs={24} md={24} style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button type="primary" style={{ marginTop: 24 }}>Salvar Alterações</Button>
        </Col>
    </Row>
  );
};

export default PetProfile;