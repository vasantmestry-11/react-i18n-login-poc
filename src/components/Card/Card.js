import "./Card.css";

const Card = () => {
  return (
    <div className="login-card card d-flex flex-direction-column">
      <div className="card-body">
        <h5 className="card-title text-center mb-4">Login</h5>
        <div className="mb-3">
          <input
            type="text"
            className="form-control form-control-sm"
            placeholder="Username"
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control form-control-sm"
            placeholder="Password"
          />
        </div>
        <button className="btn btn-outline-success w-100 btn-sm">Login</button>
      </div>
    </div>
  );
};

export default Card;
