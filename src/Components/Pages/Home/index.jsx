import React, { useState } from 'react';
import { Layout } from 'antd';
import { Card } from './Blocks/Card'
import { BackgroundDiv, LayoutWrapper } from './styles'

const { Header, Footer, Sider, Content } = Layout;

const data = [
    {
        id: 1,
        name: "baloon small",
        image: "https://i.pinimg.com/474x/88/4e/02/884e025009b69ddcefd0dc25966aa7d4.jpg",
        price: 20
    },
    {
        id: 2,
        name: "T-shirt",
        image: "https://swagshoponline.pl/4616-thickbox_default/t-shirt-damski-suka.jpg",
        price: 24
    },
    {
        id: 3,
        name: "baloon big",
        image: "https://i.pinimg.com/474x/c9/8f/cb/c98fcbb4c944f35bc5e3ce4d41957dc4.jpg",
        price: 67
    }
];

export const Home = () => {
    const [title, changeTitle] = useState('hello')

    const clickCard = () => {
        changeTitle('clicked')
        console.log("clickCard>>")
    }

    const renderCards = () => {
        return data.map(el => {
            return (
                <Card item={el} />
            )
        })
    }

    return (
            <Layout style={{ minHeight: '100vh' }}>
                <Header>Header</Header>
                <LayoutWrapper>
                    <Sider>Sider</Sider>
                    <Content>
                        <BackgroundDiv color='green' primary>Romaszka</BackgroundDiv>
                        { renderCards() }
                </Content>
                </LayoutWrapper>
                <Footer>Footer</Footer>
            </Layout>
        )
    }