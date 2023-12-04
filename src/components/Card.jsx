import './Card.css'
import PropTypes from 'prop-types'
  
  function Card({image, ...props}) {


    return (
  
        <div className="card">
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
                {props.children}
            </div>
        </div>
    )
  }

  Card.propTypes = {
    image: PropTypes.string,
    children: PropTypes.ReactNode,
  }

  export default Card
