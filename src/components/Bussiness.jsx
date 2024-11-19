import { useState } from 'react'
import '../App.css'

export default function BussinessPage() {
    const [username,setUserName] = useState("")
    const [description,setDescription] = useState("")
    const [twitterurl,setTwitterUrl] = useState("")
    const [instagramurl,setInstagramUrl] = useState("")
    const [intrests,setIntrests] = useState([""])

    let timer;
    function handleUserChange(value) {
        console.log(value);
        setUserName(value);
    }
    function wrapper(e) {
        const value = e.target.value;
        clearTimeout(timer);
        timer = setTimeout(() => handleUserChange(value),250)
    }
    return (
        <div className="form-container">
                <label for="name">Name: </label>
                <input type="text" name="" id="" placeholder={"name"} required onChange={wrapper}/><br></br>
                <label for="description">Description: </label>
                <input type="text" name="" id="" placeholder={"description"} required onChange={(e)=>{
                        const value = e.target.value;
                        console.log(value);
                        setDescription(value);
                }}/><br></br>
                <label for="description">Twitter URL: </label>
                <input type="url" name="" id="" placeholder='Enter Url' required onChange={(e)=>{
                    const value = e.target.value;
                    console.log(value);
                    setTwitterUrl(value);
                }}/><br></br>
                <label for="description">Instagram URl: </label>
                <input type="url" name="" id="" placeholder='Enter Url' required onChange={(e)=>{
                    const value = e.target.value;
                    console.log(value);
                    setInstagramUrl(value);
                }}/><br></br>
            <label for="">Intrests</label>
<input type="text" name="Intrests" id="" placeholder='give your intrests (comma separated)' onChange={(e) => {
    const value = e.target.value;
    console.log(value);
    // Split the input by commas and trim whitespace from each interest
    const interestsArray = value.split(',').map(interest => interest.trim());
    setIntrests(interestsArray);
}}/><br></br>
                <button type="button" onClick={()=>{
                    fetch("http://localhost:3000/api/details",{
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                username:username,
                                description:description,
                                twitterurl:twitterurl,
                                instagramurl:instagramurl,
                                intrests:intrests
                        })
                    })
                        .then(async function(response){
                            const data = await response.json()
                            console.log(data);
                            alert("card created");
                    })
                }}>Create</button>
        </div>
    )
}