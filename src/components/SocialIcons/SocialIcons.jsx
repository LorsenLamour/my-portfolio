import "../SocialIcons/SocialIcons.css";
import { socialLinks } from "../../constantsDataJS/SocialLinks";

export default function SocialIcons() {
    return (

        <div className="social-icons">
            {socialLinks.map(({ name, icon: Icon, url }) => (
                <a key={name} href={url}>
                    <Icon size={28} color="aqua"/>
                </a>
            ))}

        </div>
    )
}