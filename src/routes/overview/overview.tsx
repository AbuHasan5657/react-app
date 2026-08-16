import { useState } from "react";
import { useUser } from "../../context/userContext";
import ProfileCard from "../../components/componentsProfileCard";
import CreateForm from "../../components/componentsForm";
import type { User } from "../../types";

function Overview() {
  const { users, removeUser, updateUser } = useUser();
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  function handleUpdate(data: User) {
    if (editingIndex !== null) {
      updateUser(editingIndex, data);
      setEditingIndex(null);
    }
  }

  if (editingIndex !== null) {
    return (
      <div className="edit-view">
        <button className="cancel-edit" onClick={() => setEditingIndex(null)}>
          ← Zurück
        </button>
        <CreateForm onSubmit={handleUpdate} initialData={users[editingIndex]} />
      </div>
    );
  }

  return (
    <div className="overview-container">
      {users.length === 0 && <p>Noch keine Nutzer erstellt.</p>}
      {users.map((user, index) => (
        <div
          key={index}
          onClick={() => setEditingIndex(index)}
          className="usercard-wrapper"
        >
          <ProfileCard
            user={user}
            onClose={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.stopPropagation();
              removeUser(index);
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default Overview;
