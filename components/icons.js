export const SearchIcon = ({ className }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.10855 18.2134C11.3088 18.2134 13.3297 17.4263 14.9076 16.123L18.5685 19.784C18.7113 19.9268 18.898 20 19.0847 20C19.2715 20 19.4582 19.9268 19.601 19.784C19.8865 19.4984 19.8865 19.0335 19.601 18.7479L15.9546 15.1016C17.3604 13.4981 18.2134 11.4003 18.2134 9.10855C18.2134 4.08567 14.1278 0 9.10489 0C4.08201 0 0 4.08201 0 9.10489C0 14.1278 4.08567 18.2134 9.10855 18.2134ZM9.10855 1.46074C13.3223 1.46074 16.7527 4.88742 16.7527 9.10489C16.7527 13.3223 13.3223 16.749 9.10855 16.749C4.89475 16.749 1.4644 13.3187 1.4644 9.10489C1.4644 4.89109 4.89475 1.46074 9.10855 1.46074Z"
        fill="#242424"
      />
    </svg>
  );
};

export const MoreIcon = ({ className }) => {
  return (
    <svg
      width="19"
      height="14"
      viewBox="0 0 19 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <line y1="1" x2="13" y2="1" stroke="#242424" stroke-width="2" />
      <line y1="7" x2="19" y2="7" stroke="#242424" stroke-width="2" />
      <line x1="6" y1="13" x2="19" y2="13" stroke="#242424" stroke-width="2" />
    </svg>
  );
};

export const ArrowDownIcon = ({ className }) => {
  return (
    <svg
      width="24"
      height="33"
      viewBox="0 0 24 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 2V30.5M12 30.5L22 20.5M12 30.5L2 20.5"
        stroke="white"
        stroke-width="3"
        stroke-linecap="round"
      />
    </svg>
  );
};
