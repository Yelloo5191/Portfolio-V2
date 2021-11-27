import Intro from "@components/intro";
import About from "@components/about";
import Skills from "@components/skills";
import Projects from "@components/projects";

export default function Home(): JSX.Element {
	return (
		<>
			<Intro />
			<About />
			<Skills />
			<Projects />
		</>
	);
}
