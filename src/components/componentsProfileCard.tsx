import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faLocationDot,
  faVenusMars,
  faPhone,
  faEnvelope,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import type { User } from "../types";

function ProfileCard({
  user,
  onClose,
}: {
  user: User;
  onClose: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <div className="usercard-container">
      <button onClick={onClose} className="close-button">
        ×
      </button>
      <div className="usercard-header">
        <img
          className="usercard-header-image"
          src={`https://i.pravatar.cc/150?u=${user.username}`}
          alt={user.username}
        />
      </div>
      <div className="usercard-body">
        <div className="usercard-body-title">{user.username}</div>
        <div className="usercard-body-content">
          <div className="usercard-data-list">
            <div className="usercard-data-list-item">
              <span className="icon">
                <FontAwesomeIcon icon={faCalendar} />
              </span>
              {user.geburtsdatum}
            </div>
            <div className="usercard-data-list-item">
              <span className="icon">
                <FontAwesomeIcon icon={faLocationDot} />
              </span>
              {user.adresse}
            </div>
            <div className="usercard-data-list-item">
              <span className="icon">
                <FontAwesomeIcon icon={faVenusMars} />
              </span>
              {user.geschlecht}
            </div>
            <div className="usercard-data-list-item">
              <span className="icon">
                <FontAwesomeIcon icon={faPhone} />
              </span>
              {user.telefonnummer}
            </div>
            <div className="usercard-data-list-item">
              <span className="icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              {user.email}
            </div>
            <div className="usercard-data-list-item">
              <span className="icon">
                <FontAwesomeIcon icon={faGlobe} />
              </span>
              {user.website}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
