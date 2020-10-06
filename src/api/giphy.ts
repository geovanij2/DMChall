import axios from 'axios'

const giphyClient = axios.create({
	baseURL: process.env.GIPHY_URL
})

export async function getGifUrl(query: string): Promise<string> {
	try {
		const { data } = await giphyClient.get('', {
			params: { q: query, api_key: process.env.GIPHY_API_KEY, limit: 1 }
		})
		return data.data[0].images.original.url as string
	} catch (e) {
		// Aqui poderia ficar um valor padrão de url
		// caso a api do giphy esteja fora do ar ou retorne algum erro
		return ''
	}

}
