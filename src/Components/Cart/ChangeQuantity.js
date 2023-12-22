function ChangeQuantity({quantity, setQuantity}) {
    const addQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
    }
    
    const subtractQuantity = () => {
        if( quantity <= 1) {
            return;
        }
        const newQuantity = quantity - 1;
        setQuantity(newQuantity);
    }
    return ( 
        <div className="quantityContainer">
            <button onClick={subtractQuantity}>-</button>
            <span className="quantity">{quantity}</span>
            <button onClick={addQuantity}>+</button>
        </div>
    );
}

export default ChangeQuantity;