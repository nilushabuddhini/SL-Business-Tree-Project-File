import image from './Icon.jpg'

function DisplayItems({ stores }){
    return(
        <div className='flex'>
        <div className="items">
        <img src={image} alt='logo'/>
        <h3 key={stores._id}><strong>Product</strong> : <em>{stores.title}</em></h3>
        <h3 key={stores._id}><strong>prize</strong> : <em>{stores.prize} LKR</em></h3>
        <p key={stores._id}><strong>description</strong> : <em>{stores.description}</em></p>
        <h3 key={stores._id}><strong>Contact Now</strong> : <em>{stores.phone}</em></h3>
        </div>
        </div>
    )
}

export default DisplayItems