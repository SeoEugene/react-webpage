import React from 'react'

import './assets/css/reset.css'
import './assets/css/style.css'

import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import Slider from './components/Slider'
import Image from './components/Image'
import Imagetext from './components/Imagetext'
import Card from './components/Card'
import Banner from './components/Banner'
import Text from './components/Text'

function App() {
  return (
    <>
      <Header element="nexon" />
      <Main>
        <Slider />
        <Image element = "section nexon" title="포트폴리오가 실력이다."/>
        <Imagetext element = "section nexon gray" />
        <Card element = "section nexon" />
        <Banner element = "nexon" />
        <Text element = "section nexon" />
      </Main>
      <Footer element="nexon section gray" />
    </>
  );
}

export default App;
