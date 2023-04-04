import { Virtuoso } from 'react-virtuoso'
import { useCallback, FunctionComponent, useRef } from 'react'
import CSS from './VirtualScroll.module.scss';

export function VirtualScroll<T>({ loadMore, data, item, header = undefined }: {
  loadMore: (index: number) => void;
  data: T[];
  item: FunctionComponent<{data: T}>;
  header?: FunctionComponent | undefined;
}) {
  const scrollerRef = useRef<HTMLElement | Window | null | undefined>();
  const Item = item;

  const handleLoadMore = useCallback((index: number) => {
    loadMore(index);
  }, [loadMore])

  const scrollTop = useCallback(() => {
    (scrollerRef.current as HTMLElement).scrollTo({ top: 0, behavior: 'smooth' });
  }, [])


  return (
    <div>
      <Virtuoso
        scrollerRef={(ref) => scrollerRef.current = ref}
        style={{ height: '100vh' }}
        data={data}
        endReached={handleLoadMore}
        overscan={400}
        itemContent={(index: number, data: T) => {
          return <Item data={data} />
        }}
        components={{ Footer, Header: header }}
      />
      <button type='button' className={CSS.topBtn} onClick={scrollTop}>Наверх</button>
    </div>
  )
}


const Footer = () => {
  return (
    <div
      className={CSS.footer}
    >
      Loading...
    </div>
  )
}
