import { DefaultSeo } from "next-seo";

const config = {
	title: "Tejasvi JB - FullStack Developer ",
	description: "I’m a fullstack developer who loves to create stuff!",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://tejasvijb.vercel.app/",
		site_name: "Sai Shanmukh",
		images: [
			{
				url: "https://ibb.co/Nr8sDhC",
				alt: "Tejasvi JB",
			},
		],
	},
	twitter: {
		handle: "@gypsy_sowl",
		site: "@gypsy_sowl",
		cardType: "summary_large_image",
	},
};

const SEO = (): JSX.Element => {
	return <DefaultSeo {...config} />;
};

export default SEO;
