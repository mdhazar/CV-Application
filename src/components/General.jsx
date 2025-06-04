export default function General({ fullName, email, phone, github }) {
  return (
    <div>
      <div>
        <h1>{fullName}</h1>
      </div>
      <div className="general-info">
        <div>{email}</div>

        <div>{phone}</div>
        <div>{github}</div>
      </div>
    </div>
  );
}
