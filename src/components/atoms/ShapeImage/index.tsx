/**
   ## ShapeImage コンポーネント 
   四角画像または円形画像を表示する際に使用するコンポーネント
   shape に circle が指定されている場合 border-radius で円形に切り抜く
 */

import Image, { ImageProps } from 'next/image';
import styled from 'styled-components';

type ImageShape = 'circle' | 'square';

type ShapeImageProps = ImageProps & { shape?: ImageShape };

// circleなら円形に切り抜く
const ImageWithShape = styled(Image)<{ shape?: ImageShape }>`
  border-radius: ${({ shape }) => (shape === 'circle' ? '50%' : '0')};
`;

const ShapeImage = (props: ShapeImageProps) => {
  const { shape, ...imageProps } = props;

  return <ImageWithShape shape={shape} {...imageProps} />;
};

export default ShapeImage;
