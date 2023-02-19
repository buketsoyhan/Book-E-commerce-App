const SignUp = () => {
    return (
      <div>
        <form>
            <label>Name</label>
            <input type="text" name="name" />
            <label>Email</label>
            <input type="email" name="email" />
            <label>Password</label>
            <input type="password" name="password" />
        </form>
      </div>
    );
  };
  
export default SignUp;