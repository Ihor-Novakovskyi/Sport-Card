import SliderStuff from './slider-stuff/slider-stuff';
import StuffDescription from './stuff-description/stuff-description';
import StuffInfo from './stuff-info/stuff-info';
import SelectSize from './select-size/select-size';
import { Component } from 'react';
import ActionButton from './action-button/action-button';
import './card-app.css';

let sliderImagesLinks = [
    {src: "./image/front-side-girl.jpg", id: 0},
    {src: "./image/smile-girl.jpg", id: 1},
    {src: "./image/front-top-side.jpg", id: 2},
    {src: "./image/back-side.jpg", id: 3},
    {src: "./image/hand.jpg", id: 4}
];
export default class Card extends Component {
    render() {
        return (
            <div className="card-wrapper">
                <div className='card'>
                <SliderStuff slides={sliderImagesLinks}/>
                <div className="card__info-wrapper">
                    <div className='close-card-wrapper'>
                        <a className='close-window' href="https://yesoriginal.com.ua/uk/verhnyaya-odezhda/zhenskie-bombery/">
                            &#10006;
                        </a>
                    </div>
                    <div className='stuff-info-block'>
                        <StuffInfo/>
                        <SelectSize/>
                        <StuffDescription/>
                        <ActionButton/>
                    </div>
                </div>
                </div>
            </div>
           
        )
    }
}

