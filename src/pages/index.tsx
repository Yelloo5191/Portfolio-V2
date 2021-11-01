import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import Intro from "@components/intro";

export default function Home(): JSX.Element {
	return (
		<>
			<Container>
				<ContainerInside my={150} h="5000px">
					<Intro />
				</ContainerInside>
			</Container>
		</>
	);
}
