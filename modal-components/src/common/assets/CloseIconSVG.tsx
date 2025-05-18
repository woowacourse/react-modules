// 48 x 48
const CloseIconLg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="49" height="48" viewBox="0 0 49 48" fill="none">
    <g clipPath="url(#clip0_731_601)">
      <path
        d="M38.8167 12.82L35.9967 10L24.8167 21.18L13.6367 10L10.8167 12.82L21.9967 24L10.8167 35.18L13.6367 38L24.8167 26.82L35.9967 38L38.8167 35.18L27.6367 24L38.8167 12.82Z"
        fill="black"
      />
    </g>
    <defs>
      <clipPath id="clip0_731_601">
        <rect width="48" height="48" fill="white" transform="translate(0.81665)" />
      </clipPath>
    </defs>
  </svg>
);

// 24 x 24
const CloseIconMd = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <g clipPath="url(#clip0_718_259)">
      <path
        d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
        fill="black"
      />
    </g>
    <defs>
      <clipPath id="clip0_718_259">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const CloseIconSVG = ({ sizeName = 'md' }: { sizeName?: 'lg' | 'md' }) => {
  return sizeName === 'lg' ? <CloseIconLg /> : <CloseIconMd />;
};

export default CloseIconSVG;
