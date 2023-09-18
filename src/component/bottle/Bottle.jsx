import PropTypes from 'prop-types';
import './bottle.css';

const Bottle = ({bottleDetails,handlePurches}) => {

    const {img, name, price, stock} = bottleDetails;
    return (
        <div className='bottle-Style'>
          <img style={{width:"200px", alignItems:"center"}} src={img}/>
          <h3>Name : {name}</h3>  
          <p>Stock:{stock}</p>  
          <p>Price:{price}</p> 
          <button onClick={()=>handlePurches(bottleDetails)}>Purches</button> 
        </div>
    );
};


Bottle.propTypes ={
    bottleDetails : PropTypes.object.isRequired,
    handlePurches : PropTypes.func.isRequired
}
export default Bottle;