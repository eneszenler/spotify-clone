const HomeIcon = ({size, isActive}) => {
  return (
    <svg role="img" height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      {isActive ? (
        <path
          fill="#fff"
          d="M13.5 1.515a3 3 0 0 0-3 0L3 5.845a2 2 0 0 0-1 1.732V21a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7.577a2 2 0 0 0-1-1.732l-7.5-4.33z"
        />
      ) : (
        <path
          fill="currentColor"
          d="M12.5 3.247a1 1 0 0 0-1 0L4 7.577V20h4.5v-6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 0 1 3 0l7.5 4.33a2 2 0 0 1 1 1.732V21a1 1 0 0 1-1 1h-6.5a1 1 0 0 1-1-1v-6h-3v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.577a2 2 0 0 1 1-1.732l7.5-4.33z"
        />
      )}
    </svg>
  );
};

const MagnifyingIcon = ({size, isActive}) => {
  return (
    <svg role="img" height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      {isActive ? (
        <>
          <path
            fill="#fff"
            d="M15.356 10.558c0 2.623-2.16 4.75-4.823 4.75-2.664 0-4.824-2.127-4.824-4.75s2.16-4.75 4.824-4.75c2.664 0 4.823 2.127 4.823 4.75z"
          />
          <path
            fill="#fff"
            d="M1.126 10.558c0-5.14 4.226-9.28 9.407-9.28 5.18 0 9.407 4.14 9.407 9.28a9.157 9.157 0 0 1-2.077 5.816l4.344 4.344a1 1 0 0 1-1.414 1.414l-4.353-4.353a9.454 9.454 0 0 1-5.907 2.058c-5.18 0-9.407-4.14-9.407-9.28zm9.407-7.28c-4.105 0-7.407 3.274-7.407 7.28s3.302 7.279 7.407 7.279 7.407-3.273 7.407-7.28c0-4.005-3.302-7.278-7.407-7.278z"
          />
        </>
      ) : (
        <path
          fill="currentColor"
          d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 1 0 1.414-1.414l-4.344-4.344a9.157 9.157 0 0 0 2.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"
        />
      )}
    </svg>
  );
};

const LibraryIcon = ({size, isActive}) => {
  return (
    <svg role="img" height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      {isActive ? (
        <path
          fill="#fff"
          d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"
        />
      ) : (
        <path
          fill="currentColor"
          d="M14.5 2.134a1 1 0 0 1 1 0l6 3.464a1 1 0 0 1 .5.866V21a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V3a1 1 0 0 1 .5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zm6 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1z"
        />
      )}
    </svg>
  );
};

const PlusIcon = ({size}) => {
  return (
    <svg role="img" height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      <path
        fill="currentColor"
        d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z"
      />
    </svg>
  );
};

const HeartIcon = ({size}) => {
  return (
    <svg role="img" height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      <path
        fill="currentColor"
        d="M15.724 4.22A4.313 4.313 0 0 0 12.192.814a4.269 4.269 0 0 0-3.622 1.13.837.837 0 0 1-1.14 0 4.272 4.272 0 0 0-6.21 5.855l5.916 7.05a1.128 1.128 0 0 0 1.727 0l5.916-7.05a4.228 4.228 0 0 0 .945-3.577z"
      />
    </svg>
  );
};

const DownloadIcon = ({size}) => {
  return (
    <svg role="img" height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z"
      />
      <path
        fill="currentColor"
        d="M12 6.05a1 1 0 0 1 1 1v7.486l1.793-1.793a1 1 0 1 1 1.414 1.414L12 18.364l-4.207-4.207a1 1 0 1 1 1.414-1.414L11 14.536V7.05a1 1 0 0 1 1-1z"
      />
    </svg>
  );
};

const PrevIcon = ({size}) => {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      <polyline stroke="currentColor" points="16 4 7 12 16 20" fill="none" />
    </svg>
  );
};

const NextIcon = ({size}) => {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      <polyline stroke="currentColor" points="8 4 17 12 8 20" fill="none" />
    </svg>
  );
};

const DownDirIcon = ({size}) => {
  return (
    <svg viewBox="0 0 16 16" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" d="M3 6l5 5.794L13 6z" />
    </svg>
  );
};

const ExternalIcon = ({size}) => {
  return (
    <svg viewBox="0 0 16 16" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      <path
        fill="currentColor"
        d="M15 7V1H9v1h4.29L7.11 8.18l.71.71L14 2.71V7h1zM1 15h12V9h-1v5H2V4h5V3H1v12z"
      />
    </svg>
  );
};

const PlayIcon = ({size}) => {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      <polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="#000" />
    </svg>
  );
};

const Icon = ({name, size = 24, isActive}) => {
  const icons = {
    home: HomeIcon,
    magnify: MagnifyingIcon,
    library: LibraryIcon,
    plus: PlusIcon,
    heart: HeartIcon,
    download: DownloadIcon,
    prev: PrevIcon,
    next: NextIcon,
    downDir: DownDirIcon,
    external: ExternalIcon,
    play: PlayIcon,
  };

  const Component = icons[name];
  return <Component size={size} isActive={isActive} />;
};

export {Icon};
