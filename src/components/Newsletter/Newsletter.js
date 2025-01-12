import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import PrimaryButton from "@/macros/Buttons/PrimaryButton";
import { Row } from "@/macros/Grids";
import { Body } from "@/macros/Copy";

const Newsletter = () => {
	const [email, setEmail] = useState("");
	const [status, setStatus] = useState(null);
	const [msg, setMsg] = useState("");
	const [captchaError, setCaptchaError] = useState("");
	const [token, setToken] = useState(null);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const reCaptchaRef = useRef(null);
	const timeoutRef = useRef(null);

	const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

	const handleChange = (e) => {
		setEmail(e.target.value);
		// Reset status messages when user starts typing again
		setStatus(null);
		setMsg("");
		setCaptchaError("");
	};

	const onReCAPTCHAChange = (token) => {
		setToken(token);
		setCaptchaError("");
	};

	const cleanup = (callbackName, scriptId) => {
		// Clear timeout if it exists
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
			timeoutRef.current = null;
		}

		// Remove callback function
		if (window[callbackName]) {
			delete window[callbackName];
		}

		// Remove script tag
		const scriptElement = document.getElementById(scriptId);
		if (scriptElement) {
			document.body.removeChild(scriptElement);
		}

		setIsSubmitting(false);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log("Form submitted", { email, token, isSubmitting }); // Debug log

		// Prevent multiple submissions
		if (isSubmitting) {
			console.log("Already submitting");
			return;
		}

		// Validate email
		if (!email) {
			console.log("No email provided");
			setStatus("Error");
			setMsg("Please enter your email address.");
			return;
		}

		// Verify reCAPTCHA
		if (!token) {
			console.log("No reCAPTCHA token");
			setCaptchaError("Please complete the reCAPTCHA challenge!");
			// Reset reCAPTCHA to ensure it's fresh
			reCaptchaRef.current?.reset();
			return;
		}

		try {
			setIsSubmitting(true);
			console.log("Starting submission process"); // Debug log

			// Create unique IDs for this submission
			const timestamp = Date.now();
			const callbackName = `jsonpCallback_${timestamp}`;
			const scriptId = `mailchimpScript_${timestamp}`;

			// Set timeout for the request (10 seconds)
			timeoutRef.current = setTimeout(() => {
				console.log("Request timed out"); // Debug log
				cleanup(callbackName, scriptId);
				setStatus("Error");
				setMsg("Request timed out. Please try again.");
			}, 10000);

			// Define the callback function
			window[callbackName] = (response) => {
				console.log("Mailchimp response:", response); // Debug log

				// Handle Mailchimp's specific response format
				if (response.result === "success") {
					setStatus("Success");
					setMsg("Thank you for subscribing!");
					reCaptchaRef.current?.reset();
					setToken(null);
					setEmail(""); // Clear email on success
				} else if (response.msg && response.msg.toLowerCase().includes("already subscribed")) {
					setStatus("Success");
					setMsg("You're already subscribed to our newsletter!");
					reCaptchaRef.current?.reset();
					setToken(null);
				} else {
					setStatus("Error");
					// Handle Mailchimp's error messages more gracefully
					const errorMsg = response.msg || "An error occurred. Please try again.";
					setMsg(errorMsg.replace(/<(?:.|\n)*?>/gm, "")); // Strip HTML from error message
				}
				cleanup(callbackName, scriptId);
			};

			// Create and append the script element
			const script = document.createElement("script");
			script.id = scriptId;
			script.onerror = () => {
				console.log("Script loading error"); // Debug log
				cleanup(callbackName, scriptId);
				setStatus("Error");
				setMsg("Failed to connect to the subscription service. Please try again.");
			};

			// Construct Mailchimp URL with all required parameters
			const params = new URLSearchParams({
				u: "cde2461ba84f5279fff352829",
				id: "8d165e36d3",
				EMAIL: email,
				"group[57543][1]": "1",
				c: callbackName,
				"g-recaptcha-response": token,
				b_cde2461ba84f5279fff352829_8d165e36d3: "",
			});

			const url = `https://us6.list-manage.com/subscribe/post-json?${params.toString()}`;
			console.log("Request URL:", url); // Debug log

			script.src = url;
			document.body.appendChild(script);
		} catch (error) {
			console.error("Submission error:", error); // Debug log
			cleanup(callbackName, scriptId);
			setStatus("Error");
			setMsg("An unexpected error occurred. Please try again.");
		}
	};

	return (
		<div className={"modal-content-inner"}>
			<form onSubmit={handleSubmit} className={"w-full"}>
				<Row className='flex items-center gap-4'>
					<div className={"w-full relative"}>
						<label
							htmlFor={"email"}
							className={`px-2 py-3 absolute text-sm leading-[1.2857] transition-all ${
								email.length > 0 ? "-top-8 -left-2 text-opacity-100" : "top-0 left-0 text-opacity-60 pointer-events-none"
							}`}
						>
							Email
						</label>
						<input
							type='email'
							id={"email"}
							value={email}
							className={`w-full px-2 py-3 text-sm leading-[1.2857] bg-transparent border-b rounded-none ${
								captchaError ? "border-red-error-subtle" : "border-white"
							}`}
							onChange={handleChange}
							required
							disabled={isSubmitting}
						/>
					</div>

					<PrimaryButton
						lightMode
						hover
						className={"bg-white grow-0 shrink-0 select-none"}
						type={"submit"}
						disabled={isSubmitting}
						onClick={(e) => {
							console.log("Button clicked"); // Debug log
							if (!isSubmitting) {
								handleSubmit(e);
							}
						}}
					>
						{isSubmitting ? "Subscribing..." : "Subscribe"}
					</PrimaryButton>
				</Row>
				{siteKey && (
					<Row className='mt-3'>
						<ReCAPTCHA sitekey={siteKey} ref={reCaptchaRef} onChange={onReCAPTCHAChange} />
					</Row>
				)}
				{captchaError && (
					<Row className='px-2 mt-2'>
						<Body size={"sm"} className={"text-red-error"}>
							{captchaError}
						</Body>
					</Row>
				)}
				{status === "Error" && (
					<Row className='px-2 mt-2'>
						<Body size={"sm"} className={"text-red-error"}>
							{msg}
						</Body>
					</Row>
				)}
				{status === "Success" && (
					<Row className='px-2 mt-2'>
						<Body size={"sm"} className={"text-green"}>
							{msg}
						</Body>
					</Row>
				)}
			</form>
		</div>
	);
};

export default Newsletter;
