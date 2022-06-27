import { Container, Text, Image } from "@nextui-org/react";

function NoContent() {
    return (

            <Container css={{
                display: "flex",
                flexDirection: "column",
                height :"calc(100vh - 100px)",
                alignItems: "center",
                justifyContent: "center",
                alignSelf: "center",
            }}>
                <Text h1>No have favorites</Text>
                <Image 
                    src="https://media.giphy.com/media/3o7btLqYqjQQQQQQQQ/giphy.gif"
                    css={{
                        opacity: 0.9,
                    }}
                />
            </Container>
      );
}

export default NoContent;