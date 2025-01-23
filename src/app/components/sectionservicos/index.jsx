import styles from './servicos.module.css'
import Image from 'next/image'

import programcao from '../../../img/imagemprogramacao.png'

export function SectionServicos() {
    return (
        <div className={styles.container}>
            <h5>Nossos serviços</h5>
            <h2>Profissionalize a sua presença digital</h2>

            <div className={styles.containerservicos}>
                {/* Fundo desfocado */}
                <div className={styles.backgroundBlur}></div>

                <div className={styles.containercards}>
                    <div>
                        <div className={styles.titulo}>
                            <Image src={programcao} alt="programação" width={100} height={100} className={styles.icone} />
                            <span>Criação de Site</span>
                            
                        </div>
                       
                    </div>

                    <div>vasco</div>
                </div>
                <div className={styles.containercards}>
                    <div>vasco</div>
                    <div>vasco</div>
                </div>
            </div>
        </div>
    )
}
