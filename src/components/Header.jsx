export default function Header() {
  return (
    <header className="header">
      <img
        src="../me.jpg"
        alt="Profile"
        className="profile-img"
      />

      <h1 className="name">Soumadip Sen</h1>
      <p className="role">Backend Developer</p>
      <a href="https://medium.com/@soumadipsen1" className="website">
        soumadip_sen
      </a>

      <div className="buttons">
        <a href="mailto:soumadipsen1@gmail.com" target="_blank"><button className="email-btn">✉ Email</button></a>
        <a href="https://www.linkedin.com/in/soumadip-sen-b44a46300/" target="_blank">
  <button className="linkedin-btn">in LinkedIn</button>
</a>
      </div>
    </header>
  );
}
