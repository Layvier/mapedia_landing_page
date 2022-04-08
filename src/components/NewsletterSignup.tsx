import {
  Alert,
  AlertIcon,
  Button,
  Flex,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useMemo, useState } from "react";

const emailRegexp =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validateEmail = (email: string): boolean => {
  return emailRegexp.test(String(email).toLowerCase());
};

export const NewsletterSignup: React.FC<{}> = () => {
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const [email, setEmail] = useState("");

  const emailIsValid = useMemo(() => {
    return validateEmail(email);
  }, [email]);

  const send = () => {
    var xhr = new XMLHttpRequest();
    xhr.open(
      "POST",
      "https://assets.mailerlite.com/jsonp/17966/forms/51820238011893460/subscribe",
      true
    );
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
      if (this.readyState === XMLHttpRequest.DONE) {
        const data = JSON.parse(this.response);
        if (data.success) {
          setStatus("success");
        } else {
          setStatus("error");
        }
      }
    };
    xhr.send(
      `fields[email]=${encodeURIComponent(email)}&ml-submit=1&anticsrf=true`
    );
  };
  return (
    <Flex>
      <iframe
        name="hiddenFrame"
        style={{
          position: "absolute",
          top: "-1px",
          left: "-1px",
          width: "1px",
          height: "1px",
        }}
      ></iframe>

      <Stack
        flexDirection="column"
        alignItems="center"
        spacing={5}
        bgColor="gray.100"
        p={10}
        borderRadius={20}
        mx={20}
      >
        <Text
          fontSize="lg"
          fontStyle="italic"
          textAlign="center"
          px={10}
          fontWeight={500}
        >
          Stay up to date with the development and future launch of Mapedia, and
          be part of the early members of the community
        </Text>
        {!status && (
          <Stack
            w="60%"
            maxW="700px"
            minW="300px"
            alignItems="center"
            spacing={4}
          >
            <Input
              aria-label="email"
              type="email"
              size="lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="outline"
              placeholder="your@email.com"
              bgColor="white"
              isInvalid={!!email && !emailIsValid}
            />

            <Button
              colorScheme="blue"
              size="lg"
              w="300px"
              onClick={() => send()}
              disabled={!email || !emailIsValid}
            >
              Subscribe
            </Button>
          </Stack>
        )}
        {status === "success" && (
          <Alert status="success">
            <AlertIcon />
            <Text as="span">
              <Text as="span" fontWeight={600}>
                Subscribed!
              </Text>{" "}
              Please confirm your email address by clicking on the link we sent
              to{" "}
              <Text as="span" fontWeight={600}>
                {email}
              </Text>
            </Text>
          </Alert>
        )}
        {status === "error" && (
          <Alert status="error">
            <AlertIcon />
            Oops! Something went wrong, please try again.
          </Alert>
        )}
      </Stack>
    </Flex>
  );
};
