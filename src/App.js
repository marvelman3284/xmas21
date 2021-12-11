import React from 'react';
import "./App.css";
import { Header, Footer } from "./Others";

export class Gift extends React.Component {
  render () {
    return (
      <>
        <Header />
        <Gifts name="Ender Pro V2 (3D Printer)" link="https://www.amazon.com/Pro-Removable-Certified-8-66x8-66x9-84in-220x220x250mm/dp/B07GYRQVYV" price="$251.99" />
        <Gifts name="3D printer filament bundle" link="https://www.amazon.com/1-75mm-Filament-Bundle-Compatible-Printers/dp/B07C3L6RP4/ref=sr_1_4?crid=CHUQYATCOHV7&keywords=3d+printer+pla+filament+1.75mm&qid=1639194173&s=industrial&sprefix=3d+printer+pla+%2Cindustrial%2C156&sr=1-4" price="$39.29" />
        <Gifts name="Nightwing Vol 1: Leaping into the Light" link="https://www.amazon.com/Nightwing-Vol-1-Leaping-into-Light/dp/1779512783" price="$17.99" />
        <Gifts name="Nightwing Vol 1: Better Than Batman" link="https://www.amazon.com/Nightwing-Vol-Better-Batman-Rebirth/dp/140126803X/" price="$16.29" />
        <Gifts name="Batman: Year 1" link="https://www.amazon.com/Batman-Year-30th-Anniversary-Deluxe/dp/1401274560/ref=sr_1_1?keywords=batman+year+2&qid=1639198322&s=books&sr=1-1" price="$23.60"/>
        <Gifts name="Batman: A Death in the Family" link="https://www.amazon.com/Batman-Family-Deluxe-Jim-Starlin/dp/1779509170/ref=sr_1_1?crid=NKU6K7DI2UW6&keywords=a+death+in+the+family&qid=1639198581&s=books&sprefix=a+death+in+%2Cstripbooks%2C157&sr=1-1" price="$23.83" />
        <Gifts name="Batman: Death and the Maidens" link="https://www.amazon.com/Batman-Maidens-Deluxe-Greg-Rucka/dp/1401265936/" price="$23.98" /> 
        <Gifts name="Daredevil: The Man Without Fear" link="https://www.amazon.com/dp/0785163344" price="$31.99" />
        <Gifts name="Daredevil: Chinatown" link="https://www.amazon.com/dp/0785196447" price="$15.99" />
        <Gifts name="A Watch" price="Depends on where you buy it" />
        <Gifts name="New York Giants Sweatshirt" price="$49.99" link="https://www.fanatics.com/nfl/new-york-giants/new-york-giants-new-era-combine-authentic-game-on-pullover-hoodie-heathered-gray/o-2483+t-68161202+p-82719349590+z-9-3017144684?_ref=p-DLP:m-GRID:i-r14c2:po-44&sku=16047510" />
        <Footer />
      </>
    )
  }
}

class Gifts extends React.Component {

  render () {
  
    return (
      <h3>
        <ul> 
          <li className="App-header"> Name: {this.props.name} 
              <ul>
                <li>Price: {this.props.price} </li>
                <li>
                  <a className="App-link" href={this.props.link ? this.props.link : "/404"} rel="noreferrer" target="_blank"> 
                    Link 
                  </a> 
                </li>
              </ul>
          </li>
        </ul>
      </h3>
    );
  }
}

Gifts.defaultProps = {name: 'No name', price: "No Price", link: "/404"}