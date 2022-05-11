import {
  Box,
  Center,
  Flex,
  FlexProps,
  Heading,
  IconButton,
  Image,
  Link,
  LinkProps,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { RiGithubFill } from "@react-icons/all-files/ri/RiGithubFill";
import { RiTwitterLine } from "@react-icons/all-files/ri/RiTwitterLine";
import { TiArrowRightOutline } from "@react-icons/all-files/ti/TiArrowRightOutline";
import * as React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Accordeon } from "../components/Accordeon";
import { NewsletterSignup } from "../components/NewsletterSignup";
import { YoutubePlayer } from "../components/YoutubePlayer";
// @ts-ignore
import TopostainHeader from "../images/topostain_header.svg";
// @ts-ignore
import TopostainBlue from "../images/topostain_blue.svg";
// @ts-ignore
import TopostainTeal from "../images/topostain_teal.svg";
// @ts-ignore
import DotsCheckmark from "../images/dots_checkmark.svg";
// @ts-ignore
import Logo from "../images/logo.svg";
import { ArrowDownIcon } from "@chakra-ui/icons";
import { scrollTo } from "react-scroll/modules/mixins/scroller";
import Scroll from "react-scroll";
const { Element } = Scroll;
const { scroller } = Scroll;

const BORDER_RADIUS = 40;

const IndexPage = () => {
  return (
    <Flex
      as="main"
      bgColor="background"
      w="100%"
      direction="column"
      alignItems="stretch"
      px={20}
    >
      <Flex pt={40} minH="100vh" pb={24}>
        <Stack direction="column" spacing={4} zIndex={1}>
          <Heading
            fontSize={{ base: "52px", md: "140px" }}
            fontWeight={600}
            color="primary"
            as="h1"
          >
            Mapedia.org
          </Heading>
          <Stack direction="row" alignItems="center">
            <Image src={Logo} w={{ base: "140px", md: "140px" }} ml="-12px" />
            <Heading as="h2" color="white" fontWeight={400} fontSize="50px">
              Explore. Learn. Grow
            </Heading>
          </Stack>
        </Stack>
        <Image
          position="absolute"
          zIndex={0}
          src={TopostainHeader}
          w={{ base: "960px", md: "960px" }}
          opacity={1}
          right={{ base: "-10%", md: "-18%" }}
          top={{ base: "50px", md: "-2%" }}
        />
      </Flex>

      <Block
        direction="column"
        alignItems="center"
        zIndex={1}
        position="relative"
        id="intro"
      >
        <Link
          position="absolute"
          top="-80px"
          _hover={{}}
          _active={{}}
          _focus={{}}
          left="50%"
          fontWeight={500}
          transform="translate(-50%,0)"
          color="white"
          fontSize="32px"
          onClick={() =>
            scroller.scrollTo("intro", {
              smooth: true,
              duration: 600,
            })
          }
        >
          Learn more
        </Link>
        <IconButton
          position="absolute"
          top={0}
          left="50%"
          transform="translate(-50%, -50%)"
          aria-label="Learn more"
          bgColor="secondary"
          onClick={() =>
            scroller.scrollTo("intro", {
              smooth: true,
              duration: 600,
            })
          }
          _hover={{ bgColor: "blue.500" }}
          _active={{}}
          _focus={{}}
          icon={<ArrowDownIcon boxSize={7} />}
          size="lg"
          color="white"
          isRound
        />
        <Heading fontSize="50px" color="primary">
          What's Mapedia?
        </Heading>
        <Text
          mt={6}
          textAlign="center"
          fontSize="20px"
          fontWeight={500}
          color="bodyColor"
        >
          Mapedia, an evolution of{" "}
          <Link href="https://sci-map.org" isExternal color="secondary">
            Sci-Map.org
          </Link>
          , is a new kind of learning platform at the crossroad between
          Wikipedia, Google Maps and Khan Academy: a{" "}
          <Link
            href="https://www.youtube.com/watch?v=wKcZ8ozCah0"
            color="secondary"
            isExternal
          >
            learning map
          </Link>{" "}
          built collaboratively to support learners learn to any topic
          seamlessly. Whether exploring unknown areas of knowledge or wanting to
          learn something precise as fast as possible, Mapedia provides guidance
          while leaving the learner in control. Our learning map shows how
          concepts are connected and where to learn them best.
          <br />
          <br />
          <br />
          Mapedia is the best place to get started learning anything, find the
          best learning materials, figure out what to learn next or connect with
          other learners on the same path as you.
        </Text>

        <Text
          mt={6}
          textAlign="center"
          fontSize="20px"
          fontWeight={600}
          color="primary"
        >
          Stay tuned, we're launching this summer ;)
        </Text>
        <Center mt={16}>
          <YoutubePlayer
            videoUrl="https://www.youtube.com/watch?v=9GC7evh2gP4"
            w="900px"
            skipThumbnail
          />
        </Center>
      </Block>
      <Box position="relative">
        <Image
          position="absolute"
          zIndex={0}
          src={TopostainBlue}
          w={{ base: "800px", md: "800px" }}
          opacity={1}
          left={{ base: "-400px", md: "-400px" }}
          top={{ base: "50px", md: "-300px" }}
        />
      </Box>
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
        <Block>
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
        </Block>
      </Section>
      <Box position="relative">
        <Image
          position="absolute"
          zIndex={0}
          src={TopostainTeal}
          w={{ base: "800px", md: "800px" }}
          opacity={1}
          right={{ base: "-400px", md: "-200px" }}
          top={{ base: "50px", md: "-200px" }}
        />
      </Box>
      <Section
        title={
          <>
            Join the{" "}
            <Text as="span" color="tertiary">
              Community
            </Text>
          </>
        }
      >
        <Wrap spacing={{ base: "40px", md: "100px" }}>
          <WrapItem>
            <CommunityLink
              href="https://sci-map.org/"
              text="Beta"
              icon={<Text>β</Text>}
            />
          </WrapItem>
          <WrapItem>
            <CommunityLink
              href="https://twitter.com/Mapedia_org"
              text="Twitter"
              icon={<RiTwitterLine fontSize="1.15em" />}
            />
          </WrapItem>
          <WrapItem>
            <CommunityLink
              href="https://github.com/sci-map-org/"
              text="Github"
              icon={<RiGithubFill fontSize="1.1em" />}
            />
          </WrapItem>
        </Wrap>
      </Section>
      <Section
        title={
          <>
            Follow our{" "}
            <Text as="span" color="primary" position="relative">
              <Image
                position="absolute"
                zIndex={0}
                src={DotsCheckmark}
                // w={{ base: "800px", md: "800px" }}
                right={{ base: "-100px", md: "-70%" }}
                top={{ base: "50px", md: "-90px" }}
              />
              Newsletter
            </Text>
          </>
        }
      >
        <Block>
          <NewsletterSignup />
        </Block>
      </Section>
      <Center py={32}>
        <Stack direction="row" alignItems="center" spacing={6}>
          <Text color="primary" fontWeight={500} fontSize="lg">
            © 2022 Mapedia.org
          </Text>
          <Text color="primary">-</Text>
          <Link
            color="primary"
            fontWeight={500}
            fontSize="lg"
            href="mailto:community@mapedia.org"
          >
            Contact
          </Link>
        </Stack>
      </Center>
    </Flex>
  );
};

export default IndexPage;

const Section: React.FC<
  { title: React.ReactNode | string } & Omit<FlexProps, "title">
> = ({ title, children, ...props }) => {
  return (
    <Flex direction="column" zIndex={1} mt={52} {...props}>
      <Heading size="2xl" mb={16} color="white">
        {title}
      </Heading>

      <Box>{children}</Box>
    </Flex>
  );
};

const CommunityLink: React.FC<{
  href: string;
  icon: React.ReactNode;
  text: string;
}> = ({ href, icon, text }) => {
  return (
    <Link href={href} _hover={{}} _active={{}} _focus={{}} isExternal>
      <Stack
        direction="row"
        borderRadius={28}
        px={5}
        py={2}
        alignItems="center"
        fontSize="3xl"
        fontWeight={600}
        bgColor="tertiary"
        color="white"
      >
        {icon}
        <Text as="span">{text}</Text>
      </Stack>
    </Link>
  );
};

const Block: React.FC<FlexProps> = ({ children, ...props }) => {
  return (
    <Flex
      bgColor="white"
      borderRadius={BORDER_RADIUS}
      py="100px"
      px="155px"
      {...props}
    >
      {children}
    </Flex>
  );
};
