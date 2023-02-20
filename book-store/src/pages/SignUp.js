const SignUp = () => {
    return (
      <div>
        <form action="/api/users" method="POST">
            <label>Name</label>
            <input type="text" name="name" />
            <label>Email</label>
            <input type="email" name="email" />
            <label>Password</label>
            <input type="password" name="password" />

            <button>Register</button>
        </form>
      </div>
    );
  };
  
export default SignUp;