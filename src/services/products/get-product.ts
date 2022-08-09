import { ApiContext, Product } from 'types/data';
import { fetcher } from 'utils';

export type GetProductParams = Pick<Product, 'id'>;

/**
 * 商品API (個別取得)
 * @param context APIコンテキスト
 * @param params パラメータ
 * @returns 商品
 */
const getProduct = async (
  context: ApiContext,
  { id }: GetProductParams
): Promise<Product> => {
  /**
   サンプルレスポンス
{
  "id": 1,
  "title": "サンプル本1",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\nIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\nIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  "category": "book",
  "imageUrl": "/products/books/bible-1867195_1920.jpeg",
  "price": 5000,
  "condition": "new",
  "owner": {
    "id": 1,
    "username": "taketo",
    "displayName": "Taketo Yoshida",
    "email": "taketo@example.com",
    "profileImageUrl": "/users/1.png",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
  }
}⏎
   */
  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, '')}/products/${id}`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  );
};

export default getProduct;
