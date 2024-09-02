import React from "react";

const LogoutButton = () => {
  const handleLogout = () => {
    // Ajoutez ici la logique de déconnexion
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white px-4 py-2 rounded"
    >
      Déconnexion
    </button>
  );
};

export default LogoutButton;
