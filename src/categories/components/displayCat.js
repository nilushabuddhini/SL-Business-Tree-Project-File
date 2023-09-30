import { Link } from 'react-router-dom'

export default function DisplayCategories({ category }){

    return(
        <Link to={`/category/${category.category}`} className='text-decoration-none'>
            <div className="col card-mage">
                <div className="card shadow-sm">
                    <img src={category.bgImage} alt="" className="imgdes" />
                    <div className="card-body">
                        <h4 className="card-text">{category.category}</h4>
                    </div>
                </div>
            </div>
          </Link>
    )
}