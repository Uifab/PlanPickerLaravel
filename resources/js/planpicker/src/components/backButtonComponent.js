
import { useNavigate } from "react-router-dom";


export default function BackButton(){

    const navigate = useNavigate();

    return (
        <a onClick={() => navigate(-1)} className="btn btn-danger w-75 d-block m-auto back-btn mt-5">Back</a>
    );

}