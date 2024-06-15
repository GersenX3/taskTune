function Tache(props) {
  return (
    <svg
      width={23}
      height={23}
      aria-hidden="true"
      className="iconify iconify--emojione"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      viewBox="0 0 64 64"
      {...props}
    >
      <path
        fill={props.color}
        d="M62 10.6L53.4 2L32 23.4L10.6 2L2 10.6L23.4 32L2 53.4l8.6 8.6L32 40.6L53.4 62l8.6-8.6L40.6 32z"
      />
    </svg>
  );
}

export {Tache};
