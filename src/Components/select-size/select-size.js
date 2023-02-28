import './select-size.css'
import { Component } from 'react' 

export default class SelectSize extends Component {
    state = {
        indActiveElement: 2,
    }
    byInformation = {
        size: ''
    }

    onSelectSize = (e) => {
      const elements = document.querySelectorAll('.select-size__buttons__item')
      const indexEl = [...elements].indexOf(e.currentTarget)
        this.setState({indActiveElement: indexEl});
    }
    
    render() {
        const {state:{indActiveElement}, onSelectSize} = this;
        const labelButtons = [
            'XS (0–2)', 
            'S (4–6)',
            'M (8–10)',
            'L (12–14)',
            'XL (16–18)',
            '2XL (20–22)'
        ];

        const buttons = labelButtons.map((el, ind) => {
            let clazz = "select-size__buttons__item";
            const active = "select-size__buttons__item-active";
            if(ind === indActiveElement) {
                clazz = `${clazz} ${active}`
            }
            return (
                <div key={ind} onClick={onSelectSize} className={clazz}>
                    <span className='item-size-text'>{el}</span>
                    </div>

            )
        })

        return (
            <div className='select'>
                <div className="select-size">
                    <span className="select-size__item">
                         Select Size
                    </span>
                    <span className="select-size__item">
                        <span>Size Giude</span>
                        <span className="size-icon" style={{backgroundImage: "url(./image/comb.svg)"}}></span>
                    </span>
                </div>
                <div className="select-size__buttons">
                   {buttons}
                </div>
            </div>
        )
    }
   
}