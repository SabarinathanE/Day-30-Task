export default function Card({result=[],DeleteData = () => {},EditData = () => {}}) {


    return (
        <div className="mt-3">
            <div className="row" > 
            <div className="col">
            <div className="card" >
            <div className="card-body">
                <h5 className="card-title"><b>Name:</b> {result.name}</h5>
                <h5 className="card-subtitle mb-2  Description"><b>UserName:</b> {result.username} </h5>
                <h5 className="card-subtitle mb-2  Description"><b>E-Mail:</b> {result.email} </h5>
                <h5 className="card-subtitle mb-2  Description"><b>Address:</b></h5>
                <h5 className="card-subtitle mb-2  Description address"><b>Street:</b>  {result.address.street} </h5>
                <h5 className="card-subtitle mb-2  Description address"><b>Suite:</b> {result.address.suite} </h5>
                <h5 className="card-subtitle mb-2  Description address"><b>City:</b> {result.address.city} </h5>
                <h5 className="card-subtitle mb-2  Description address"><b>Zipcode:</b> {result.address.zipcode} </h5>
                <h5 className="card-subtitle mb-2  Description address"><b>Latitude:</b> {result.address.geo.lat} </h5>
                <h5 className="card-subtitle mb-2  Description address"><b>Longitute:</b> {result.address.geo.lng} </h5>
                <h5 className="card-subtitle mb-2  Description"><b>Phone:</b> {result.phone} </h5>
                <h5 className="card-subtitle mb-2  Description"><b>Website:</b> {result.website} </h5>
                <h5 className="card-subtitle mb-2  Description"><b>Company:</b> </h5>
                <h5 className="card-subtitle mb-2  Description address"><b>Name:</b> {result.company.name} </h5>
                <h5 className="card-subtitle mb-2  Description address"><b>catchPhrase:</b> {result.company.catchPhrase} </h5>
                <h5 className="card-subtitle mb-2  Description address"><b>Bs:</b> {result.company.bs} </h5>
                </div>
                <div className="Bottom mb-3">
                <button type="button" className="btn mx-3 btn-primary btn-sm" style={{width: 70}} onClick={() => EditData(result)} >Edit</button>
                <button type="button" className="btn btn-secondary btn-sm" style={{width: 70}} onClick={() => DeleteData(result)} >Delete</button>
                </div>
            </div>
            </div>
            </div>
            </div>
    )
}