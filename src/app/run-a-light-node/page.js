import SecondaryHero from "@/components/Heroes/SecondaryHero";
import Introduction from "@/components/Introduction/Introduction";
import Container from "@/components/Container/Container";
import { Col, Row } from "@/macros/Grids";
import { Display, Body, Heading } from "@/macros/Copy";
import VerticalTitleCard from "@/components/Cards/VerticalTitleCards/VerticalTitleCard";
import PrimaryButton from "@/macros/Buttons/PrimaryButton";
import Icon from "@/macros/Icons/Icon";
import ArrowLongSVG from "@/macros/SVGs/ArrowLongSVG";

import meta from "@/components/Meta/Meta";
import seo from "@/data/run-a-light-node/seo";

export const metadata = meta(seo);

export default async function RunALightNode() {
  const networkGroups = [
    {
      cards: [
        {
          title: "Beginner",
          description:
            "Deploy a light node in two commands with Vimana’s on-demand hardware.",
          url: "https://docs.vistara.dev/guides/getting-started",
        },
        {
          title: "Intermediate",
          description: "Power up a light node in under 3 minutes with Docker.",
          url: "https://docs.celestia.org/nodes/docker-images",
        },
        {
          title: "Advanced",
          description: "Start a light node with the command line.",
          url: "https://docs.celestia.org/nodes/light-node",
        },
      ],
    },
  ];

  const developerGroups = [
    {
      cards: [
        {
          title: "Publish data",
          description: "Publish transaction data to Celestia’s DA network.",
          url: "https://docs.celestia.org/developers/node-tutorial",
        },
        {
          title: "Retrieve data",
          description: "Retrieve transaction data from Celestia’s DA network.",
          url: "https://docs.celestia.org/developers/node-tutorial#retrieving-data",
        },
        {
          title: "Manage Tia wallet",
          description:
            "Generate a Celestia wallet to store Tia and pay for publishing transaction data to Celestia.",
          url: "https://docs.celestia.org/developers/celestia-node-key",
        },
      ],
    },
  ];

  return (
    <>
      <SecondaryHero
        title={"Directly verify"}
        buttons={[
          {
            text: "Run a light node",
            url: "/run-a-light-node#start-up-a-node",
            iconDirection: "down-right",
          },
          {
            text: "Integrate",
            url: "/run-a-light-node#integrate",
            iconDirection: "down-right",
          },
        ]}
        videos={{
          src: {
            xl: "/videos/hero/light-desktop_xl.mp4",
            lg: "/videos/hero/light-desktop_lg.mp4",
            sm: "/videos/hero/light-mobile_sm.mp4",
          },
          poster: {
            lg: "/videos/hero/light-desktop_xl_poster.jpg",
            sm: "/videos/hero/light-mobile_sm_poster.jpg",
          },
        }}
      />

      <Introduction id={"What-is-a-light-node"} className={"pt-10 lg:pt-20"}>
        <Heading size={"md"} className={"mb-4 lg:mb-6"} tag={"p"}>
          What is a light node?
        </Heading>
        <Heading size={"md"} className={"mb-4 lg:mb-6"} tag={"p"}>
          Light nodes allow anyone to directly verify data availability and
          interact with Celestia without centralized gateways or RPC providers.
        </Heading>
        <Heading size={"md"} className={"mb-4 lg:mb-6"} tag={"p"}>
          Data availability sampling enables Celestia to securely increase
          throughput for rollups as new light nodes join the network over time.
        </Heading>
        <Heading size={"md"} className={""} tag={"p"}>
          Each rollup on Celestia uses a light node to directly publish and
          retrieve transaction data.
        </Heading>
      </Introduction>

      <section id={"start-up-a-node"} className="bg-black text-white">
        <Container size={"lg"} className={"py-10 lg:py-24"}>
          <Row className={"mb-6 lg:mb-16"}>
            <Col width={60}>
              <Display size={"sm"} tag={"h2"} className={"mb-4 lg:mb-0"}>
                Join the network
              </Display>
            </Col>
            <Col width={40}></Col>
          </Row>
          <Row>
            <Col width={100}>
              {networkGroups.map((group, index) => (
                <div
                  className="w-full grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-4 mb-4"
                  key={`cardGroup-${index}`}
                >
                  {group.cards.map((card, index) => (
                    <VerticalTitleCard
                      dark
                      key={index}
                      verticalTitle={card.title}
                      description={card.description}
                      url={card.url}
                    />
                  ))}
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </section>

      <section id={"integrate"} className="bg-black text-white">
        <Container size={"lg"} className={"py-10 lg:py-24"}>
          <Row className={"mb-6 lg:mb-16"}>
            <Col width={60}>
              <Display size={"sm"} tag={"h2"} className={"mb-4 lg:mb-6"}>
                Light nodes for developers
              </Display>
              <Body size={"md"} className={"mb-6 lg:mb-0"}>
                How developers can use a Celestia light node for their chain
              </Body>
            </Col>
            <Col width={40}>
              <PrimaryButton
                href={"https://docs.celestia.org/nodes/light-node"}
                size="md"
                dark
                className={"lg:mr-0 lg:ml-auto table"}
              >
                <div
                  className={
                    "w-full inline-flex justify-between items-center group gap-2"
                  }
                >
                  <span>Start light node</span>
                  <Icon
                    Icon={<ArrowLongSVG dark />}
                    hover
                    HoverIcon={<ArrowLongSVG dark />}
                    className={`flex-grow-0`}
                    direction="up-right"
                    border={false}
                    size={"xs"}
                    transparentBg
                  />
                </div>
              </PrimaryButton>
            </Col>
          </Row>
          <Row>
            <Col width={100}>
              {developerGroups.map((group, index) => (
                <div
                  className="w-full grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-4 mb-4"
                  key={`cardGroup-${index}`}
                >
                  {group.cards.map((card, index) => (
                    <VerticalTitleCard
                      dark
                      key={index}
                      verticalTitle={card.title}
                      description={card.description}
                      url={card.url}
                    />
                  ))}
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </section>
      <div className="bg-black w-fill h-10 -mb-10 block"></div>
    </>
  );
}
