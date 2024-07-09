import { useState } from 'react'
import '../index.css';
import Card from '../components/Card';
import Footer from "../components/Footer";
import bicycle from "../assets/pngs/bikeOne.png";
import bikeTwo from "../assets/pngs/bikeTwo.png";
import bikeThree from "../assets/pngs/bikeThree.png";
import bikeFour from "../assets/pngs/bikeFour.png";
import bikeFive from "../assets/pngs/bikeFive.png";
import bikeSix from "../assets/pngs/bikeSix.png";
import bikeSeven from "../assets/pngs/bikeSeven.png";
import bikeEight from "../assets/pngs/bikeEight.png";
import Header from '../components/Header';
import { CartProvider } from '../context/CartContext';

function Home() {

  return (
    <CartProvider>
    <>
    <Header
    page="Shop" 
    />
    <main className=''>
      <select name="" id="" className="bg-[#CE1515] text-[14px] text-white py-2 px-3 mb-5 ml-5 border border-[#CE1515] rounded-xl md:grid md:grid-cols-3 lg:grid lg:grid-cols-4">
        <option value="">MOTORCYCLE</option>
        <option value="">BIKES</option>
        <option value="">TRICYCLE</option>
        <option value="">AUTOMOBILE</option>
      </select>
      <div className='cards md:grid md:grid-cols-3 lg:grid lg:grid-cols-4'>
        <Card 
        image={bicycle}
        title="Automobile 4"
        price="$650"
        description="20 HP with front and back tyre, black"
        />
        <Card 
        image={bikeTwo}
        title="Automobile 1"
        price="$380"
        description="Twin turbo wxhaust with V6 engine"
        />
        <Card 
        image={bikeFour}
        title="Automobile 2"
        price="$840"
        description="Retro bikers finish with rear view mirrors"
        />
        <Card 
        image={bikeThree}
        title="Automobile 3"
        price="$935"
        description="Duccati special edition with yellow limited"
        />
        <Card 
        image={bikeFive}
        title="Automobile 7"
        price="$500"
        description="Single exhaust motor, low version"
        />
        <Card 
        image={bikeSix}
        title="Automobile 6"
        price="$260"
        description="Retro classicique Joanne special"
        />
        <Card 
        image={bikeSeven}
        title="Automobile 5"
        price="$999"
        description="Special edition Della Rossa"
        />
        <Card 
        image={bikeEight}
        title="Automobile 8"
         price="$105"
        description="Veronica Elegante, special series"
        />
      </div>
    </main>
    <Footer/>
    </>
    </CartProvider>
  )
}

export default Home;
