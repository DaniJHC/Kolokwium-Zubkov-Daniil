import React from 'react';
import c from './Content.module.css'
import { GoSun } from "react-icons/go";
import { FaFaceSmile } from "react-icons/fa6";
import { TiWeatherShower } from "react-icons/ti";
import { PiTelevision } from "react-icons/pi";
import { CgYinyang } from "react-icons/cg";
import { IoGiftOutline } from "react-icons/io5";
import { MdModeOfTravel } from "react-icons/md";
const Content = () => {
    return (
        <div className={c.content}>
            <div className={c.background}>
                <div className={c.words}>
                <div>
                    Wiadomosci
                </div>
                <div>
                    Sport
                </div>
                <div>
                    Premium
                </div>
                <div>
                    Bizines
                </div>
                <div>
                    Regionalne
                </div>
                <div>
                    Pogoda
                </div>
                <div>
                    Wideo i Audio
                </div>
                <div>
                    Motoryzacja
                </div>
                <div>
                    Nieruchomosci
                </div>
                </div>
            </div>
            <div className={c.tablo}>
                <div className={c.about}>
                    <div>
                        Warszawa
                        <div>
                            24{GoSun()}
                        </div>
                    </div>
                    <div>
                        Stan powiedza
                        <div>
                            {FaFaceSmile()}Dobry
                        </div>
                    </div>
                    <div>
                        Jutro
                        <div>
                            {TiWeatherShower()}34
                        </div>
                    </div>
                    <div>
                        <img className={c.image4}
                            src="https://play-lh.googleusercontent.com/bbYmu2yejEzSnQvuzX9Q_GfBWVILVthxlscwloMc0hg-N2JBP7LNEL13HdBLRkZEzjyw"/>
                        <div>
                            Loteria Onetu
                        </div>
                    </div>
                    <div>
                        {PiTelevision()}
                        <div>
                            Program TV
                        </div>
                    </div>
                    <div>
                        {CgYinyang()}
                        <div>
                            Horoskop
                        </div>
                    </div>
                    <div>
                        {IoGiftOutline()}
                        <div>
                            Oferty
                        </div>
                    </div>
                    <div>
                        {MdModeOfTravel()}
                        <div>
                            YakdoYade
                        </div>
                    </div>
                    <div>
                        <img className={c.image3} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkWQqX3yRHgVOnjCU-Wf0HgtJRZX20WdRBpQ&s"/>
                    </div>
                    <div>
                        <img className={c.image3} src="https://teplo-energy.in.ua/image/cache/catalog/data/otoplenie/kotel/gazovye/Zoom/kotel-gazovyj-nastennyj-expert-001-1000x1000.jpg"/>
                    </div>
                    <div>
                        <img className={c.image3} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIQ3kxl4TT3i0Bx_Ib2jEXM5t32Nn3i2BXmQ&s"/>
                    </div>
                </div>
            </div>
            <div className={c.text}>
                <div className={c.text3}>
                The weather's not bad now, keep watching our weatherman, I'm sure we'll have a severe cold snap soon //
                we hope the heat in Florida keeps you from getting discouraged this awesome summer // help peo..
                </div>
            </div>
            <div className={c.news}>
                That's what they're talking about:
            </div>
            <div className={c.foto}>
                <div>
                    <img className={c.image1}
                         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXv1bZl5F2zcjTviSkYaYtrsazxerpMOvDYw&s"/>
                </div>
                <div>
                    <img className={c.image2}
                         src="https://d-art.ppstatic.pl/kadry/k/r/1/7b/e8/667c75680abce_o_xlarge.jpg"/>
                    <div className={c.text1}>
                        Zmiany w komunikacji publicznej w Ustce.
                        <div>
                            W sezonie autobusy jeżdżą także w weekendy
                        </div>
                    </div>
                </div>
                <div className={c.border}>
                <div className={c.news1}>
                    <div>
                        <img src='https://d-art.ppstatic.pl/kadry/k/r/1/b9/9e/667d24eae070b_o_small.jpg'/>
                    </div>
                    <div>
                    <img src='https://d-art.ppstatic.pl/kadry/k/r/1/a7/f1/667c2ade01f5e_o_small.jpg'/>
                </div>
                    <div>
                        <img src='https://d-art.ppstatic.pl/kadry/k/r/1/46/91/667c3b96c871f_o_small.jpg'/>
                    </div>
                </div>
                <div className={c.about1}>
                    <div>
                        Prezydent Słupska z wotum zaufania i absolutorium za 2023 rok
                    </div>
                    <div className={c.text2}>
                        Burmistrz Ustki Jacek Maniszewski bez wotum zaufania i absolutorium
                </div>
                    <div className={c.text4}>
                        Trzy miesiące aresztu dla sprawcy wypadku z udziałem motocyklisty w Słupsku
                    </div>
                </div>
                </div>

            </div>
        </div>
    );
};

export default Content;