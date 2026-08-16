import { useState, useEffect } from "react";
import type { User } from "../types";

function CreateForm({
  onSubmit,
  initialData,
}: {
  onSubmit: (data: User) => void;
  initialData?: User;
}) {
  const [username, setUsername] = useState(initialData?.username || "");
  const [geburtsdatum, setGeburtsdatum] = useState(
    initialData?.geburtsdatum || "",
  );
  const [geschlecht, setGeschlecht] = useState(initialData?.geschlecht || "");
  const [email, setEmail] = useState(initialData?.email || "");
  const [adresse, setAdresse] = useState(initialData?.adresse || "");
  const [telefonnummer, setTelefonnummer] = useState(
    initialData?.telefonnummer || "",
  );
  const [website, setWebsite] = useState(initialData?.website || "");
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    setUsername(initialData?.username || "");
    setGeburtsdatum(initialData?.geburtsdatum || "");
    setGeschlecht(initialData?.geschlecht || "");
    setEmail(initialData?.email || "");
    setAdresse(initialData?.adresse || "");
    setTelefonnummer(initialData?.telefonnummer || "");
    setWebsite(initialData?.website || "");
  }, [initialData]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const newErrors = {
      username: !username.trim(),
      geburtsdatum: !geburtsdatum.trim(),
      geschlecht: !geschlecht.trim(),
      email: !email.trim(),
      adresse: !adresse.trim(),
      telefonnummer: !telefonnummer.trim(),
      website: !website.trim(),
    };

    setErrors(newErrors);
    const hasError = Object.values(newErrors).some((v) => v);
    if (hasError) return;

    onSubmit({
      username,
      geburtsdatum,
      geschlecht,
      email,
      adresse,
      telefonnummer,
      website,
    });

    if (!initialData) {
      setUsername("");
      setGeburtsdatum("");
      setGeschlecht("");
      setEmail("");
      setAdresse("");
      setTelefonnummer("");
      setWebsite("");
      setErrors({});
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-field">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && (
          <span className="error-text">Bitte geben Sie einen Wert ein</span>
        )}
      </div>
      <div className="form-field">
        <label htmlFor="geburtsdatum">Geburtsdatum</label>
        <input
          type="date"
          id="geburtsdatum"
          value={geburtsdatum}
          onChange={(e) => setGeburtsdatum(e.target.value)}
          onClick={(e) => (e.target as HTMLInputElement).showPicker?.()}
        />
        {errors.geburtsdatum && (
          <span className="error-text">Bitte geben Sie einen Wert ein</span>
        )}
      </div>
      <div className="form-field">
        <label htmlFor="geschlecht">Geschlecht</label>
        <select
          id="geschlecht"
          value={geschlecht}
          onChange={(e) => setGeschlecht(e.target.value)}
        >
          <option value="">Bitte auswählen</option>
          <option value="männlich">Männlich</option>
          <option value="weiblich">Weiblich</option>
          <option value="divers">Divers</option>
        </select>
        {errors.geschlecht && (
          <span className="error-text">Bitte geben Sie einen Wert ein</span>
        )}
      </div>
      <div className="form-field">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && (
          <span className="error-text">Bitte geben Sie einen Wert ein</span>
        )}
      </div>
      <div className="form-field">
        <label htmlFor="adresse">Adresse</label>
        <input
          type="text"
          id="adresse"
          value={adresse}
          onChange={(e) => setAdresse(e.target.value)}
        />
        {errors.adresse && (
          <span className="error-text">Bitte geben Sie einen Wert ein</span>
        )}
      </div>
      <div className="form-field">
        <label htmlFor="telefonnummer">Telefonnummer</label>
        <input
          type="text"
          id="telefonnummer"
          value={telefonnummer}
          onChange={(e) => setTelefonnummer(e.target.value)}
        />
        {errors.telefonnummer && (
          <span className="error-text">Bitte geben Sie einen Wert ein</span>
        )}
      </div>
      <div className="form-field">
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
        {errors.website && (
          <span className="error-text">Bitte geben Sie einen Wert ein</span>
        )}
      </div>
      <button type="submit" className="submit-button">
        {initialData ? "Speichern" : "Absenden"}
      </button>
    </form>
  );
}

export default CreateForm;
