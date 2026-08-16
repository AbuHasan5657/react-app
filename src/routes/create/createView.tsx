import CreateForm from "../../components/componentsForm";
import { useUser } from "../../context/userContext";
import type { User } from "../../types";

function CreateView() {
  const { addUser } = useUser();

  function handleSubmit(data: User) {
    console.log("Neuer User:", data);
    addUser(data);
    alert("Added user");
  }

  return (
    <div className="create-view">
      <CreateForm onSubmit={handleSubmit} />
    </div>
  );
}

export default CreateView;
