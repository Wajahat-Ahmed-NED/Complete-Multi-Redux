import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import Button from "../components/Button";
import Input from "../components/Input";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
// import { signUp } from "../config/firebase";

function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();


    let signup = (e) => {
        e.preventDefault();
        let obj = {
            email,
            password,
            name,
        };
        
        createUserWithEmailAndPassword(auth, obj.email, obj.password)
            .then((userCredential) => {
                // Signed in
                console.log(userCredential)
                const user = userCredential.user;
                let uid = user.uid;
                dispatch({
                    type: "SIGNUPDATA",
                    uid:uid,
                });
                navigate("/")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
                // ..
            });

    };

    return (
        <>
            <div className="head">
                <h1>Sign Up</h1>
            </div>
            <div>
                <form onSubmit={(e) => signup(e)}>
                    <div>
                        <Input
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Name"
                            type="text"
                        />
                    </div>
                    <div>
                        <Input
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            type="email"
                        />
                    </div>
                    <div>
                        <Input
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            type="password"
                        />
                    </div>
                    <div>
                        <Button>Sign Up</Button>
                    </div>
                </form>
            </div>
        </>
    );
}
export default SignUp;