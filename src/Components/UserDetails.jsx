import { useEffect, useState } from "react";
import Users from "./Users";
import axios from "axios";

export default function UserDetails() {

let [id,setId] = useState(0);
let [editindex,setEditindex] = useState(null);
const [editid, setEditid] = useState();
let [data, setData] = useState("");
let [description, setDescription] = useState("");
let [email, setEmail] = useState("");
let [street, setStreet] = useState("");
let [suite, setSuite] = useState("");
let [city, setCity] = useState("");
let [zipcode, setZipcode] = useState("");
let [lat, setLat] = useState("");
let [lng, setLng] = useState("");
let [phone, setPhone] = useState("");
let [website, setWebsite] = useState("");
let [name, setName] = useState("");
let [catchPhrase, setCatchPhrase] = useState("");
let [bs, setBs] = useState("");
var [CopiedData,setCopieddata] = useState([]);
const [isEditing,setIsEditing] = useState(false);


useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((result) => {
        setCopieddata(result.data)
    })
    return () => {};
},[]); 


function AddDataInitial() {
    function IdList() {
        setId(id + 1)
    }
    IdList()
    let newList = {
        id: id, 
        name: data,
        username: description,
        email: email ,
        address: {
            street: street,
            suite: suite,
            city: city,
            zipcode: zipcode,
            geo: {
                lat: lat,
                lng: lng
            }
        },
        phone: phone,
        website: website,
        company: {
            name: name,
            catchPhrase: catchPhrase,
            bs: bs,
        }
    }
    let copydata = [...CopiedData];
    copydata.push(newList);
    setCopieddata(copydata);
    setData("");
    setDescription("");
    setEmail("");
    setStreet("");
    setSuite("");
    setCity("");
    setZipcode("");
    setLat("");
    setLng("");
    setPhone("");
    setPhone("");
    setWebsite("");
    setName("");
    setCatchPhrase("");
    setBs ("");
    setIsEditing(false);
}

function InputDataName(e) {
    setData(e.target.value)
 }

function InputUser(e) {
    setDescription(e.target.value)
 }

 function InputEmail(e) {
    setEmail(e.target.value)
 }

 function InputStreet(e) {
    setStreet(e.target.value)
 }

 function Inputsuite(e) {
    setSuite(e.target.value)
 }

 function Inputcity(e) {
    setCity(e.target.value)
 }

 function Inputzipcode(e) {
    setZipcode(e.target.value)
 }

 function Inputlatitude(e) {
    setLat(e.target.value)
 }

 function Inputlongitude(e) {
    setLng(e.target.value)
 }

 function Inputphone(e) {
    setPhone(e.target.value)
 }

 function Inputwebsite(e) {
    setWebsite(e.target.value)
 }

 function Inputcompany(e) {
    setName(e.target.value)
 }

 function Inputphrase(e) {
    setCatchPhrase(e.target.value)
 }

 function Inputbs(e) {
    setBs(e.target.value)
 }

 function EditData(result) {
    setEditid(result.id)
    setData(result.name);
    setDescription(result.username);
    setEmail(result.email);
    setStreet(result.address.street);
    setSuite(result.address.suite);
    setCity(result.address.city);
    setZipcode(result.address.zipcode);
    setLat(result.address.geo.lat);
    setLng(result.address.geo.lng);
    setPhone(result.phone);
    setWebsite(result.website);
    setName(result.company.name);
    setCatchPhrase(result.company.catchPhrase);
    setBs (result.company.bs);
    let indexvalue = CopiedData.findIndex(obj => obj.id == result.id)
    setEditindex(indexvalue)
    setIsEditing(true)
 }

 function DeleteData(result) {
    setCopieddata(CopiedData.filter((details) => details.id !== result.id ));
 }
 function EditedData() {
    let newEditedList = {
        id: editid, 
        name: data,
        username: description,
        email: email ,
        address: {
            street: street,
            suite: suite,
            city: city,
            zipcode: zipcode,
            geo: {
                lat: lat,
                lng: lng
            }
        },
        phone: phone,
        website: website,
        company: {
            name: name,
            catchPhrase: catchPhrase,
            bs: bs,
        }
    }
    let UpDatedList = [...CopiedData];
    console.log(UpDatedList)
    UpDatedList[editindex] = newEditedList;
    setCopieddata(UpDatedList)
    setData("");
    setDescription("");
    setEmail("");
    setStreet("");
    setSuite("");
    setCity("");
    setZipcode("");
    setLat("");
    setLng("");
    setPhone("");
    setPhone("");
    setWebsite("");
    setName("");
    setCatchPhrase("");
    setBs (""); 
    setIsEditing(false)
 }

 function Placedata() {
    if (isEditing) {
        EditedData();
    }else{
        if (data.length > 0 && description.length > 0 && email.length > 0 && street.length > 0 && suite.length > 0 &&
            city.length > 0 && zipcode.length > 0 && lat.length > 0 && lng.length > 0 && phone.length > 0 &&
            website.length > 0 && name.length > 0 && catchPhrase.length > 0 && bs.length > 0){
            AddDataInitial();
        }else alert("Must Enter All Details")

    }
 }

    return (
        <section>
            <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-2">
                        <input type="text" aria-label="First name" value={data} placeholder="Name" style={{width:"180px"}} onChange={InputDataName} />
                    </div>
                    <div className="col-2">
                        <input type="text" aria-label="First name" value={description}  placeholder="UserName" style={{width:"180px"}} onChange={InputUser}  />
                    </div>
                    <div className="col-2">
                        <input type="text" aria-label="First name" value={email} placeholder="E-mail" style={{width:"180px"}} onChange={InputEmail} />
                    </div>
                    <div className="col-2">
                        <input type="text" aria-label="First name" value={street} placeholder="Street" style={{width:"180px"}} onChange={InputStreet} />
                    </div>
                    <div className="col-2">
                        <input type="text" aria-label="First name" value={suite} placeholder="Suite" style={{width:"180px"}} onChange={Inputsuite} />
                    </div>
                    <div className="col-2">
                        <input type="text" aria-label="First name" value={city} placeholder="City" style={{width:"180px"}} onChange={Inputcity} />
                    </div>
                    </div>
                    </div>
                    <div className="container mt-5">
                <div className="row">
                <div className="col-2">
                        <input type="text" aria-label="First name" value={zipcode} placeholder="Zipcode" style={{width:"180px"}} onChange={Inputzipcode} />
                    </div>
                    <div className="col-2">
                        <input type="text" aria-label="First name" value={lat} placeholder="latitude" style={{width:"180px"}} onChange={Inputlatitude} />
                    </div>
                    <div className="col-2">
                        <input type="text" aria-label="First name" value={lng}  placeholder="Longitude" style={{width:"180px"}} onChange={Inputlongitude}  />
                    </div>
                    <div className="col-2">
                        <input type="text" aria-label="First name" value={phone} placeholder="Phone" style={{width:"180px"}} onChange={Inputphone} />
                    </div>
                    <div className="col-2">
                        <input type="text" aria-label="First name" value={website} placeholder="Website" style={{width:"180px"}} onChange={Inputwebsite} />
                    </div>
                    <div className="col-2">
                        <input type="text" aria-label="First name" value={name} placeholder="Company-Name" style={{width:"180px"}} onChange={Inputcompany} />
                    </div>
                    </div>
                    </div>
                    <div className="container mt-5">
                <div className="row">
                <div className="col-2">
                        <input type="text" aria-label="First name" value={catchPhrase} placeholder="CatchPhrase" style={{width:"180px"}} onChange={Inputphrase} />
                    </div>
                    <div className="col-2">
                        <input type="text" aria-label="First name" value={bs}  placeholder="Bs" style={{width:"180px"}} onChange={Inputbs}  />
                    </div>
                <div className="col-8 Add">
                        <button onClick={Placedata}>{isEditing ? 'UpData Data' : 'Add Data'}</button>
                    </div>
                    </div></div>
            </div>
                <div className="container">   
                      {
                        CopiedData.map((result,index) => (
                        <Users key={index} result={result} DeleteData={DeleteData} EditData={EditData} />
                           ))
                      }               
                    </div>
        </section>
    )
}

