"use client";
import { useEffect, useRef } from "react";
import Container from "@/components/Container/Container";
import BorderButton from "@/macros/Buttons/BorderButton";
import { Display, Body } from "@/macros/Copy";
import { usePlausible } from "next-plausible";

const PrimaryHero = ({ headline, subheadline, buttons, videos }) => {
	const videoRef = useRef(null);
	const trackEvent = usePlausible();

	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.play().catch((error) => {
				// Handle error if playback fails
				console.error("Video failed to play:", error);
			});
		}
	}, []);

	const handleButtonClick = (buttonText, url) => {
		trackEvent("Button: Hero Click", {
			props: {
				button: buttonText,
				url: url,
				location: "primary_hero",
				path: window.location.pathname,
			},
		});
	};

	return (
		<section className={`bg-white-weak relative md:min-h-[70vh] lg:min-h-[90vh] flex flex-col-reverse md:block content-center`}>
			{videos && (
				<video
					ref={videoRef}
					autoPlay
					muted
					loop3
					playsInline
					className={
						"block md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:h-full w-full md:object-cover md:z-0"
					}
				>
					<source src={videos.src.xl} type='video/mp4' media='(min-width: 1024px)' />
					<source src={videos.src.lg} type='video/mp4' media='(min-width: 768px)' />
					<source src={videos.src.sm} type='video/mp4' media='(max-width: 767px)' />
					{videos.poster.lg && <img src={videos.poster.lg} alt='' media='(min-width: 768px)' />}
					{videos.poster.sm && <img src={videos.poster.sm} alt='' media='(max-width: 767px)' />}
				</video>
			)}
			<Container size={`lg`} className='relative z-10 pt-36 lg:pt-10 lg:pb-10'>
				<div className={`w-full md:w-3/4 lg:w-1/2 lg:pt-32 lg:my-auto`}>
					<Display size={"lg"} className={`mb-4`}>
						{headline}
					</Display>
					<Body size={"lg"} className={`mb-8`}>
						{subheadline}
					</Body>
					<div className='w-10/12 gap-4 md:w-full md:flex md:flex-wrap lg:gap-10'>
						{buttons.map((button, index) => (
							<BorderButton
								key={index}
								onClick={() => handleButtonClick(button.text, button.url)}
								href={button.url}
								className='md:inline-flex'
							>
								{button.text}
							</BorderButton>
						))}
					</div>
				</div>
			</Container>
		</section>
	);
};

export default PrimaryHero;
