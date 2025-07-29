import { HYGRAPH_API } from '$env/static/private';
import { GraphQLClient } from 'graphql-request';

export interface metadata {
	abstract: string;
	category: string;
	date: string;
	title: string;
	slug: string;
}

export interface article extends metadata {
	content: string;
}

type getArticlesMetadataResponse = { articles: [metadata] };
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
