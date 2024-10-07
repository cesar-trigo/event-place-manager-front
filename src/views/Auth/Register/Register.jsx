import authQueries from "../../../services/authQueries";
import { useRef } from "react";

function Register() {
  const nameRef = useRef();
  const lastNameRef = useRef();
  const photoRef = useRef();
  const ageRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const genreRef = useRef();
  const projectRef = useRef();

  const handleSubmit = async e => {
    e.preventDefault();

    let userValue = {
      name: nameRef.current.value,
      lastname: lastNameRef.current.value,
      photo: photoRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      age: ageRef.current.value,
      genre: genreRef.current.value,
      project: [],
    };

    try {
      let res = await authQueries.register(userValue);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h4>REGISTER</h4>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="name" ref={nameRef} />
        <input type="text" name="lastname" placeholder="lastname" ref={lastNameRef} />
        <input type="text" name="photo" placeholder="photo" ref={photoRef} />
        <input type="email" name="email" placeholder="email" ref={emailRef} />
        <input type="password" name="password" placeholder="password" ref={passwordRef} />
        <input type="number" name="age" placeholder="age" ref={ageRef} />
        <input type="text" name="genre" placeholder="genre" ref={genreRef} />
        <input type="text" name="project" placeholder="project" ref={projectRef} />
        <button>Register</button>
      </form>
    </div>
  );
}

export default Register;
