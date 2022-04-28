import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Parceiro from '../src/components/parceiro'
import HomeContent from '../src/components/home_content'
import { Nabvar } from '../src/navbar'
import styles from '../styles/Home.module.css'
import Duvidas from '../src/components/duvidas'
import Sobre from '../src/components/sobre'
import Contato from '../src/components/contato'
import Footer from '../src/components/footer'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Tryo Pay</title>
        <meta name="description" content="Tryo Pay Solucoes de pagamentos. O gateway de pagamentos do Brasil" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main id="main" className={styles.main}> 
        <div className={styles.navbar}>
          {/* <Nabvar/> */}
        </div>
          
        <div>
          <section id='home'>
           <HomeContent />
          </section>
        </div>
        <div>
          <section id='parceiro'>
            {/* <Parceiro /> */}
          </section>
        </div>
        <div>
          <section id='duvidas'>
            {/* <Duvidas /> */}
          </section>
        </div>
        <div>
          <section id='sobre'></section>
            {/* <Sobre /> */}
        </div>
        <div>
          <section id='contato'></section>
            {/* <Contato /> */}
        </div> 
      </main>
      <footer className={styles.footer}>
       {/* <Footer /> */}
      </footer>
    </div>
  )
}
