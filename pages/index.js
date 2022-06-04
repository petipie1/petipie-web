import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>OCTO - Scan</title>
        <meta name="description" content="Octo.al" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image src="/octo-scan.png" alt="Vercel Logo" width={180} height={180} />

        <Button className={styles.scanBtn} variant="outlined" size="medium">Scan QR code.</Button>
      </main>

      <footer className={styles.footer}>

        <Grid container item>
          <Grid item>
            <Typography style={{ color: "#737373" }}>{"Email: octo@gmail.com"}</Typography>
            <Typography style={{ color: "#737373" }}>{"Contact: 00355686284516"}</Typography>
          </Grid>

          <Grid container item style={{ marginTop: '10px' }}>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by{''}
              <span className={styles.logo_text}>
                Octo.al
                {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
              </span>
            </a>
          </Grid>

        </Grid>




      </footer>
    </div >
  )
}
