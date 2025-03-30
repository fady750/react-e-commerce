import { Link } from "react-router"

function HeaderCollectionLink({collectionType}) {
    return (
        <li>
            <Link to={`/collection?collectionType=${collectionType}`} >
                {collectionType}
            </Link>
        </li>
    )
}

export default HeaderCollectionLink
