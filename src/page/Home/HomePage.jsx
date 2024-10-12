import React from "react";
import "./HomePage.css"
import SearchIcon from '@mui/icons-material/Search';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import TelegramIcon from '@mui/icons-material/Telegram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

//cover
import Cover from "../../image/cover/cover.webp"
// Product Accessories
import Accessory from "../../image/Product/accessories.png"
import Combo from "../../image/Product/combo.png"
import Controller from "../../image/Product/controller.png"
import CoolingPad from "../../image/Product/cooling_pad.png"
import DIY from "../../image/Product/diy.png"
import Headphone from "../../image/Product/headphone.png"
import Keyboard from "../../image/Product/keyboard.png"
import Keycaps from "../../image/Product/keycaps.png"
import LightStrip from "../../image/Product/lightstrip.png"
import Microphone from "../../image/Product/microphone.png"
import Mouse from "../../image/Product/mouse.png"
import Mousepad from "../../image/Product/mousepad.png"
import Speaker from "../../image/Product/speaker.png"
import Switch from "../../image/Product/switch.png"
import TableAndChair from "../../image/Product/chair_and_table.png"
import Webcam from "../../image/Product/webcam.png"

// Highlight Logo
import GloriousLogo from "../../image/Glorious/glorious-logo.webp"
import ModelOpro from "../../image/Glorious/model-o-pro.webp"
import GloriousHighlight from "../../image/highlight/glorious.webp"
import KeychronHighlight from "../../image/highlight/keychron.webp"
import AkkoHighlight from "../../image/highlight/akko.webp"
import PulsarHighlight from "../../image/highlight/pulsar.webp"

// Brands Logo
import Acasis from "../../image/brands/acasis.jpg"
import Akko from "../../image/brands/akko.png"
import Alienware from "../../image/brands/alienware.jpg"
import Alpha from "../../image/brands/Alpha.png"
import Aula from "../../image/brands/aula.jpg"
import Bemorergo from "../../image/brands/bemorergo.jpg"
import Blue from "../../image/brands/blue.jpg"
import Glorious from "../../image/brands/glorious.png"
import Edifier from "../../image/brands/edifier.jpg"
import HyperX from "../../image/brands/hyperx.jpg"
import KeychronLogo from "../../image/brands/keychron.jpg"
import Kisonli from "../../image/brands/kisonli.jpg"
import Logitech from "../../image/brands/logitech.jpg"
import MagicRefiner from "../../image/brands/magicrefiner.jpg"
import Mcdodo from "../../image/brands/mcdodo.jpg"
import Microlab from "../../image/brands/microlab.jpg"
import Nuoxi from "../../image/brands/nuoxi.jpg"
import Onikuma from "../../image/brands/onikuma.jpg"
import Phillips from "../../image/brands/philips.jpg"
import Pulsar from "../../image/brands/pulsar-logo.png"
import Razer from "../../image/brands/razer.jpg"
import Redragon from "../../image/brands/redragon.jpg"
import Spector from "../../image/brands/spector.jpg"
import Steelseries from "../../image/brands/steelseries.jpg"
import Ugreen from "../../image/brands/ugreen.jpg"
import Xbox from "../../image/brands/xbox.jpg"
import YCE from "../../image/brands/yce.jpg"
import Ziyoulang from "../../image/brands/ziyoulang.png"
import iMICE from "../../image/brands/imice.jpg"
import ipega from "../../image/brands/ipega.jpg"
import PlayStation from "../../image/brands/playstation.jpg"

// feature items
import ModelO2WirelessBlack from "../../image/Feature items/small_glorious___model_o_2_wireless___black.webp"
import ModelO2WirelessWhite from "../../image/Feature items/small_glorious___model_o_2_wireless___white.webp"
import ModelOproBlue from "../../image/Feature items/small_glorious_model_o_pro_blue.webp"
import ModelOproGolden from "../../image/Feature items/small_glorious_model_o_pro_golden.webp"
import ModelOproRed from "../../image/Feature items/small_glorious_model_o_pro_red.webp"

// New Arrival
import LeviathanV2 from "../../image/New Arrival/small_razer_leviathan_v2.webp"
import MxKeysMiniComboForBusiness from "../../image/New Arrival/small_logitech___mx_keys_mini_combo.webp"
import MxKeysComboForBusiness from "../../image/New Arrival/small_logitech___mx_keys___combo_business.webp"
import BarracudaPro from "../../image/New Arrival/small_razer___barracuda_pro.webp"
import DeathAdderV3 from "../../image/New Arrival/small_razer___deathadder_v3___black.webp"


// Special Discount
import a1 from "../../image/Special Discount/a1.webp"
import a2 from "../../image/Special Discount/a2.webp"
import a3 from "../../image/Special Discount/a3.webp"
import a4 from "../../image/Special Discount/a4.webp"
import a5 from "../../image/Special Discount/a5.webp"
import a6 from "../../image/Special Discount/a6.webp"
import a7 from "../../image/Special Discount/a7.webp"
import a8 from "../../image/Special Discount/a8.webp"
import a9 from "../../image/Special Discount/a9.webp"
import a10 from "../../image/Special Discount/a10.webp"
import a11 from "../../image/Special Discount/a11.webp"
import a12 from "../../image/Special Discount/a12.webp"
import a13 from "../../image/Special Discount/a13.webp"
import a14 from "../../image/Special Discount/a14.webp"
import a15 from "../../image/Special Discount/a15.webp"
import a16 from "../../image/Special Discount/a16.webp"
import a17 from "../../image/Special Discount/a17.webp"
import a18 from "../../image/Special Discount/a18.webp"
import a19 from "../../image/Special Discount/a19.webp"
import a20 from "../../image/Special Discount/a20.webp"
import a21 from "../../image/Special Discount/a21.webp"


const HomePage = () => {
    return(
        <div>

            {/* Navbar */}
            <div className="nav-link">
                <div className="first-nav">All products are original and Brand New.</div>
                <div className="nav-bar">
                    <div className="search-icon">
                        <SearchIcon
                            fontSize="large"
                        />
                    </div>
                    <div className="row">
                        <div className="nav-item">Home</div>
                        <div className="line1"></div>
                        <div className="nav-item">Brands</div>
                        <div className="line2"></div>
                        <div className="nav-item">Categories</div>
                    </div>
                </div>
            </div>

            {/* Cover */}
            <div className="cover">
                <img src={Cover} alt="cover" />
            </div>
            <div className="Background-width-height">
                <div className="product-container">

                    {/* Product Items that have 16 items in 2 rows */}
                    <div className="product-item">
                        <img src={Accessory} alt="Accessory" />
                        <p className="product-txt">Accressory</p>
                    </div>

                    <div className="product-item">
                        <img src={Combo} alt="Combo" />
                        <p className="product-txt">Combo</p>
                    </div>

                    <div className="product-item">
                        <img src={Controller} alt="Controller" />
                        <p className="product-txt">Controller</p>
                    </div>

                    <div className="product-item">
                        <img src={CoolingPad} alt="CoolingPad" />
                        <p className="product-txt">CoolingPad</p>
                    </div>

                    <div className="product-item">
                        <img src={DIY} alt="DIY" />
                        <p className="product-txt">DIY</p>
                    </div>

                    <div className="product-item">
                        <img src={Headphone} alt="Headphone" />
                        <p className="product-txt">Headphone</p>
                    </div>

                    <div className="product-item">
                        <img src={Keyboard} alt="Keyboard" />
                        <p className="product-txt">Keyboard</p>
                    </div>

                    <div className="product-item">
                        <img src={Keycaps} alt="Keycaps" />
                        <p className="product-txt">Keycaps</p>
                    </div>

                    <div className="product-item">
                        <img src={LightStrip} alt="LightStrip" />
                        <p className="product-txt">Light Strip</p>
                    </div>

                    <div className="product-item">
                        <img src={Microphone} alt="Microphone" />
                        <p className="product-txt">Microphone</p>
                    </div>

                    <div className="product-item">
                        <img src={Mouse} alt="Mouse" />
                        <p className="product-txt">Mouse</p>
                    </div>

                    <div className="product-item">
                        <img src={Mousepad} alt="Mousepad" />
                        <p className="product-txt">Mousepad</p>
                    </div>

                    <div className="product-item">
                        <img src={Speaker} alt="Speaker" />
                        <p className="product-txt">Speaker</p>
                    </div>

                    <div className="product-item">
                        <img src={Switch} alt="Switch" />
                        <p className="product-txt">Switch</p>
                    </div>

                    <div className="product-item">
                        <img src={TableAndChair} alt="TableAndChair" />
                        <p className="product-txt">Table / Chair</p>
                    </div>

                    <div className="product-item">
                        <img src={Webcam} alt="Webcam" />
                        <p className="product-txt">Webcam</p>
                    </div>
                    
                    
                </div>
            </div> 

            {/* Glorious logo with p tag and three mouse in a row */}
            <div className="Glorious">
                <div className="Glorious-img">
                    <img src={GloriousLogo} alt="Glorious"  />
                </div>
                <div className="glorious-txt">
                    <p>Peak gaming performance at just 55 grams lightweight. Over 80 hours of battery life. Once you try this wireless mouse, there's no going back.</p>
                </div>
                <div>
                    <img src={ModelOpro} alt="ModelOpro" />
                </div>
            </div>

            {/* Highlight product image{ Glorious Keychron Akko Pulsar} */}
            <div className="Glorious-Keychron-Akko-Pulsar">
                <div className="highlight-product">
                    <img className="highlight-hover-glow-img" src={GloriousHighlight} alt="GloriousHighlight" />
                    <p className="highlight-product-txt">Glorious</p>
                </div>

                <div className="highlight-product">
                    <img className="highlight-hover-glow-img" src={KeychronHighlight} alt="KeychronHighlight" />
                    <p className="highlight-product-txt">Keychron</p>
                </div>

                <div className="highlight-product">
                    <img className="highlight-hover-glow-img" src={AkkoHighlight} alt="AkkoHighlight" />
                    <p className="highlight-product-txt">Akko</p>
                </div>

                <div className="highlight-product">
                    <img className="highlight-hover-glow-img" src={PulsarHighlight} alt="PulsarHighlight" />
                    <p className="highlight-product-txt">Pulsar</p>
                </div>
                
                
            </div>


            {/* Product Brands */}
            <div className="Background-width-height-brands">
                <div className="Brands-container">

                    <div className="Brands-item">
                        <img src={Acasis} alt="Acasis" />
                    </div>

                    <div className="Brands-item">
                        <img src={Akko} alt="Akko" />
                    </div>

                    <div className="Brands-item">
                        <img src={Alienware} alt="Alienware" />
                    </div>

                    <div className="Brands-item">
                        <img src={Alpha} alt="Alpha" />
                    </div>

                    <div className="Brands-item">
                        <img src={Aula} alt="Aula" />
                    </div>

                    <div className="Brands-item">
                        <img src={Bemorergo} alt="Bemorergo" />
                    </div>

                    <div className="Brands-item">
                        <img src={Blue} alt="Blue" />
                    </div>

                    <div className="Brands-item">
                        <img src={Edifier} alt="Edifier" />
                    </div>

                    <div className="Brands-item">
                        <img src={Glorious} alt="Glorious" />
                    </div>

                    <div className="Brands-item">
                        <img src={HyperX} alt="HyperX" />
                    </div>

                    <div className="Brands-item">
                        <img src={KeychronLogo} alt="KeychronLogo" />
                    </div>

                    <div className="Brands-item">
                        <img src={Kisonli} alt="Kisonli" />
                    </div>

                    <div className="Brands-item">
                        <img src={Logitech} alt="Logitech" />
                    </div>

                    <div className="Brands-item">
                        <img src={MagicRefiner} alt="MagicRefiner" />
                    </div>

                    <div className="Brands-item">
                        <img src={Mcdodo} alt="Mcdodo" />
                    </div>

                    <div className="Brands-item">
                        <img src={Microlab} alt="Microlab" />
                    </div>

                    <div className="Brands-item">
                        <img src={Nuoxi} alt="Nuoxi" />
                    </div>

                    <div className="Brands-item">
                        <img src={Onikuma} alt="Onikuma" />
                    </div>

                    <div className="Brands-item">
                        <img src={Phillips} alt="Phillips" />
                    </div>

                    <div className="Brands-item">
                        <img src={Pulsar} alt="Pulsar" />
                    </div>

                    <div className="Brands-item">
                        <img src={Razer} alt="Razer" />
                    </div>

                    <div className="Brands-item">
                        <img src={Redragon} alt="Redragon" />
                    </div>

                    <div className="Brands-item">
                        <img src={Spector} alt="Spector" />
                    </div>

                    <div className="Brands-item">
                        <img src={Steelseries} alt="Steelseries" />
                    </div>

                    <div className="Brands-item">
                        <img src={Ugreen} alt="Ugreen" />
                    </div>

                    <div className="Brands-item">
                        <img src={Xbox} alt="Xbox" />
                    </div>

                    <div className="Brands-item">
                        <img src={YCE} alt="YCE" />
                    </div>

                    <div className="Brands-item">
                        <img src={Ziyoulang} alt="Ziyoulang" />
                    </div>

                    <div className="Brands-item">
                        <img src={iMICE} alt="iMICE" />
                    </div>

                    <div className="Brands-item">
                        <img src={ipega} alt="ipega" />
                    </div>

                    <div className="Brands-item">
                        <img src={PlayStation} alt="PlayStation" />
                    </div>

                </div>
            </div>


            {/* Feature Items */}
            <div className="feature-items" style={{ marginTop: '370px' }}>
                <div className="feature-items-container">
                    <div className="feature-items-txt">
                        <p className="p1">Feature items</p>
                        <p className="p2">Explore our store recommendation products</p>
                    </div>
                </div>
                <div className="feature-items-logo-container">

                    <div className="feature-items-box">
                        <img src={ModelO2WirelessBlack} alt="" />
                        <div className="line"></div>
                        <div style={{marginLeft:8,marginTop:1}}>Model O2 Wireless</div>
                        <div className="feature-items-box-footer">
                            <div style={{fontWeight:'bold'}}>Glorious</div>
                            <div style={{marginLeft:80}}> <s>119$</s> </div>
                            <div style={{color:'red',fontWeight:'bold',marginRight:10}}>109</div>
                            <div style={{ marginLeft: '-13px',marginRight:10}}>$</div>
                        </div>
                    </div>

                    <div className="feature-items-box">
                        <img src={ModelO2WirelessWhite} alt="" />
                        <div className="line"></div>
                        <div style={{marginLeft:8,marginTop:1}}>Model O2 Wireless</div>
                        <div className="feature-items-box-footer">
                            <div style={{fontWeight:'bold'}}>Glorious</div>
                            <div style={{marginLeft:80}}> <s>119$</s> </div>
                            <div style={{color:'red',fontWeight:'bold',marginRight:10}}>109</div>
                            <div style={{ marginLeft: '-13px',marginRight:10}}>$</div>
                        </div>
                    </div>

                    <div className="feature-items-box">
                        <img src={ModelOproRed} alt="" />
                        <div className="line"></div>
                        <div style={{marginLeft:8,marginTop:1}}>Model O Pro</div>
                        <div className="feature-items-box-footer">
                            <div style={{fontWeight:'bold'}}>Glorious</div>
                            <div style={{marginLeft:80}}> <s>129$</s> </div>
                            <div style={{color:'red',fontWeight:'bold',marginRight:10}}>125</div>
                            <div style={{ marginLeft: '-13px',marginRight:10}}>$</div>
                        </div>
                    </div>

                    <div className="feature-items-box">
                        <img src={ModelOproBlue} alt="" />
                        <div className="line"></div>
                        <div style={{marginLeft:8,marginTop:1}}>Model O Pro</div>
                        <div className="feature-items-box-footer">
                            <div style={{fontWeight:'bold'}}>Glorious</div>
                            <div style={{marginLeft:80}}> <s>129$</s> </div>
                            <div style={{color:'red',fontWeight:'bold',marginRight:10}}>125</div>
                            <div style={{ marginLeft: '-13px',marginRight:10}}>$</div>
                        </div>
                    </div> 

                    <div className="feature-items-box">
                        <img src={ModelOproGolden} alt="" />
                        <div className="line"></div>
                        <div style={{marginLeft:8,marginTop:1}}>Model O Pro</div>
                        <div className="feature-items-box-footer">
                            <div style={{fontWeight:'bold'}}>Glorious</div>
                            <div style={{marginLeft:80}}> <s>129$</s> </div>
                            <div style={{color:'red',fontWeight:'bold',marginRight:10}}>125</div>
                            <div style={{ marginLeft: '-13px',marginRight:10}}>$</div>
                        </div>
                    </div> 
                    
                    
                    
                </div>
            </div>


            {/* New Arrival */}
            <div className="New-Arrial">
                <div className="New-Arrial-container">
                    <div className="New-Arrial-container-txt">
                        <p className="p1">New Arrival</p>
                        <p className="p2">Explore our latest products to stock</p>
                    </div>
                </div>

                <div className="New-Arrial-logo-container">
                    <div className="New-Arrial-box">
                        <img src={LeviathanV2} alt="" />
                        <div className="line"></div>
                        <div style={{marginLeft:8,marginTop:1}}>Levaithan V2</div>
                        <div className="New-Arrial-box-footer">
                            <div style={{ fontWeight: 'bold', marginTop: '20px' }}>Razer</div>
                            <div style={{ marginLeft: '140px', marginRight: '30px', marginTop: '20px' }}>239$</div>
                        </div>
                    </div>

                    <div className="New-Arrial-box">
                        <img src={MxKeysMiniComboForBusiness} alt="" />
                        <div className="line"></div>
                        <div style={{marginLeft:8,marginTop:1}}>MX Keys Mini combo for Business</div>
                        <div className="New-Arrial-box-footer">
                            <div style={{ fontWeight: 'bold' }}>Logitech</div>
                            <div style={{ marginLeft: '120px', marginRight: '30px' }}>179$</div>
                        </div>
                    </div>

                    <div className="New-Arrial-box">
                        <img src={MxKeysComboForBusiness} alt="" />
                        <div className="line"></div>
                        <div style={{marginLeft:8,marginTop:1}}>MX Combo for Business</div>
                        <div className="feature-items-box-footer">
                            <div style={{fontWeight:'bold', marginTop: '20px'}}>Logitech</div>
                            <div style={{marginLeft:80, marginTop: '20px'}}> <s>209$</s> </div>
                            <div style={{color:'red',fontWeight:'bold',marginRight:10, marginTop: '20px'}}>199</div>
                            <div style={{ marginLeft: '-13px',marginRight:10, marginTop: '20px'}}>$</div>
                        </div>
                    </div>

                    <div className="New-Arrial-box">
                        <img src={BarracudaPro} alt="" />
                        <div className="line"></div>
                        <div style={{marginLeft:8,marginTop:1}}>Barracuda Pro</div>
                        <div className="New-Arrial-box-footer">
                            <div style={{ fontWeight: 'bold', marginTop: '20px' }}>Razer</div>
                            <div style={{ marginLeft: '140px', marginRight: '30px', marginTop: '20px' }}>259$</div>
                        </div>
                    </div>

                    <div className="New-Arrial-box">
                        <img src={DeathAdderV3} alt="" />
                        <div className="line"></div>
                        <div style={{marginLeft:8,marginTop:1}}>DeathAdder V3</div>
                        <div className="New-Arrial-box-footer">
                            <div style={{ fontWeight: 'bold',marginTop: '20px' }}>Razer</div>
                            <div style={{ marginLeft: '140px', marginRight: '30px',marginTop: '20px' }}>79$</div>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
           

            {/* Special Discount */}
            <div className="Special-Discount">
                <div className="Special-Discount-container">
                    <div className="Special-Discount-container-txt">
                        <p className="p1">Special Discount</p>
                        <p className="p2">Get the items will great deal today !</p>
                    </div>
                </div>

                <div className="Special-Discount-logo-container">

                    <div className="Special-Discount-box">

                        <img src={a1} alt="" />
                        <div className="line"></div>
                        <div style={{marginLeft:8,marginTop:1}}>Model O wireless</div>
                        <div className="feature-items-box-footer">
                            <div style={{fontWeight:'bold', marginTop: '20px'}}>Glorious</div>
                            <div style={{marginLeft:80, marginTop: '20px'}}> <s>105$</s> </div>
                            <div style={{color:'red',fontWeight:'bold',marginRight:10, marginTop: '20px'}}>95</div>
                            <div style={{ marginLeft: '-16px',marginRight:10, marginTop: '20px'}}>$</div>
                        </div>
                        
                    </div>

                    <div className="Special-Discount-box">

                        <img src={a2} alt="" />
                        <div className="line"></div>
                        <div style={{marginLeft:8,marginTop:1}}>Model O wireless</div>
                        <div className="feature-items-box-footer">
                            <div style={{fontWeight:'bold', marginTop: '20px'}}>Glorious</div>
                            <div style={{marginLeft:80, marginTop: '20px'}}> <s>105$</s> </div>
                            <div style={{color:'red',fontWeight:'bold',marginRight:10, marginTop: '20px'}}>95</div>
                            <div style={{ marginLeft: '-16px',marginRight:10, marginTop: '20px'}}>$</div>
                        </div>
                        
                    </div>

                    <div className="Special-Discount-box">

                        <img src={a3} alt="" />
                        <div className="line"></div>
                        <div style={{marginLeft:8,marginTop:1}}>Model O wireless</div>
                        <div className="feature-items-box-footer">
                            <div style={{fontWeight:'bold', marginTop: '20px'}}>Glorious</div>
                            <div style={{marginLeft:80, marginTop: '20px'}}> <s>69$</s> </div>
                            <div style={{color:'red',fontWeight:'bold',marginRight:10, marginTop: '20px'}}>59</div>
                            <div style={{ marginLeft: '-19px',marginRight:10, marginTop: '20px'}}>$</div>
                        </div>
                        
                    </div>

                    <div className="Special-Discount-box">

                        <img src={a4} alt="" />
                        <div className="line"></div>
                        <div style={{marginLeft:8,marginTop:1}}>Model O wireless</div>
                        <div className="feature-items-box-footer">
                            <div style={{fontWeight:'bold', marginTop: '20px'}}>Glorious</div>
                            <div style={{marginLeft:80, marginTop: '20px'}}> <s>69$</s> </div>
                            <div style={{color:'red',fontWeight:'bold',marginRight:10, marginTop: '20px'}}>59</div>
                            <div style={{ marginLeft: '-19px',marginRight:10, marginTop: '20px'}}>$</div>
                        </div>
                        
                    </div>

                    <div className="Special-Discount-box">

                        <img src={a5} alt="" />
                        <div className="line"></div>
                        <div style={{marginLeft:8,marginTop:1}}>Model O-</div>
                        <div className="feature-items-box-footer">
                            <div style={{fontWeight:'bold', marginTop: '20px'}}>Glorious</div>
                            <div style={{marginLeft:80, marginTop: '20px'}}> <s>69$</s> </div>
                            <div style={{color:'red',fontWeight:'bold',marginRight:10, marginTop: '20px'}}>59</div>
                            <div style={{ marginLeft: '-19px',marginRight:10, marginTop: '20px'}}>$</div>
                        </div>
                        
                    </div>

                    <div className="Special-Discount-box">

                        <img src={a6} alt="" />
                        <div className="line"></div>
                        <div style={{marginLeft:8,marginTop:1}}>Model O-</div>
                        <div className="feature-items-box-footer">
                            <div style={{fontWeight:'bold', marginTop: '20px'}}>Glorious</div>
                            <div style={{marginLeft:80, marginTop: '20px'}}> <s>69$</s> </div>
                            <div style={{color:'red',fontWeight:'bold',marginRight:10, marginTop: '20px'}}>59</div>
                            <div style={{ marginLeft: '-19px',marginRight:10, marginTop: '20px'}}>$</div>
                        </div>
                        
                    </div>

                    <div className="Special-Discount-box">

                        <img src={a7} alt="" />
                        <div className="line"></div>
                        <div style={{marginLeft:8,marginTop:1}}>Model O- Wireless</div>
                        <div className="feature-items-box-footer">
                            <div style={{fontWeight:'bold', marginTop: '20px'}}>Glorious</div>
                            <div style={{marginLeft:80, marginTop: '20px'}}> <s>105$</s> </div>
                            <div style={{color:'red',fontWeight:'bold',marginRight:10, marginTop: '20px'}}>95</div>
                            <div style={{ marginLeft: '-16px',marginRight:10, marginTop: '20px'}}>$</div>
                        </div>
                        
                    </div>

                    <div className="Special-Discount-box">

                        <img src={a8} alt="" />
                        <div className="line"></div>
                        <div style={{marginLeft:8,marginTop:1}}>Model O- Wireless</div>
                        <div className="feature-items-box-footer">
                            <div style={{fontWeight:'bold', marginTop: '20px'}}>Glorious</div>
                            <div style={{marginLeft:80, marginTop: '20px'}}> <s>105$</s> </div>
                            <div style={{color:'red',fontWeight:'bold',marginRight:10, marginTop: '20px'}}>95</div>
                            <div style={{ marginLeft: '-16px',marginRight:10, marginTop: '20px'}}>$</div>
                        </div>
                        
                    </div>

                    <div className="Special-Discount-box">

                        <img src={a9} alt="" />
                        <div className="line"></div>
                        <div style={{marginLeft:8,marginTop:1}}>Model O-</div>
                        <div className="feature-items-box-footer">
                            <div style={{fontWeight:'bold', marginTop: '20px'}}>Glorious</div>
                            <div style={{marginLeft:80, marginTop: '20px'}}> <s>69$</s> </div>
                            <div style={{color:'red',fontWeight:'bold',marginRight:10, marginTop: '20px'}}>59</div>
                            <div style={{ marginLeft: '-19px',marginRight:10, marginTop: '20px'}}>$</div>
                        </div>
                        
                    </div>

                    <div className="Special-Discount-box">

                        <img src={a10} alt="" />
                        <div className="line"></div>
                        <div style={{marginLeft:8,marginTop:1}}>Model O-</div>
                        <div className="feature-items-box-footer">
                            <div style={{fontWeight:'bold', marginTop: '20px'}}>Glorious</div>
                            <div style={{marginLeft:80, marginTop: '20px'}}> <s>69$</s> </div>
                            <div style={{color:'red',fontWeight:'bold',marginRight:10, marginTop: '20px'}}>59</div>
                            <div style={{ marginLeft: '-19px',marginRight:10, marginTop: '20px'}}>$</div>
                        </div>
                        
                    </div>

                    <div className="Special-Discount-box">

                        <img src={a11} alt="" />
                        <div className="line"></div>
                        <div style={{marginLeft:8,marginTop:1}}>Model D Wireless</div>
                        <div className="feature-items-box-footer">
                            <div style={{fontWeight:'bold', marginTop: '20px'}}>Glorious</div>
                            <div style={{marginLeft:80, marginTop: '20px'}}> <s>105$</s> </div>
                            <div style={{color:'red',fontWeight:'bold',marginRight:10, marginTop: '20px'}}>95</div>
                            <div style={{ marginLeft: '-17px',marginRight:10, marginTop: '20px'}}>$</div>
                        </div>
                        
                    </div>
                    
                    <div className="Special-Discount-box">

                        <img src={a12} alt="" />
                        <div className="line"></div>
                        <div style={{marginLeft:8,marginTop:1}}>Model D-</div>
                        <div className="feature-items-box-footer">
                            <div style={{fontWeight:'bold', marginTop: '20px'}}>Glorious</div>
                            <div style={{marginLeft:80, marginTop: '20px'}}> <s>69$</s> </div>
                            <div style={{color:'red',fontWeight:'bold',marginRight:10, marginTop: '20px'}}>59</div>
                            <div style={{ marginLeft: '-19px',marginRight:10, marginTop: '20px'}}>$</div>
                        </div>
                        
                    </div>

                    <div className="Special-Discount-box">

                        <img src={a13} alt="" />
                        <div className="line"></div>
                        <div style={{marginLeft:8,marginTop:1}}>Model D-</div>
                        <div className="feature-items-box-footer">
                            <div style={{fontWeight:'bold', marginTop: '20px'}}>Glorious</div>
                            <div style={{marginLeft:80, marginTop: '20px'}}> <s>69$</s> </div>
                            <div style={{color:'red',fontWeight:'bold',marginRight:10, marginTop: '20px'}}>59</div>
                            <div style={{ marginLeft: '-19px',marginRight:10, marginTop: '20px'}}>$</div>
                        </div>
                        
                    </div>

                    <div className="Special-Discount-box">

                        <img src={a14} alt="" />
                        <div className="line"></div>
                        <div style={{marginLeft:8,marginTop:1}}>Model D Wireless</div>
                        <div className="feature-items-box-footer">
                            <div style={{fontWeight:'bold', marginTop: '20px'}}>Glorious</div>
                            <div style={{marginLeft:80, marginTop: '20px'}}> <s>105$</s> </div>
                            <div style={{color:'red',fontWeight:'bold',marginRight:10, marginTop: '20px'}}>95</div>
                            <div style={{ marginLeft: '-17px',marginRight:10, marginTop: '20px'}}>$</div>
                        </div>
                        
                    </div>

                    <div className="Special-Discount-box">

                        <img src={a15} alt="" />
                        <div className="line"></div>
                        <div style={{marginLeft:8,marginTop:1}}>Lynx Mechanical Switches (Lubed)</div>
                        <div className="feature-items-box-footer">
                            <div style={{fontWeight:'bold', marginTop: '-2px'}}>Glorious</div>
                            <div style={{marginLeft:80, marginTop: '-2px'}}> <s>49$ </s></div>
                            <div style={{color:'red',fontWeight:'bold',marginRight:10, marginTop: '-2px'}}>45</div>
                            <div style={{ marginLeft: '-20px',marginRight:10, marginTop: '-2px'}}>$</div>
                        </div>
                        
                    </div>

                    <div className="Special-Discount-box">

                        <img src={a16} alt="" />
                        <div className="line"></div>
                        <div style={{marginLeft:8,marginTop:1}}>Lynx Mechanical Switches (Unlubed)</div>
                        <div className="feature-items-box-footer">
                            <div style={{fontWeight:'bold', marginTop: '-2px'}}>Glorious</div>
                            <div style={{marginLeft:80, marginTop: '-2px'}}> <s>35$ </s></div>
                            <div style={{color:'red',fontWeight:'bold',marginRight:10, marginTop: '-2px'}}>29</div>
                            <div style={{ marginLeft: '-20px',marginRight:10, marginTop: '-2px'}}>$</div>
                        </div>
                        
                    </div>

                    <div className="Special-Discount-box">

                        <img src={a17} alt="" />
                        <div className="line"></div>
                        <div style={{marginLeft:8,marginTop:1}}>Panda Mechanical Switches (Unlubed)</div>
                        <div className="feature-items-box-footer">
                            <div style={{fontWeight:'bold', marginTop: '-2px'}}>Glorious</div>
                            <div style={{marginLeft:80, marginTop: '-2px'}}> <s>35$</s> </div>
                            <div style={{color:'red',fontWeight:'bold',marginRight:10, marginTop: '-2px'}}>29</div>
                            <div style={{ marginLeft: '-20px',marginRight:10, marginTop: '-2px'}}>$</div>
                        </div>
                        
                    </div>

                    <div className="Special-Discount-box">

                        <img src={a18} alt="" />
                        <div className="line"></div>
                        <div style={{marginLeft:8,marginTop:1}}>Lynx Mechanical Switches (Lubed)</div>
                        <div className="feature-items-box-footer">
                            <div style={{fontWeight:'bold', marginTop: '-2px'}}>Glorious</div>
                            <div style={{marginLeft:80, marginTop: '-2px'}}> <s>49$</s> </div>
                            <div style={{color:'red',fontWeight:'bold',marginRight:10, marginTop: '-2px'}}>45</div>
                            <div style={{ marginLeft: '-20px',marginRight:10, marginTop: '-2px'}}>$</div>
                        </div>
                        
                    </div>

                    <div className="Special-Discount-box">

                        <img src={a19} alt="" />
                        <div className="line"></div>
                        <div style={{marginLeft:8,marginTop:1}}>Aura Keycaps V2</div>
                        <div className="feature-items-box-footer">
                            <div style={{fontWeight:'bold', marginTop: '-2px'}}>Glorious</div>
                            <div style={{marginLeft:80, marginTop: '-2px'}}> <s>45$</s> </div>
                            <div style={{color:'red',fontWeight:'bold',marginRight:10, marginTop: '-2px'}}>39</div>
                            <div style={{ marginLeft: '-20px',marginRight:10, marginTop: '-2px'}}>$</div>
                        </div>
                        
                    </div>

                    <div className="Special-Discount-box">

                        <img src={a20} alt="" />
                        <div className="line"></div>
                        <div style={{marginLeft:8,marginTop:1}}>Aura Keycaps V2</div>
                        <div className="feature-items-box-footer">
                            <div style={{fontWeight:'bold', marginTop: '-2px'}}>Glorious</div>
                            <div style={{marginLeft:80, marginTop: '-2px'}}> <s>45$</s> </div>
                            <div style={{color:'red',fontWeight:'bold',marginRight:10, marginTop: '-2px'}}>39</div>
                            <div style={{ marginLeft: '-20px',marginRight:10, marginTop: '-2px'}}>$</div>
                        </div>
                        
                    </div>

                    <div className="Special-Discount-box">

                        <img src={a21} alt="" />
                        <div className="line"></div>
                        <div style={{marginLeft:8,marginTop:1}}>Aura Keycaps V2</div>
                        <div className="feature-items-box-footer">
                            <div style={{fontWeight:'bold', marginTop: '-2px'}}>Glorious</div>
                            <div style={{marginLeft:80, marginTop: '-2px'}}> <s>45$</s> </div>
                            <div style={{color:'red',fontWeight:'bold',marginRight:10, marginTop: '-2px'}}>39</div>
                            <div style={{ marginLeft: '-20px',marginRight:10, marginTop: '-2px'}}>$</div>
                        </div>
                        
                    </div>

                </div>

            </div>

            <hr style={{marginTop: '60px'}}/>

            <div class="About-us">
                <div class="About-us-info">
                    <div class="Top-Row">
                        <div class="about-us-txt">
                            <p>About Us</p>
                        </div>
                        <div class="in-Store-Services">
                            <i>In Store Services / Delivery to 25 cities and provinces</i>
                        </div>
                    </div>
                    <div class="Icon-And-Info-Container">
                        
                        <div class="icon-and-info">
                            <div>
                                <CalendarMonthIcon
                                    style={{fontSize: '50px'}}
                                />
                                <p className="icons-info-p1">Monday to Sundaday</p>
                                <p className="icons-info-p2">9:00 AM - 8:00 PM</p>
                            </div>
                        </div>
                        <div class="icon-and-info">
                            <TelegramIcon
                                style={{fontSize: '50px'}}
                            />
                            <p className="icons-info-p1">(855) 81 453 494</p>
                            <p className="icons-info-p2">LENG SENGHORT</p>
                        </div>
                        <div class="icon-and-info">
                            <LocationOnIcon
                                style={{fontSize: '50px'}}
                            />
                            <p className="icons-info-p1">#41E, Street 228, Songkat Boeng Salang, Khan Toul Kouk, Phnom Penh, Cambodia.</p>
                        </div>
                        <div class="icon-and-info">
                            <PhoneAndroidIcon
                                style={{fontSize: '50px'}}
                            />
                            <p className="icons-info-p1">081 453 494</p>
                            <p className="icons-info-p2">069 361 891</p>
                        </div>
                        <div class="icon-and-info">
                            <FacebookIcon
                                style={{fontSize: '50px'}}
                            />
                            <p className="icons-info-p1">HoRt</p>
                            <p className="icons-info-p2">Ajax</p>
                        </div>
                        
                        <div class="icon-and-info">
                            <InstagramIcon
                                style={{fontSize: '50px'}}
                            />
                            <p className="icons-info-p1">hxr_ttt</p>
                            <p className="icons-info-p2">hxr_ttt</p>
                        </div>

                        <div class="last-txt">
                            <p>Copyright 2024 ©HXRT ComputerStore. All Right Reserved. Cloned by Hort.</p>
                        </div>
                        
                    </div>
                </div>
            </div>



        </div>
    )
}
export default HomePage;