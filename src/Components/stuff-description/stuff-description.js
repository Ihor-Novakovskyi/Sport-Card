import './stuff-description.css';
export default function StuffDescription() {
    return (
        <div className="stuff-description">
            <p className="stuff-description__header"><span style={{
                backgroundImage: "url(./image/car.svg)"
            }}></span>THIS ITEM QUALIFIES FOR FREE SHIPPING!</p>
            <div className="stuff-description__block">
                <p className="stuff-description__block__header">
                    Description
                </p>
                <p className="stuff-description__block__header">
                    Incredibly lightweight yet just as cozy and soft as fleece, Nike Forward is a whole new way to stay comfortable. This warm, hooded jacket has a subtle drape and roomy fit so you can move and layer with ease. Its precision-cut fabric panels have a seamless bond and unfinished edge for a clean, modern look.<a style={{color: '#515151'}} href="https://yesoriginal.com.ua/uk/kurtka-nike-forward-bomber-jacket-grey-dq6667-077?gclid=CjwKCAiAxvGfBhB-EiwAMPakqnCz-TuZ6fZHY5NIxpEKiisH3HPY1s6uS5uqCqbKG9pvqXT0VWCkmRoC-f8QAvD_BwE">Read more</a>
                </p>
            </div>
        </div>
    )
}
