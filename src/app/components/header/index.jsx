import styles from "./header.module.css"
import { FaWhatsapp } from 'react-icons/fa'
export function Header() {
    return (
        <header className={styles.container}>
            <div>
                <h1 className={styles.titulo}>
                    Marketing Digital
                    e Sites Profissionais
                </h1>
                <h2 className={styles.subtitulo}>
                    JG ASSITENCIA DIGITAL – DESDE 2022 NO MERCADO
                </h2>
                <p className={styles.paragrafo}>No desenvolvimento de sites, na sua otimização ou nas estratégias de marketing digital, oferecemos soluções que fazem sua empresa se destacar.
                    Ajudamos a conectar sua marca ao público certo, convertendo visitas em resultados reais e criando oportunidades de crescimento sustentável.</p>
            </div>
            <div>
                <a href='https://wa.me/5521965687628' className={styles.containerbutao}>
                    <span className={styles.wpp}> <FaWhatsapp /></span>
                    <span className={styles.textbutao}> Entre em contato</span>
                </a>
            </div>
        </header>
    );
}