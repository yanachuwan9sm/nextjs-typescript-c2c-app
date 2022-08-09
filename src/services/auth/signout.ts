import { ApiContext } from 'types/data';
import { fetcher } from 'utils';

/**
 * 認証API（サインアウト）
 * @param context APIコンテキスト
 * @param params パラメータ
 * @returns サインアウトメッセージ ex : message: 'Sign out successfully',
 */
const signout = async (context: ApiContext): Promise<{ message: string }> => {
  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, '')}/auth/signout`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  );
};

export default signout;
