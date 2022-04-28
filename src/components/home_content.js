import Link  from "next/link"
import Pix from './pix_logo'
import styles from '../../styles/Home.module.css'

export default function HomeContent() {
    return (
        <>
            
        <h2 className={styles.h2}>O gateway de pagamentos<br/>
            instantaneos para seu negocio<br/> 
            do Brasil
        </h2>  
         
        <div>
            <Pix className={styles.pix} widht={44} height={60}/>

         </div>
         <div>
            <h2 className={styles.h2}>Site em construcao</h2> 
         </div>
        {/* <div>
            <Link href='/abra'passHref>
                <button className={styles.button}>Abra sua conta</button>       
            </Link>
        </div>    */}
        </>
    )
}

