import { useTheme, Text, Spacer, Link } from "@nextui-org/react";
import Image from "next/image";
import NextLink from "next/link"
import { useRouter } from "next/router";
import styles from "./navbar.module.css"

export function NavBar() {

    const { theme } = useTheme()

    const router = useRouter()
    const handleClick = () => {
        router.push("/")
    }

    return (
        <div className={styles.navbar}>

            <Image src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"}
                width={100}
                height={100}
                style={{ cursor: "pointer" }}
                onClick={handleClick} />
            <NextLink href={"/"} passHref>

                <Link >
                    <Text size={"2.25rem"} color="white">P</Text>
                    <Text size={"1.75rem"} color="white">okémon</Text>
                </Link>
            </NextLink>


            <Spacer css={{
                flex: 1
            }} />
            <NextLink href={"/favorites"} passHref>
                <Link css={{}}>
                    <Text size={"1.55rem"} color="#EAF4FF">Favorite</Text>
                </Link>
            </NextLink>
        </div>
    );
}

