import './globals.css'
import { AntdRegistry } from '@ant-design/nextjs-registry';
import Header from "@/component/global/header/Header";
import Footer from "@/component/global/footer/Footer";
import { Flex } from "antd";
export const metadata = {
  title: "Верстакофф",
  description: "Верстакофф - производитель металлической мебели и верстаков. Официальный сайт в г. Москва",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body >
        <AntdRegistry>
          <Flex vertical style={{ minHeight: "100vh" }} align='center'>
            <Header />
            <div style={{ flex: 1,width:"100%" }}>
              {children}
            </div>
            <Footer />
          </Flex>
        </AntdRegistry>
      </body>
    </html>
  );
}
