import { useState } from "react";

export default function SignUpModal({ onClose }) {
  const [form, setForm] = useState({ name: "", house: "" });

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Sorting Ceremony</h2>

        <input
          placeholder="Wizard Name"
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />
        <input
          placeholder="Hogwarts House"
          onChange={(e) =>
            setForm({ ...form, house: e.target.value })
          }
        />

        <button onClick={onClose}>Join Hogwarts</button>
      </div>
    </div>
  );
}
