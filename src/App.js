import Header from './Header';
import Section from './Section';
import './App.css'
import Model3 from './images/model-3.jpg';
import ModelY from './images/model-y.jpg';
import ModelS from './images/model-s.jpg';
import ModelX from './images/model-x.jpg';
import SolarPanels from './images/solar-panel.jpg';
import SolarRoof from './images/solar-roof.jpg';
import Accessories from './images/accessories.jpg';
import arrow from './images/down-arrow.svg'
function App() {
  return (
    <>
      <Header></Header>
      <Section
          image = {Model3}
          head = {'Modal 3'}
          par = {'Order Online for touchless delivery'}
          leftbutton = {'Custom Order'}
          rightbutton = {'Existing Inventory'}
          arr = {arrow}
      />
      <Section
          image = {ModelY}
          head = {'Modal Y'}
          par = {'Order Online for touchless delivery'}
          leftbutton = {'Custom Order'}
          rightbutton = {'Existing Inventory'}
      />
      <Section
          image = {ModelS}
          head = {'Modal S'}
          par = {'Order Online for touchless delivery'}
          leftbutton = {'Custom Order'}
          rightbutton = {'Existing Inventory'}
      />
      <Section 
          image = {ModelX}
          head = {'Modal X'}
          par = {'Order Online for touchless delivery'}
          leftbutton = {'Custom Order'}
          rightbutton = {'Existing Inventory'}
      />
      <Section 
          image = {SolarPanels}
          head = {'Solar Panels'}
          par = {'Lower Cost Solar Panels in India'}
          leftbutton = {'Order Now'}
          rightbutton = {'Learn More'}
      />
      <Section 
          image = {SolarRoof}
          head = {'Solar Roof'}
          par = {'Produce Clean Energy from your roof'}
          leftbutton = {'Order Now'}
          rightbutton = {'Learn More'}
      />
      <Section 
          image = {Accessories}
          head = {'Accessories'}
          leftbutton = {'Order Now'}
      />
    </>
  );
}

export default App; 
