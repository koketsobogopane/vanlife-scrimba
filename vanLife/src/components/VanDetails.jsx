 import { Link, useParams } from "react-router-dom"
 import { useEffect, useState } from "react"
 import { PropTypes } from 'prop-types'
 
 const VanDetails = () => {

    const [ vanData, setVanData ] = useState(null)

    const params = useParams()

    useEffect(
        () => {
            fetch(`/api/vans/${params.id}`)
                .then((res) => res.json())
                .then((data) => setVanData(data.vans))
        }, [params.id]
    
    )

    

    return (
        <div className="vanDetails_container" >
            <Link className="vanDetails_back">Back to all vans</Link>
            {
                vanData ? (
                   <View 
                        imageUrl={vanData.imageUrl}
                        type= {vanData.type}
                        price= {vanData.price}
                        description= {vanData.description}
                        name= {vanData.name}
                        />
                ) : <h2>Loading...</h2>
            }
        </div>
    )
 }

 export default VanDetails

 const View = ({imageUrl, type, price, description, name}) => {

    const colorCode = {
        simple: '#E17654',
        rugged: '#115E59',
        luxury: '#161616'
    }

    const badge = {
        backgroundColor : `${colorCode[type]}`,
        width:'5.3rem',
        height: '2.1rem',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '5px',
        color: '#fff',
        marginTop: '.5rem',
    }

    return (
        <div className="vanDetails">
        <img src={imageUrl} className="vanDetails_img" />
        <i style={badge}>{type}</i>
        <h2 className="vanDetails_name">{name}</h2>
        
        <span className="vanDetails_price"><h4>${price}</h4>/day</span>
        <p className="vanDetails_description">{description}</p>
        <button className="vanDetails_button"> Rent this van</button>
    </div>
    )
 }

 View.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    type:PropTypes.oneOf(['simple','rugged','luxury']).isRequired ,
    price: PropTypes.number.isRequired  ,
    description: PropTypes.string .isRequired,
    name: PropTypes.string.isRequired
 }