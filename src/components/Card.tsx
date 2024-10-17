import profilePic from '../assets/react.svg'

function Card() {
    return (
      <div className="card">
          <img className="card-image" src={profilePic} alt="profile picture"></img>
          <h2 className="card-title">Junior Nakamura</h2>
          <p className="card-text">I make code to live and also I love gym</p>
      </div>
    );
}

export default Card;
