import { ReviewCard } from '@/components/curator/review-card.tsx';
import { TypographyH2 } from '@/components/ui/typography.tsx';
import { useQuery } from '@tanstack/react-query';
import { getCuratorReviews } from '@/services/reviews.ts';
import { Loader2 } from 'lucide-react';
import { CreateReviewModal } from '@/components/curator/review-modal.tsx';
import { CuratorLayout } from '@/components/layout/curator-layout.tsx';
import { Pagination } from '@/components/ui/pagination.tsx';
import { useSearchParams } from 'react-router-dom';

export const Reviews = () => {
  const [searchParams] = useSearchParams();
  const page = parseInt(searchParams.get('page') || '1');
  const { data, isLoading } = useQuery({ queryKey: ['reviews', page], queryFn: () => getCuratorReviews({ page, take: 10 }) });
  return (
    <CuratorLayout>
      <div className="flex w-full justify-between">
        <TypographyH2 text="My Reviews" />
        <CreateReviewModal />
      </div>
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Loader2 className="mr-2 h-12 w-12 animate-spin" />{' '}
        </div>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-full gap-6">
        {data?.reviews.map((review, i) => {
          return <ReviewCard key={i} data={review} />;
        })}
      </div>
      {data && data.count > 0 && <Pagination totalItems={data.count || 0} take={10} />}
    </CuratorLayout>
  );
};
