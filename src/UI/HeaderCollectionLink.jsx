import { Link } from "react-router"

function HeaderCollectionLink({collectionType}) {
    return (
        <li>
            <Link to={`/collection?gender=${collectionType}`} >
                {collectionType}
            </Link>
        </li>
    )
}

export default HeaderCollectionLink
