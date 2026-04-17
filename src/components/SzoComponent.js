import React from "react";

export default function SzoComponent({ szo }) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">Szavak</h5>
        <p className="card-text">
          <strong>Angol:</strong> {szo.angol}
        </p>
        <p className="card-text">
          <strong>Magyar:</strong> {szo.magyar}
        </p>
        <p className="card-text">
          <strong>Visszajelzés:</strong>
        </p>
      </div>
    </div>
  );
}