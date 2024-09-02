import React from "react";

const ProfileIndicator = () => {
  // Supposons que l'avatar et le statut soient passés en tant que props ou obtenus via un état global
  const avatarUrl =
    "https://lh6.googleusercontent.com/proxy/ZLGihPRfkkerdJBqfRKKFRWQcXDCfMMuuK_6_IDH6Mfhu0VI3Du2L9eOTiz0yKsIftOesQQnj0whQCZFudjFH-cXgBKnebrpknuWtjKkDcRC5Ik"; // Remplacez par l'URL réelle
  const isOnline = true; // Remplacez par la logique réelle

  return (
    <div className="flex items-center">
      <img src={avatarUrl} alt="Profile" className="w-10 h-10 rounded-full" />
      <span
        className={`ml-2 w-3 h-3 rounded-full ${isOnline ? "bg-green-500" : "bg-red-500"}`}
      ></span>
    </div>
  );
};

export default ProfileIndicator;
