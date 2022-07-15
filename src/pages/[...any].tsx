import { Center, Flex, Heading, Link, Text } from "@chakra-ui/react";
import * as React from "react";
import { useTimer } from "react-timer-hook";

const IndexPage = () => {
  const redirectionLink = `https://mapedia.org${window.location.pathname}${window.location.search}`;

  const { seconds } = useTimer({
    expiryTimestamp: new Date(Date.now() + 5 * 1000),
    onExpire: () => window.location.replace(redirectionLink),
  });

  return (
    <Center as="main" bgColor="white" w="100vw" minH="100vh">
      <Flex direction="column" alignItems="center">
        <Heading size="2xl" mb={12}>
          <Text as="span" color="blue.600">
            Sci-Map
          </Text>{" "}
          evolved into{" "}
          <Text as="span" color="teal.600">
            Mapedia!
          </Text>
        </Heading>
        <Text
          fontSize="2xl"
          fontWeight={600}
          color="gray.600"
          textAlign="center"
        >
          You'll be redirected to{" "}
          <Link
            color="blue.600"
            href={redirectionLink}
            display="block"
            my={4}
            fontSize="xl"
            fontWeight={800}
          >
            {redirectionLink}
          </Link>{" "}
          in {seconds} seconds
        </Text>
      </Flex>
    </Center>
  );
};

export default IndexPage;
