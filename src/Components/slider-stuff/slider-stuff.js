import { Component } from "react";
import './slider-stuff.css'

export default class SliderStuff extends Component {
    constructor(props) {
        super(props);
        window.addEventListener('keypress', (e) => {
            console.log(e.code)
            if(e.code === 'KeyA') {
                this.onNextSlide();
            }
            if(e.code === 'KeyZ') {
                this.onPrevSlide()
            }
        })
    }
    state = {
        indexSlide: 0,
    }

    onNextSlide = () => {
        let {slides} = this.props;
        let {indexSlide} = this.state;
        let indexCurrent = indexSlide + 1;
        if(indexCurrent === slides.length) {
            this.setState({indexSlide: 0})
            return;
        }
        this.setState(() => ({
            indexSlide: indexCurrent,
        }))
    }

    onPrevSlide = () => {
        let {slides} = this.props;
        let {indexSlide} = this.state;
        let indexCurrent = indexSlide - 1;

        if(indexCurrent < 0) {
            this.setState({indexSlide: slides.length - 1})
            return;
        }
        this.setState(() => ({
            indexSlide: indexCurrent,
        }))
    }

    onSelectItemSlides = (e) => {
        if (e.target.getAttribute('data-number')) {
            this.setState({indexSlide: +e.target.getAttribute('data-number')})
        }
    }



    render() {
        const {state: {indexSlide}, props: {slides}, onSelectItemSlides, onNextSlide, onPrevSlide} = this;
        const moveX = - 424 * indexSlide;
        const sliderSlides = slides.map((element) => {
            return (
                <div key={element.id} className="image-item-wrapper">
                    <img  src={element.src} data-number={element.id} alt="model all height view" className='show-slide-img' />
                </div>
            )
        })

        const sliderBox = slides.filter((element, ind) => {
            if(ind !== indexSlide) return true;
            return false;
        }).map(element => {
            return (
                <div  key={element.id} className="slides-box-item stuff-item">
                     <img src={element.src} data-number={element.id} alt="smile model front view " className="slides-item" />
                </div>
            )
        })

        return (
            <div className="slider-wrapper">
                <div className="slider">
                    <div className="slide-window">
                        <div className="slides" style={{
                            transform: `translateX(${moveX}px)`,
                            transition: '0.5s all'
                            }}>
                            {sliderSlides}
                        </div>
                        <div className="slider-arrow">
                            <div onClick={onPrevSlide} className="slider-arrow__item slider-arrow__item-left">
                                <img className="arrow" src="./image/arrowleft.png" alt="arrow" />
                            </div>
                            <div onClick={onNextSlide} className="slider-arrow__item slider-arrow__item-right">
                                <img className="arrow" src="./image/arrowleft.png" alt="arrow" />
                            </div>
                            
                        </div>
                    </div>
                    <div className="slides-box" onClick={onSelectItemSlides}>
                        {sliderBox}
                    </div>
                </div>
            </div>  
        )
    }
}

