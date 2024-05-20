import './Fooditem.css'
import { assets } from '../../assets/assets'
import { useContext } from 'react';
import { StoreContext } from '../../Context/StoreContext';
const Fooditem = ({id,name,price,description,img}) => {
    
    
    const {cartItems,addToCart,removeFromCart}=useContext(StoreContext);
    
  return (
    <div className='fooditem'>
      <div className='fooditem-img-container'>
        <img src={img} alt="" className='fooditem-image' />
        {!cartItems[id]
            ?<img src={assets.add_icon_white} className='add' onClick={()=>addToCart(id)}></img>
            :<div className='food-item-counter'>
                <img src={assets.remove_icon_red} className='remove' onClick={()=>removeFromCart(id)} />
                <p>{cartItems[id]}</p>
                <img src={assets.add_icon_green} alt=""onClick={()=>addToCart(id)} />
            </div>
        }
      </div>
      <div className="food-item-info">
        <div className='fooditem-name-rating'>
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
        </div>
        <p className='description'>{description}</p>
        <p className='price'>${price}</p>
      </div>
    </div>
  )
}

export default Fooditem
