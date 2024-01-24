// Icons
import { FaXTwitter, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa6";
// Style
const containerStyle = 'd-flex flex-row justify-content-evenly my-3 socMediaCtr';
// Types
import { Member } from "./MembersType";

const SocMediaMapper = ({ member }: { member: Member }) => (
  <div className={containerStyle}>
    {Object.entries(member.socialMedia).map(([social, link]) => (
      <a
        key={social}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {social === 'fb' && <FaFacebook />}
        {social === 'tiktok' && <FaTiktok />}
        {social === 'twitter' && <FaXTwitter />}
        {social === 'instagram' && <FaInstagram />}
      </a>
    ))}
  </div>
)
export default SocMediaMapper