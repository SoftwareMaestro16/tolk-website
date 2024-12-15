import styles from "./Footer.module.scss";

function Footer() {

    return (
        <div className={styles.footer}>
            <footer>
            <h3>Built by <a href="https://t.me/SoftwareMaestro" target="_blank" rel="noopener noreferrer">@SoftwareMaestro</a></h3>
            </footer>
        </div>
    );
}

export default Footer;