import {
  Box,
  Button,
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
  useBreakpointValue,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { RiGithubFill } from "@react-icons/all-files/ri/RiGithubFill";
import { RiTwitterLine } from "@react-icons/all-files/ri/RiTwitterLine";
import { TiArrowRightOutline } from "@react-icons/all-files/ti/TiArrowRightOutline";
import { AiOutlineMedium } from "@react-icons/all-files/ai/AiOutlineMedium";
import { HiOutlineMail } from "@react-icons/all-files/hi/HiOutlineMail";
import * as React from "react";
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
import { ArrowDownIcon, EmailIcon } from "@chakra-ui/icons";
import Scroll from "react-scroll";
const { scroller } = Scroll;

const BORDER_RADIUS = 40;

const IndexPage = () => {
  React.useEffect(() => {
    if (!document) return;

    window.addEventListener("resize", () => {
      document
        .querySelector(":root")
        //@ts-ignore
        ?.style.setProperty("--vh", window.innerHeight / 100 + "px");
    });
  }, []);

  const buttonSize = useBreakpointValue(
    {
      base: "md",
      sm: "lg",
      md: "xl",
    },
    "lg"
  );
  return (
    <Flex
      as="main"
      bgColor="background"
      w="100%"
      maxW="100%"
      overflow="hidden"
      direction="column"
      alignItems="stretch"
      px={{ base: 3, md: 20 }}
    >
      <Box position="relative">
        <Image
          position="absolute"
          zIndex={0}
          src={TopostainHeader}
          w={{ base: "800px", md: "850px", lg: "920px" }}
          opacity={1}
          right={{ base: "-30%", md: "-30%", lg: "-260px" }}
          top={{ base: "160px", md: "0px", lg: "-40px" }}
        />
      </Box>
      <Flex
        pt={{ base: 24, md: 28, lg: 32 }}
        minH={{ base: "calc(100 * var(--vh))", sm: "100vh" }}
        pb={24}
        position="relative"
      >
        <Stack direction="column" spacing={{ base: 2, md: 4 }} zIndex={1}>
          <Heading
            fontSize={{ base: "48px", sm: "60px", md: "110px", lg: "140px" }}
            fontWeight={600}
            color="primary"
            as="h1"
          >
            Mapedia.org
          </Heading>
          <Stack direction="row" alignItems="center">
            <Image
              src={Logo}
              w={{ base: "100px", md: "120px", lg: "140px" }}
              h={{ base: "83px", md: "100px", lg: "123px" }}
              ml="-12px"
            />
            <Heading
              as="h2"
              color="white"
              fontWeight={400}
              fontSize={{ base: "24px", sm: "30px", md: "40px", lg: "50px" }}
            >
              Explore. Learn. Grow.
            </Heading>
          </Stack>
          <Box pt={{ base: 6, md: 10 }}>
            <Button
              variant="solid"
              size={buttonSize}
              maxH="52px"
              borderRadius={12}
              colorScheme="blue"
              rightIcon={<HiOutlineMail />}
              onClick={() =>
                scroller.scrollTo("newsletter", {
                  smooth: true,
                  duration: 600,
                })
              }
            >
              Checkout our Newsletter!
            </Button>
          </Box>
        </Stack>
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
          top={{ base: "-70px", md: "-80px" }}
          _hover={{}}
          _active={{}}
          _focus={{}}
          left="50%"
          fontWeight={400}
          transform="translate(-50%,0)"
          color="white"
          fontSize={{ base: "24px", md: "32px" }}
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
          bgColor="#F0F0F0"
          onClick={() =>
            scroller.scrollTo("intro", {
              smooth: true,
              duration: 600,
            })
          }
          _hover={{ bgColor: "white" }}
          _active={{}}
          _focus={{}}
          icon={<ArrowDownIcon boxSize={7} />}
          size="lg"
          color="background"
          isRound
        />
        <Heading fontSize={{ base: "30px", md: "50px" }} color="primary">
          What's Mapedia?
        </Heading>
        <Flex
          mt={8}
          direction="column"
          textAlign="center"
          fontSize={{ base: "15px", md: "20px" }}
          fontWeight={500}
          color="bodyColor"
        >
          <Text>
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
            built collaboratively to support learners to learn any topic
            seamlessly. Whether exploring unknown areas of knowledge or wanting
            to learn something precise as fast as possible, Mapedia provides
            guidance while leaving the learner in control. Our learning map
            shows how concepts are connected and where to learn them best.
          </Text>
          <Text mt={8}>
            Mapedia is the best place to get started learning anything, find the
            best learning materials, figure out what to learn next or connect
            with other learners on the same path as you.
          </Text>
        </Flex>

        <Text
          mt={8}
          textAlign="center"
          fontSize="20px"
          fontWeight={600}
          color="primary"
        >
          Stay tuned, we're launching this summer ;)
        </Text>
        <Center mt={12}>
          <Box
            w={{ base: "300px", sm: "400px", md: "500px", lg: "600px" }}
            h={{ base: "200px", sm: "280px", md: "340px", lg: "400px" }}
          >
            <YoutubePlayer
              videoUrl="https://www.youtube.com/watch?v=9GC7evh2gP4"
              w="100%"
              h="100%"
              skipThumbnail
            />
          </Box>
        </Center>
      </Block>
      <Box position="relative">
        <Image
          position="absolute"
          zIndex={0}
          src={TopostainBlue}
          w={{ base: "600px", md: "800px" }}
          opacity={1}
          left={{ base: "-200px", md: "-400px" }}
          top={{ base: "-200px", md: "-300px" }}
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
                  "We aim to make a platform able to help any web user seeking a deeper, secondary level of knowledge growth",
                ],
              },
              {
                title: "Mapedia is free",
                bulletPoints: [
                  <>
                    "No compromise on accessibility in exchange for profits: no
                    paywalls from us,{" "}
                    <Text as="span" fontWeight={600}>
                      ever
                    </Text>
                  </>,
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
                      href="https://github.com/Mapedia-org/"
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
                    We are an inclusive community,{" "}
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
          right={{ base: "-200px", md: "-200px" }}
          top={{ base: "-120px", md: "-200px" }}
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
        <Wrap spacing={{ base: "20px", sm: "30px", md: "60px", lg: "90px" }}>
          <WrapItem>
            <CommunityLink
              href="https://beta.mapedia.org/"
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
              href="https://github.com/Mapedia-org/"
              text="Github"
              icon={<RiGithubFill fontSize="1.1em" />}
            />
          </WrapItem>
          <WrapItem>
            <CommunityLink
              href="https://mapedia-org.medium.com/"
              text="Medium"
              icon={<AiOutlineMedium fontSize="1.1em" />}
            />
          </WrapItem>
        </Wrap>
      </Section>
      <Section
        id="newsletter"
        title={
          <>
            Follow our{" "}
            <Text as="span" color="primary" position="relative">
              <Image
                position="absolute"
                zIndex={0}
                src={DotsCheckmark}
                w={{ base: "100px", md: "150px" }}
                right={{ base: "-25%", md: "-75%", lg: "-50%" }}
                top={{ base: "-77px", md: "-110px", lg: "-90px" }}
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
      <Center pt={40} pb={24}>
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
    <Flex direction="column" zIndex={1} mt={{ base: 28, md: 52 }} {...props}>
      <Heading
        fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
        mb={{ base: 10, md: 16 }}
        color="white"
      >
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
        pl={{ base: 3, md: 4, lg: 5 }}
        pr={{ base: "12px", md: "16px", lg: 5 }}
        py={{ base: "6px", md: "7px", lg: "9px" }}
        alignItems="center"
        fontSize={{ base: "lg", md: "xl", lg: "3xl" }}
        fontWeight={600}
        bgColor="tertiary"
        color="white"
        spacing={{ base: 1, md: "6px", lg: 2 }}
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
      py={{ base: "50px", md: "70px", lg: "100px" }}
      px={{ base: "40px", md: "100px", lg: "155px" }}
      {...props}
    >
      {children}
    </Flex>
  );
};
