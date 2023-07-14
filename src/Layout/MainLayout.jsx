import React from 'react' 
import layout from '../ModulesStyles/Layout.module.css';  
import Header from './Header'; 
import Footer from './Footer'; 
import Content from './Content'; 
 
 
function MainLayout() { 
  return ( 
            <section className={`${layout.mainLayoutWrapper}`}> 
               <Header/> 
               
                <Content/> 
                 
               <Footer/> 
            </section> 
  ) 
} 
 
export default MainLayout;
