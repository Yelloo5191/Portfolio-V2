// google analytics measurement id
const GA_TRACKING_ID = "G-Q26TFB3RRF";
const IS_PRODUCTION = process.env.NODE_ENV === "production";

type MetaType = {
	title: string;
	lang: string;
	description: string;
	url: string;
	image: string;
	tags: string[];
};

const META: MetaType = {
	title: "Portfolio v2.0 | Yelloo",
	lang: "en-us",
	description: "A website built to showcase my skills and abilities",
	url: "/",
	image: "/logo.png",
	tags: ["nextjs", "typescript", "chakraui", "portfolio", "yelloo"],
};

export { GA_TRACKING_ID, IS_PRODUCTION, META };
