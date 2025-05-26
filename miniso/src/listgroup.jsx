function ListGroup()
{
    const items = ["New York","L A","London","Tokyo","Hyderabad"]

    if(items.length === 0)
        return <p>No items found</p>;
    
    return(
        <>
        <h1>List of Places</h1>
        <ul className="list-group">
            {items.map((item) =>(
                <li key={item}>{item}</li>
            ))}
        </ul>
        </>
    )
}
export default ListGroup;