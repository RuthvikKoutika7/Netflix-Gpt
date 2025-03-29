import { useSelector } from "react-redux";
import Header from "./Header";

const Profile =()=>{
    const {email,displayName} = useSelector(store => store.user);
    return(
        <div>
            <Header />
            <h1 className="text-4xl ">Hello user 🙋‍♂️ {displayName}</h1>
            <h1 className="text-4xl ">Hello user 🙋‍♂️ {email}</h1>
        </div>
    )
}

export default Profile;