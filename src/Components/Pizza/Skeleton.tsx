import ContentLoader from 'react-content-loader';

export const Skeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#dedede"
    >
      <rect x="20" y="0" rx="200" ry="200" width="240" height="240" />
      <rect x="60" y="251" rx="10" ry="10" width="160" height="26" />
      <rect x="0" y="296" rx="12" ry="12" width="280" height="85" />
      <rect x="0" y="405" rx="8" ry="8" width="96" height="30" />
      <rect x="125" y="399" rx="16" ry="16" width="155" height="36" />
    </ContentLoader>
  );
};