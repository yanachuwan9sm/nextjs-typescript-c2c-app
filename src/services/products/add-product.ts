import { ApiContext, Product } from 'types/data';
import { fetcher } from 'utils';

export type AddProductsParams = {
  product: Omit<Product, 'id'>;
};

/**
 * 商品API (新規追加)
 * @param context APIコンテキスト
 * @param params パラメータ
 * @returns 商品
 */
const addProduct = async (
  context: ApiContext,
  { product }: AddProductsParams
): Promise<Product> => {
  return await fetcher(`${context.apiRootUrl.replace(/\/$/g, '')}/products`, {
    method: 'POST',
    headers: {
      //   Origin: '*',
      Accept: 'application/json',
      'Content-Type': 'application/json',
      credentials: 'include',
    },
    body: JSON.stringify(product),
  });
};

export default addProduct;
