import Head from "next/head";
import { FC } from "react";
import { NavBar } from "../ui";
import styles from "./layout.module.css";

interface Props {
    title?: string;
    children?: React.ReactNode;
}

export const Layout: FC<Props> = ({children, title})=> {
    return ( 
        <>
        <Head>
            <title>{title || "Pokemon APP"}</title>
            <meta name="author" content="Alisson"/>
        </Head>
        
        <NavBar/>

        <main className={styles.main}>

            {children}
        </main>
        </>
     );
}

