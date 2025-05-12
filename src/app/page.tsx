"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Form, Input, Button, Typography, message } from "antd";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const { Title, Text } = Typography;

export default function Home() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = (values: { email: string; password: string }) => {
    setLoading(true);

    // Simulação de autenticação
    if (values.email === "user@dosepet.com" && values.password === "123456") {
      router.push("/home");
    } else {
      message.error("Credenciais inválidas. Tente novamente.");
    }

    setLoading(false);
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/dosepet-logo-vertical.svg"
          alt="Dose Pet logo"
          width={380}
          height={140}
          priority
        />
        <div>
          <Title level={4} className={styles.titleWhite}>Bem-vindo ao DosePet</Title>
          <Text className={styles.titleWhite}>Faça login para acessar sua conta</Text>
        </div>

        <Form
          className={styles.loginForm}
          layout="vertical"
          onFinish={handleLogin}
        >
          <Form.Item
            label="E-mail"
            name="email"
            rules={[
              { required: true, message: "Por favor, insira seu e-mail!" },
              { type: "email", message: "Insira um e-mail válido!" },
            ]}
          >
            <Input placeholder="E-mail" />
          </Form.Item>
          <Form.Item
            label="Senha"
            name="password"
            rules={[{ required: true, message: "Por favor, insira sua senha!" }]}
          >
            <Input.Password placeholder="Senha" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              className={styles.primary}
            >
              Entrar
            </Button>
          </Form.Item>
        </Form>

        <div className={styles.ctas}>
          <Text className={styles.titleWhite}>
            Não tem uma conta?{" "}
            <Link href="/cadastrar" className={styles.secondary}>
              Cadastrar
            </Link>
          </Text>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sobre
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ajuda e contato
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Termos e condições
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Política de privacidade
        </a>
        {/* <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Relatar problema
        </a> */}
          <p>DosePet © 2025</p>
      </footer>
    </div>
  );
}