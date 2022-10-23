import { useState } from "react";
import Contact, { ContactDemo } from "./Contact";

interface IContact {
  name: string;
  email: string;
}

const Contacts = () => {
  const [contact, setContact] = useState<IContact>({} as IContact);
  const [contactList, setContactList] = useState<IContact[]>([]);

  //const onChange = (e: { target: { name: any; value: any } }) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const onClick = () => {
    setContactList([...contactList, contact]);
    setContact({} as IContact);
  };

  const handleRemove = (email: string) => {
    const newContact = contactList.filter((contact) => contact.email !== email);
    setContactList(newContact);
  };

  return (
    <div>
      <h1>🦸 Contact list</h1>
      <div className="form">
        <input
          value={contact.name}
          onChange={onChange}
          name="name"
          placeholder="Contact Name"
          type="text"
        />
        <input
          value={contact.email}
          onChange={onChange}
          name="email"
          placeholder="Contact Email"
          type="email"
        />
        <button onClick={onClick}>Add</button>
      </div>

      {contactList.map((contactName) => (
        <Contact
          key={contactName.name}
          name={contactName.name}
          email={contactName.email}
          handleRemove={handleRemove}
        />
      ))}

      <ContactDemo
        name="SAM"
        email="sam@mail.com"
        handleRemove={handleRemove}
      />
    </div>
  );
};

export default Contacts;
