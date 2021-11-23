import Intro from "@components/intro";
import About from "@components/about";
import Projects from "@components/projects";

export default function Home(): JSX.Element {
	return (
		<>
			<Intro />
			<About />
			<Projects />
		</>
	);
}
