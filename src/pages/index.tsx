import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Input,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import { TiArrowRightOutline } from "@react-icons/all-files/ti/TiArrowRightOutline";
import * as React from "react";
import { Accordeon } from "../components/Accordeon";

const IndexPage = () => {
  return (
    <main>
      <Flex w="100%" direction="column" alignItems="stretch" pb={200}>
        <Center pt={20}>
          <Heading size="4xl" color="teal.600">
            Mapedia.org
          </Heading>
        </Center>
        <Flex direction="column" px={40} pt={20}>
          <Heading size="2xl" mb={10} color="gray.700">
            Our Manifesto
          </Heading>
          <Box pl={16}>
            <Accordeon
              textAlign="left"
              color="blue.500"
              borderColor="blue.400"
              items={[
                {
                  title:
                    "Mapedia is a Crowdsourced Learning Map, designed to help people learn seamlessly",
                  bulletPoints: [
                    "Leveraging the latest technologies, we index any kind of learning material in a representation of all knowledge in order to serve them at the right time to users",
                    "We enable a new, visual, and custom-tailored way to learn that allows learners stay in control, whether pursuing knowledge with a precise goal in mind or exploring new topics out of curiosity",
                    "We strive to build an accessible, all in one learning tool, removing as many blockers as possible - from the logistical ones to the motivational ones",
                  ],
                },
                {
                  title: "Mapedia's mission is to empower online learners",
                  bulletPoints: [
                    "Our impact = the number of people helped * weight of the impact per person",
                    "We aim to make a platform able to help those, predominantly between the ages of 14-99, seeking a deeper, secondary level of knowledge growth",
                  ],
                },
                {
                  title: "Mapedia is Free",
                  bulletPoints: [
                    "No compromise on accessibility in exchange for profits: no paywalls from us, ever",
                    "We recommend free learning materials (e.g. web courses) first",
                    "By leveraging crowdsourcing, peer learning, and peer-based feedback, we aim to make traditionally paid education products and services available for free (e.g. cohort based courses, certifications)",
                    "Our business model is transparent and will focus on helping learners find quality job offers and scouting for talent (at first, this might evolve)",
                  ],
                },
                {
                  title: "Mapedia is Open Source & Unbiased",
                  bulletPoints: [
                    "No affiliated links",
                    "A transparent recommendation engine - checkout our code :)",
                    "We aim to recommend what’s best for the learners - not what’s more profitable for us",
                  ],
                },
                {
                  title: "Mapedia is limitless",
                  bulletPoints: [
                    "It is merely an accumulation of all knowledge and is endlessly expandable",
                    "Any topic that can be learned online can be supported on Mapedia",
                    "It adapts to the development of knowledge along with the current discourse and debates", // rephrase?
                  ],
                },
                {
                  title: "Mapedia is owned by the community",
                  bulletPoints: [
                    <Box>
                      <Text>The Mapedia community will:</Text>
                      <List>
                        <ListItem>
                          <ListIcon as={TiArrowRightOutline} color="teal.500" />
                          Own the content and curation on Mapedia
                        </ListItem>
                        <ListItem>
                          <ListIcon as={TiArrowRightOutline} color="teal.500" />
                          Fuel the recommendation engine
                        </ListItem>
                        <ListItem>
                          <ListIcon as={TiArrowRightOutline} color="teal.500" />
                          Contribute to business and product decisions
                        </ListItem>
                      </List>
                    </Box>,
                    "10% of Mapedia's equity is reserved for the community",
                    "User generated content such as concept explanations will be supported later on",
                  ],
                },
                {
                  title: "Mapedia is made for anyone, by everyone: join us now",
                  bulletPoints: [
                    <Text>
                      We are in inclusive community,{" "}
                      <Text as="span" fontWeight={600}>
                        everyone
                      </Text>{" "}
                      is welcomed
                    </Text>,
                  ],
                },
              ]}
            />
          </Box>
        </Flex>
        <Flex direction="column" px={40} pt={20}>
          <Heading size="2xl" mb={10} color="gray.700">
            Follow our{" "}
            <Text as="span" color="teal.600">
              newsletter
            </Text>
          </Heading>
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
              Stay up to date with the development and future launch of Mapedia,
              and be part of the early members of the community
            </Text>
            <Input
              size="lg"
              variant="outline"
              placeholder="your@email.com"
              w="60%"
              maxW="700px"
              minW="300px"
              bgColor="white"
            />
            <Button size="lg" colorScheme="blue" w="300px">
              Subscribe
            </Button>
          </Stack>
        </Flex>
      </Flex>
    </main>
  );
};

export default IndexPage;
