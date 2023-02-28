import './stuff-info.css'

export default function StuffInfo() {
   return (
    <div className="stuff">
        <p className="stuff__type">Nike Forward Bomber Jacket</p>
        <p className="stuff__name">Women's Hooded Jacket</p>
        <div className="stuff__sale">
            <span className="stuff__sale__new-price">$135</span>
            <span className="stuff__sale__old-price">$200</span>
        </div>
        <div className="stuff__select">
            <div className="stuff-item">
                <img src="./image/fox-girl.jpg" alt="choose jacket"  className="stuff-select__item"/>
            </div>
            <div className="stuff-select__item-active stuff-item">
                <img src="./image/front-side-girl.jpg" alt="choose hooded jacket"  className="stuff-select__item"/>
            </div>
        </div>
    </div>
    
   ) 
}