import Filter from "./Filter";
import {optionsSort, optionForEveryCollectionFilter}from "../globalVariable"

function CollectionOperations({collectionType}) {
    let options = optionForEveryCollectionFilter[collectionType];
    return (
        <div className="flex items-center justify-center mx-auto  w-full space-x-4" >
            <Filter options={options} filterName="category" />
            <Filter options={optionsSort} filterName="sortBy" />
        </div>
    )
}

export default CollectionOperations
