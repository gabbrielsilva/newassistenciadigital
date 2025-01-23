import Link from 'next/link';
import styles from './cards.module.css'
import Image from 'next/image'
import Lottie from 'lottie-react';



import programacao from '../../../img/AnimationPr.json'
import marketing from '../../../img/marketign.png'
import seo from '../../../img/seo.png'
import check from '../../../img/check12.png'


export function Cards() {
    return (
        <div className={styles.container}>
            <div >
                <section className={styles.cards}>
                    <div style={{ width: '100px', height: '100px', backgroundColor: 'red' }}>
                        <Lottie animationData={programacao} loop={true} />
                    </div>
                    <Link href="/criacao-sites" className={styles.textTitulo}>Desenvolvimento</Link>
                    <Link href="/criacao-sites" className={styles.textSubTitulo}>Design e desenvolvimento de produtos web/mobile.</Link>
                </section>
                <section className={styles.cards}>
                    <Image src={seo} alt="programação" width={100} height={100} className={styles.icone} />
                    <Link href="/criacao-sites" className={styles.textTitulo}>Desenvolvimento</Link>
                    <Link href="/criacao-sites" className={styles.textSubTitulo}>Design e desenvolvimento de produtos web/mobile.</Link>
                </section>

            </div>

            <div>
                <section className={styles.cards}>
                    <Image src={marketing} alt="programação" width={100} height={100} className={styles.icone} />
                    <Link href="/criacao-sites" className={styles.textTitulo}>SEO</Link>
                    <Link href="/criacao-sites" className={styles.textSubTitulo}>Aumente seu tráfego orgânico e conquiste mais clientes</Link>
                </section>
                <section className={styles.cards}>
                    <Image src={marketing} alt="programação" width={100} height={100} className={styles.icone} />
                    <Link href="/criacao-sites" className={styles.textTitulo}>SEO</Link>
                    <Link href="/criacao-sites" className={styles.textSubTitulo}>Aumente seu tráfego orgânico e conquiste mais clientes</Link>
                </section>
            </div>

            <div className={styles.containertext} >
                <div>
                    <h5>POR QUE A JG?</h5>
                    <h2>Mude a forma que você vê o digital</h2>
                    <p>Baseada em avanços de tecnologia para o segmento, trabalhamos na criação de sites, plataformas e soluções digitais para que seus clientes possam estar em contato diário com sua empresa, sendo assim, seu site não será apenas um cartão de visitas, e sim uma ferramenta de apoio para que sua empresa possa crescer.</p>
                    <p>Desenvolvemos projetos com foco na navegabilidade, visibilidade e acessibilidade e elaboramos de acordo com a sua necessidade.</p>
                    <p>Para nós da Safira Design, cada empresa é tratada de forma única, refletindo na concepção de nossos designs criativos e diferenciados. Nós desenvolvemos nossos projetos com o pensamento estratégico, em parceria com nossos clientes para criar grandes ideias e experiências digitais.</p>
                </div>

                <section className={styles.ckeck}>
                    <div className={styles.cardscheck}>
                        <Image src={check} alt="programação" width={40} height={40} className={styles.icone} />
                        <span>Entenda seu público</span>
                    </div>
                    <div className={styles.cardscheck}>
                        <Image src={check} alt="programação" width={40} height={40} className={styles.icone} />
                        <span>Entenda seu público</span>
                    </div>
                </section>

                <section className={styles.ckeck}>
                    <div className={styles.cardscheck}>
                        <Image src={check} alt="programação" width={40} height={40} className={styles.icone} />
                        <span>Entenda seu público</span>
                    </div>
                    <div className={styles.cardscheck}>
                        <Image src={check} alt="programação" width={40} height={40} className={styles.icone} />
                        <span>Entenda seu público</span>
                    </div>
                </section>


            </div>

        </div>



    )


}