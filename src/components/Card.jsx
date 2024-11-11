import { useEffect,useState } from "react"

export function Profiles() {
    const [profiles, setProfiles] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:3000/api/profiles")
        .then(response => response.json())
        .then(data => setProfiles(data))
    },[])

    return (
        <div>
            {profiles.map(profile => (
                <Card key={profile._id}> {/* Assuming profile has a unique id */}
                    <h1 className="title">{profile.username}</h1>
                    <p>{profile.description}</p>
                    <h2>Interests</h2>
                    <ul>
                        <li>{profile.intrests}</li>
                        <li>{profile.intrests}</li>
                        <li>{profile.intrests}</li>
                    </ul>
                    <a className='button' href={profile.instagramurl}>Google</a>
                    <a className='button' href={profile.twitterurl}>Twitter</a>
                </Card>
            ))}
        </div>
    );
}


export function Card({children}) {
    return (
        <div style={{height:"300px"}} >
            {children}
        </div>
    )
}