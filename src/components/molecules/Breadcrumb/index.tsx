import styled from 'styled-components';
import Flex from 'components/layout/Flex';

/**
 *
 * Breadcrumb コンポーネント
 *
 * 01. 型定義
 * 02. Styledコンポーネントの定義
 * 03. Breadcrumb コンポーネントの定義
 *
 */

/**
 * 01. 型定義
 */

interface BreadcrumbProps {
  children?: React.ReactNode;
}

/**
 * 02. Styledコンポーネントの定義
 */
const BreadcrumbRoot = styled(Flex)`
  list-style: none;
  padding: 0px;
  margin: 0px;
`;

/**
 * 03. Breadcrumb コンポーネントの定義
 */
const Breadcrumb = ({ children }: BreadcrumbProps) => {
  return <BreadcrumbRoot as="ol">{children}</BreadcrumbRoot>;
};

export default Breadcrumb;
