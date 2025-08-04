import { HYGRAPH_API } from '$env/static/private';
import { GraphQLClient } from 'graphql-request';

// Types and functions for handling articles

export interface articleMetadata {
	abstract: string;
	category: string;
	date: string;
	title: string;
	slug: string;
}

export interface article extends articleMetadata {
	content: string;
}

type getArticlesMetadataResponse = { articles: [articleMetadata] };
export const getArticlesMetadata = async () => {
	const hygraph = new GraphQLClient(HYGRAPH_API);

	const query = `
        query getArticlesMetadata {
            articles(orderBy: date_DESC) {
                abstract
                category
                date
                title
                slug
            }
        }
    `;

	const { articles }: getArticlesMetadataResponse = await hygraph.request(query);

	return articles;
};

type getArticleBySlugResponse = { article: article };
export const getArticleBySlug = async (slug: string) => {
	const hygraph = new GraphQLClient(HYGRAPH_API);

	const query = `
        query getArticleBySlug {
            article(where: {slug: "${slug}"}) {
                category
                content
                date
                title
            }
        }
    `;

	const article: getArticleBySlugResponse = await hygraph.request(query);

	return article;
};

// Types and functions for handling covers

export interface coverMetadata {
	artist: string;
	song: string;
	extraIdentifier: string;
	slug: string;
	thumbnailURL: string;
	date: string;
}

export interface cover extends coverMetadata {
	videoID: string;
	content: string;
}

type getCoversMetadataResponse = { covers: [coverMetadata] };
export const getCoversMetadata = async () => {
	const hygraph = new GraphQLClient(HYGRAPH_API);

	const query = `
        query getCoversMetadata {
            covers(orderBy: date_DESC) {
                artist
                song
                extraIdentifier
                slug
                thumbnailURL
                date
            }
        }
    `;

	const { covers }: getCoversMetadataResponse = await hygraph.request(query);

	return covers;
};

type getCoverBySlugResponse = { cover: cover };
export const getCoverBySlug = async (slug: string) => {
	const hygraph = new GraphQLClient(HYGRAPH_API);

	const query = `
        query getCoverBySlug {
            cover(where: {slug: "${slug}"}) {
                artist
                song
                extraIdentifier
                date
                videoID
                content
            }
        }
    `;

	const cover: getCoverBySlugResponse = await hygraph.request(query);

	return cover;
};
