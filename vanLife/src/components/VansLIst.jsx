import { useEffect, useState } from "react"
import PropTypes from "prop-types"


const VansList = () => {

    const [ vansData, setVansData ] = useState([])

    const fetchData = async () => {
        try{
            const response = await fetch("/api/vans")
            const data = await response.json()
            return data;
        } catch (error) {
            console.error("An error occured:", error);
            throw error
        }
    }

    useEffect(
        () => {
            fetchData()
            .then (
                (data) => setVansData(data.vans)
            )
        },
        [] // empty array means run once on load, and then never again until the component is unmounted or re-rendered
    )

    if (vansData)  

    return (
        
        <div>
            <h3 className="text-center">Explore our van options</h3>
            <div className="VanGrid">
            {vansData.map(
                van=>(
                    <Card 
                    imageUrl={van.imageUrl}
                    name={van.name}
                    price={van.price}
                    key={van.id}
                    description={van.description}
                    type={van.type}
                    />
                )
            )}
            </div>
        </div>
    )
}


const Card = ({ imageUrl, name, price, type }) => {

    const styles = {
        display: 'flex',
        flexDirection: 'column',
    }


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
        <div style={styles} className="card">
            <img className= 'cardImage'src={imageUrl}/>
            <div className="
            cardDetails">
            <div className="cardDetails_name_badge">
                <h4>{name}</h4>
            <div style={badge} className="badge">{type.charAt(0).toUpperCase() + type.slice(1)}</div>
            </div>    
            <p><h5>${price}</h5>/day</p>
            </div>
            
            

        </div>
    )
}

Card.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired  ,
    description :PropTypes.string,
    type: PropTypes.string

}



export default VansList