import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  LinkProps,
  List,
  ListIcon,
  ListItem,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { TiArrowRightOutline } from "@react-icons/all-files/ti/TiArrowRightOutline";
import * as React from "react";
import { Accordeon } from "../components/Accordeon";
import { NewsletterSignup } from "../components/NewsletterSignup";
import { YoutubePlayer } from "../components/YoutubePlayer";
// @ts-ignore
import TopostainTeal from "../images/topostain_teal.svg";
// @ts-ignore
import Logo from "../images/logo.svg";

const IndexPage = () => {
  return (
    <main>
      <Flex
        w="100%"
        direction="column"
        alignItems="stretch"
        pb={200}
        position="relative"
      >
        <Image
          position="absolute"
          zIndex={-1}
          src={TopostainTeal}
          w={{ base: "360px", md: "340px" }}
          opacity={0.5}
          right={{ base: "10%", md: "10%" }}
          top={{ base: "50px", md: "200px" }}
        />
        <Box h={4} bgColor="teal.600" />
        <Center pt={20} flexDirection="row">
          <Image
            // position="absolute"
            // bgColor="blue.100"
            zIndex={-1}
            src={Logo}
            w={{ base: "360px", md: "340px" }}
            left={{ base: "10%", md: "10%" }}
            top={{ base: "50px", md: "200px" }}
          />
          <Heading size="4xl" color="teal.600">
            Mapedia.org
          </Heading>
        </Center>
        <Center pt={8}>
          <YoutubePlayer
            videoUrl="https://www.youtube.com/watch?v=9GC7evh2gP4"
            skipThumbnail
          />
        </Center>
        <Center px={{ base: 5, lg: 40 }} pt={20}>
          <Text
            textAlign="center"
            fontSize="lg"
            color="gray.700"
            fontWeight={500}
          >
            What's Mapedia ?<br />
            Mapedia, an evolution of{" "}
            <Link href="https://sci-map.org" isExternal color="blue.600">
              Sci-Map.org
            </Link>
            , is a new kind of learning platform at the crossroad between
            Wikipedia, Google Maps and Khan Academy: a{" "}
            <Link
              href="https://www.youtube.com/watch?v=wKcZ8ozCah0"
              color="blue.600"
              isExternal
            >
              learning map
            </Link>{" "}
            built collaboratively to support learners learn any topic
            seamlessly. Wether exploring unknown areas of knowledge or wanting
            to learn something precise as fast as possible, Mapedia provides
            guidance while letting the learner in control. It shows how concepts
            are connected and where to learn them best. It is the best place to
            get started learning anything, find the best learning materials,
            figure out what to learn next or connect with other learners on the
            same path as you.
          </Text>
        </Center>
        <Section
          title={
            <>
              Read our{" "}
              <Text as="span" color="blue.500">
                Manifesto
              </Text>
            </>
          }
        >
          <Accordeon
            textAlign="left"
            color="blue.500"
            borderColor="blue.400"
            expandFirstItem
            items={[
              {
                title:
                  "Mapedia is a crowdsourced learning map, designed to help people learn seamlessly",
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
                title: "Mapedia is free",
                bulletPoints: [
                  "No compromise on accessibility in exchange for profits: no paywalls from us, ever",
                  "We recommend free learning materials (e.g. web courses) first",
                  "By leveraging crowdsourcing, peer learning, and peer-based feedback, we aim to make traditionally paid education products and services available for free (e.g. cohort based courses, certifications)",
                  "Our business model is transparent and will focus on helping learners find quality job offers and scouting for talent (at first, this might evolve)",
                ],
              },
              {
                title: "Mapedia is open source & unbiased",
                bulletPoints: [
                  "No affiliated links",
                  <>
                    A transparent recommendation engine - checkout our{" "}
                    <Link
                      href="https://github.com/sci-map-org/"
                      color="blue.600"
                    >
                      code
                    </Link>{" "}
                    :)
                  </>,
                  "We aim to recommend what’s best for the learners - not what’s more profitable for us",
                ],
              },
              {
                title: "Mapedia is flexible & expandable",
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
                  "User generated content such as concept explanations will be supported later on",
                ],
              },
              {
                title: "Mapedia is made for anyone, by everyone: join us now!",
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
        </Section>
        <Section
          title={
            <>
              Join the{" "}
              <Text as="span" color="orange.500">
                Community
              </Text>
            </>
          }
        >
          <Wrap
            w="100%"
            justify="center"
            spacing={{ base: "40px", md: "100px" }}
            color="gray.600"
          >
            <WrapItem>
              <CommunityLink href="https://sci-map.org/">Beta</CommunityLink>
            </WrapItem>
            <WrapItem>
              <CommunityLink href="https://twitter.com/Mapedia_org">
                Twitter
              </CommunityLink>
            </WrapItem>
            <WrapItem>
              <CommunityLink href="https://github.com/sci-map-org/">
                Github
              </CommunityLink>
            </WrapItem>
          </Wrap>
        </Section>
        <Section
          title={
            <>
              Follow our{" "}
              <Text as="span" color="teal.600">
                Newsletter
              </Text>
            </>
          }
        >
          <NewsletterSignup />
        </Section>
      </Flex>
    </main>
  );
};

export default IndexPage;

const Section: React.FC<{ title: React.ReactNode | string }> = ({
  title,
  children,
}) => {
  return (
    <Flex direction="column" px={{ base: 2, lg: 40 }} pt={20}>
      <Heading size="2xl" mb={10} color="gray.700">
        {title}
      </Heading>

      <Box px={{ base: 4, md: 20 }}>{children}</Box>
    </Flex>
  );
};

const CommunityLink: React.FC<LinkProps> = ({ children, ...props }) => {
  return (
    <Link
      fontSize="3xl"
      fontWeight={600}
      transition="color linear 0.5s"
      textDecor="underline"
      _hover={{ color: "gray.800" }}
      isExternal
      {...props}
    >
      {children}
    </Link>
  );
};
