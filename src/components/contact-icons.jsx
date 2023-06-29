import "../styles/contact-icons.scss";
import "../styles/style.scss";

const Contacticons = () => {
  return (
    <div className="contact-icons container section">
      <button>email me</button>
      <ul>
        <li>
          <a href="https://www.facebook.com/profile.php?id=100068578215585">
            <img src="Facebook-icon.png" alt="" />
          </a>
        </li>
        <li>
          <a href="https://www.messenger.com/">
            <img src="Messenger-icon.png" alt="" />
          </a>
        </li>
        <li>
          <a href="https://api.whatsapp.com/send?phone=98912957724">
            <img src="Whatsapp-icon.jpg" alt="" />
          </a>
        </li>
      </ul>
      <div>
        <button onClick={() => (window.location.href = "tel:09129527724")}>
          Call-me
        </button>
        <button onClick={() => (window.location.href = "sms:09129527724")}>
          Text-me
        </button>
      </div>
    </div>
  );
};
export default Contacticons;
