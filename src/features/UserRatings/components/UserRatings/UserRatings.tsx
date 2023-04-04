import { VirtualScroll } from 'features/VirtualScroll';
import { useCallback, useState } from 'react';
import { UserRating } from '../../models/UserRating.model';
import { RatingHeaderRow, RatingRow } from '../RatingRow/RatingRow';
import { UserRatingMock } from '../../mock/UserRating';

export const UserRatings = () => {
  const [user, setUser] = useState<UserRating[]>(UserRatingMock.slice(0, 50));

  const handleLoadMore = useCallback((index: number) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        setUser(user => [...user, ...UserRatingMock.slice(index + 1, user.length + 50)]);
        resolve(null);
      }, 1000)
    });
  }, [])

  return (
    <div>
      <VirtualScroll<UserRating>
        data={user}
        item={RatingRow}
        loadMore={handleLoadMore}
        header={RatingHeaderRow}
      />
    </div>
  );
}
