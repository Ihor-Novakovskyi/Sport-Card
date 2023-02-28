import './action-button.css'
export default function ActionButton() {
    const labelButtons = [
        {
            label: 'Add to Bag',
            action: 'buy',
            icon: 'url(./image/bag.svg)'
        }, 
        {
            label: 'Add to Wishlist',
            action: 'wishlist',
            icon: 'url(./image/heart.svg)'
        }
    ]; 
         
    const buttons = labelButtons.map(({label, action, icon}, id) => {
        return <a href="https://yesoriginal.com.ua/uk/verhnyaya-odezhda/zhenskie-bombery/" className={`button-action-block__item button-action-block__item-${action}`} key={id}>
            <span className='button-icon ' style={{backgroundImage: icon}}></span>  <span>{label}</span>
        </a>
    })
    return (
        <div className="button-action-block">
            {buttons}
        </div>
    )
}

