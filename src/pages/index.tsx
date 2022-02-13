import Intro from "@components/intro";
import About from "@components/about";
import Skills from "@components/skills";
import Projects from "@components/projects";
import ProjectsMobile from "@components/projectsMobile";
// import ReqHelp from "@components/reqHelp";
import Splash from "@components/splash";
import { useState } from "react";

export default function Home(): JSX.Element {
	const [showSplash, setShowSplash] = useState(true);
	setTimeout(() => {
		setShowSplash(false);
	}, 2500);
	return (
		<>
			{/* ToDo: Rework scrolling behavior */}
			{showSplash ? <Splash /> : null}
			<div
				style={{
					display: showSplash ? "none" : "inherit",
				}}
			>
				<Intro />
				<About />
				<Skills />
				<Projects />
				<ProjectsMobile />
			</div>
		</>
	);
}
