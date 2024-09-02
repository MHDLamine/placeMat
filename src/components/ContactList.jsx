import React from "react";

const ContactList = ({ montreID }) => {
  // Exemple de données de contacts
  const contacts = [
    {
      id: 1,

      name: "Alice",
      avatar:
        "https://lh6.googleusercontent.com/proxy/ZLGihPRfkkerdJBqfRKKFRWQcXDCfMMuuK_6_IDH6Mfhu0VI3Du2L9eOTiz0yKsIftOesQQnj0whQCZFudjFH-cXgBKnebrpknuWtjKkDcRC5Ik",
      isOnline: true,
    },
    {
      id: 2,
      name: "Bob",
      avatar:
        "https://lh6.googleusercontent.com/proxy/ZLGihPRfkkerdJBqfRKKFRWQcXDCfMMuuK_6_IDH6Mfhu0VI3Du2L9eOTiz0yKsIftOesQQnj0whQCZFudjFH-cXgBKnebrpknuWtjKkDcRC5Ik",
      isOnline: false,
    },
    // Ajoutez plus de contacts ici
  ];

  return (
    <div
      className="w-full h-full p-4 overflow-y-auto"
      style={{ backgroundColor: "#d7d4ff" }}
    >
      <ul>
        {contacts.map((contact) => (
          <>
            <li
              style={{borderBottom:'1px solid #242a2f',paddingBottom:'5px',cursor:'pointer'}}
              key={contact.id}
              className="flex items-center mb-4"
              onClick={() => montreID(contact.id)}
            >
              <img
                src={contact.avatar}
                alt={contact.name}
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-3">
                <p className="font-semibold">{contact.name}</p>
                <span
                  className={`text-sm ${contact.isOnline ? "text-green-500" : "text-red-500"}`}
                >
                  {contact.isOnline ? "En ligne" : "Hors ligne"}
                </span>
              </div>
            </li>
          
          </>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
