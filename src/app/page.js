import Image from "next/image";
import Title from 'antd/es/typography/Title'
import Text from 'antd/es/typography/Text'
import Container from "@/component/global/Container";
import { Divider } from "antd";
import ButtonChangeTransparent from "@/component/pages/main/ButtonChangeTransparent";

export default function Home() {
  return (
    <Container>
      <div>
        <Title style={{textAlign:"center"}}>Главная</Title>
        <Divider/>
        <Title style={{textAlign:"center"}}>Салам ТИРГ!!!</Title>
        {/* <ButtonChangeTransparent/> */}
        </div>
      
    </Container>
  );
}
