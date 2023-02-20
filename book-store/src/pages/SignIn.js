const SignIn = () => {
    return (
      <div>
        <form action="/api/users" method="GET" >

            <label>Email</label>
            <input type="email" name="email"  />
            <label>Password</label>
            <input type="password" name="password" />

            <button>Login</button>
        </form>
      </div>
    );
  };
  
export default SignIn;