import React, { useState } from "react";

export default function CarSelection() {
  const [carOptions] = useState([
    { id: 1, name: "Mercedes S600" },
    { id: 2, name: "Ford S700" },
    { id: 3, name: "BMW i8" },
    { id: 4, name: "Audi A8" },
  ]);
  const [colorOptions] = useState([
    { id: 1, name: "Black" },
    { id: 2, name: "Pink" },
    { id: 3, name: "Green" },
    { id: 4, name: "Blue" },
  ]);

  const [selection, setSelection] = useState({
    car: "",
    color: "",
  });

  return (
    <div>
      <h2>Select your car</h2>

      <div>Select a car</div>
      <select
        value={selection.car}
        onChange={(e) =>
          setSelection((prev) => ({ ...prev, car: e.target.value }))
        }
      >
        <option value="">-- Choose a car --</option>
        {carOptions.map((c) => (
          <option key={c.id} value={c.name}>
            {c.name}
          </option>
        ))}
      </select>

      <div>Select a color</div>
      <select
        value={selection.color}
        onChange={(e) =>
          setSelection((prev) => ({ ...prev, color: e.target.value }))
        }
      >
        <option value="">-- Choose a color --</option>
        {colorOptions.map((c) => (
          <option key={c.id} value={c.name}>
            {c.name}
          </option>
        ))}
      </select>

      <div style={{ marginTop: "1rem" }}>
        {selection.car && selection.color ? (
          <strong>
            You selected a {selection.color} - {selection.car}
          </strong>
        ) : (
          <span>Please select both a car and a color.</span>
        )}
      </div>
    </div>
  );
}
