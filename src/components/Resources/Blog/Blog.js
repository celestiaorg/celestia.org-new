import { Display, Body, Heading } from "@/macros/Copy";
import Container from "@/components/Container/Container";
import Icon from "@/macros/Icons/Icon";
import ArrowLongSVG from "@/macros/SVGs/ArrowLongSVG";
import Link from "@/macros/Link/Link";
import Carousel from "@/components/Carousel/Carousel";
import Image from "next/image";
import { formatDateToMonthDayYear } from "@/utils/formatDate";

const Blog = ({ posts }) => {
  return (
    <section>
      <Container
        size={"lg"}
        className={"w-full flex justify-between pt-20 pb-12 lg:pt-12"}
      >
        <Display tag={"h2"} className={``} size={"sm"}>
          Blog
        </Display>
        <Link href={"https://blog.celestia.org/"} className="group">
          <span className="sr-only">View all blog posts</span>
          <Icon
            Icon={<ArrowLongSVG />}
            hover
            HoverIcon={<ArrowLongSVG />}
            className={`flex-grow-0`}
            direction={`top-right`}
            border
            size={"lg"}
          />
        </Link>
      </Container>
      <Carousel>
        {posts.map((post) => {
          const excerpt = removeLinksFromExcerpt(post.excerpt);

          return (
            <Link
              key={post.id}
              href={post.url}
              className="py-8 px-4 lg:px-10 border-t border-r border-b border-black group hover:bg-black hover:text-white transition-all duration-300 !inline-flex flex-col"
            >
              <div
                className={"w-full flex flex-row-reverse justify-between mb-6"}
              >
                <Body size={"sm"}>
                  {formatDateToMonthDayYear(post.published_at)}
                </Body>
              </div>
              <Image
                src={post.feature_image}
                alt={post.title}
                width={450}
                height={260}
                className={"w-full h-auto block mb-6 object-cover"}
              />
              <Heading
                size={"sm"}
                tag={"h3"}
                className={"mb-6 lg:mb-10 line-clamp-3"}
              >
                {post.title}
              </Heading>
              <Body
                size={"sm"}
                className={
                  "text-subtle group-hover:text-white mb-0 mt-auto line-clamp-3"
                }
              >
                {excerpt}
              </Body>
            </Link>
          );
        })}
      </Carousel>
    </section>
  );
};

function removeLinksFromExcerpt(excerpt) {
  // Regular expression to match URLs in square brackets
  const urlRegex = /\[https?:\/\/[^\]]+\]/g;
  // Replace URLs with an empty string
  return excerpt.replace(urlRegex, "");
}

export default Blog;
