import React from 'react';
import { Table, Button } from 'reactstrap';

const CollectionTable = (props) => {
    const collectionList = () => {
        return props.collections.map((collection, index) => {
            return(
                <tr key={index}>
                    <th scope="row">{collection.id}</th>
                    <td>{collection.name}</td>
                    <td>
                        <Button id="view-collection" onClick={() => {
                            props.displayCollection(collection) }}>View</Button>
                    </td>
                </tr>
            )
        })
    }

    return(
        <div>
            <h3>Collections</h3>
            <hr/>
            <Table>
                <thead id="firstcolumn">
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody id="secondcolumn">
                    {collectionList()}
                </tbody>
            </Table>

        </div>
    )
}
export default CollectionTable;