"use client";

import React, { useState } from "react";
import { Form, Input, Button, Alert, DatePicker, Row, Col } from "antd";
import Title from "antd/es/typography/Title";

const RegisterPet: React.FC = () => {
  const [success, setSuccess] = useState(false);

  const onFinish = (values: any) => {
    console.log("Form values:", values);
    setSuccess(true);
  };

  return (
    <div style={{ margin: "0 auto", padding: "24px" }}>
      <Title level={2} style={{ textAlign: "center", marginBottom: 44 }}>
        Cadastrar Pet
      </Title>
      {success && (
        <Alert
          message="Cadastro realizado com sucesso!"
          type="success"
          showIcon
          style={{ marginBottom: 16 }}
        />
      )}
      <Form layout="vertical" onFinish={onFinish}>
        <Row gutter={100}>
          <Col xs={24} md={12}>
            <Title level={4} style={{ marginBottom: 16 }}>
              Dados do Tutor
            </Title>
            <Form.Item
              label="Nome do Tutor"
              name="tutorName"
              rules={[{ required: true, message: "Por favor, insira o nome do tutor!" }]}
            >
              <Input placeholder="Digite o nome do tutor" />
            </Form.Item>
            <Form.Item
              label="CPF"
              name="cpf"
              rules={[
                { required: true, message: "Por favor, insira o CPF!" },
                { pattern: /^\d{11}$/, message: "CPF deve conter 11 dígitos!" },
              ]}
            >
              <Input placeholder="Digite o CPF" />
            </Form.Item>
            <Form.Item
              label="Telefone"
              name="phone"
              rules={[{ required: true, message: "Por favor, insira o telefone!" }]}
            >
              <Input placeholder="Digite o telefone" />
            </Form.Item>
            <Form.Item
              label="E-mail"
              name="email"
              rules={[
                { required: true, message: "Por favor, insira o e-mail!" },
                { type: "email", message: "Por favor, insira um e-mail válido!" },
              ]}
            >
              <Input placeholder="Digite o e-mail" />
            </Form.Item>
            <Form.Item
              label="Endereço"
              name="address"
              rules={[{ required: true, message: "Por favor, insira o endereço!" }]}
            >
              <Input placeholder="Digite o endereço" />
            </Form.Item>
          </Col>

          <Col xs={24} md={12}>
            <Title level={4} style={{ marginBottom: 16 }}>
              Dados do Pet
            </Title>
            <Form.Item
              label="Nome do Pet"
              name="petName"
              rules={[{ required: true, message: "Por favor, insira o nome do pet!" }]}
            >
              <Input placeholder="Digite o nome do pet" />
            </Form.Item>
            <Form.Item
              label="ID do Pet"
              name="petId"
              rules={[{ required: true, message: "Por favor, insira o ID do pet!" }]}
            >
              <Input placeholder="Digite o ID do pet" />
            </Form.Item>
            <Form.Item
              label="Data de Nascimento"
              name="birthDate"
              rules={[{ required: true, message: "Por favor, insira a data de nascimento!" }]}
            >
              <DatePicker style={{ width: "100%" }} placeholder="Selecione a data de nascimento" />
            </Form.Item>
            <Form.Item
              label="Peso (kg)"
              name="weight"
              rules={[{ required: true, message: "Por favor, insira o peso do pet!" }]}
            >
              <Input placeholder="Digite o peso do pet" type="number" />
            </Form.Item>
            <Form.Item
              label="Raça"
              name="breed"
              rules={[{ required: true, message: "Por favor, insira a raça do pet!" }]}
            >
              <Input placeholder="Digite a raça do pet" />
            </Form.Item>
            <Form.Item
              label="Cor"
              name="color"
              rules={[{ required: true, message: "Por favor, insira a cor do pet!" }]}
            >
              <Input placeholder="Digite a cor do pet" />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Cadastrar
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegisterPet;