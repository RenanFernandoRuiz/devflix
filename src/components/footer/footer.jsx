// para ultilizar o componente crie o import na página que deseja
// coloque o nome da pessoa  entre <Footer>NomePessoa</Footer>
// passe a informação dentro da tag Footer -LINK
//<Footer link={}>RenanRuiz</Footer>
import SocialLinks from "../socialLinks/socialLinks";
import "./footer.module.css";
import "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"

const Footer = ({ children, link }) => {
    return (
        <footer>
            <p>
                Feito com <ion-icon name="heart" /> por {""}
                <a href={link} target="_blank">{children}</a>
            </p>
            <SocialLinks icon={"logo-github"} href={"#"} />
            <SocialLinks icon={"logo-instagram"} href={"#"} />
            <SocialLinks icon={"logo-linkedin"} href={"#"} />
            <SocialLinks icon={"logo-twitter"} href={"#"} />
            <SocialLinks icon={"logo-facebook"} href={"#"} />
            
        </footer>
    );
};

export default Footer;