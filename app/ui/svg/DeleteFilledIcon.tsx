const DeleteFilledIcon = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      focusable="false"
      className="w-4 h-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="deleteGradient"
          x1="-3.9193"
          y1="2.97656"
          x2="21.146"
          y2="-0.984221"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0001" stop-color="#FA5560" />
          <stop offset="0.499028" stop-color="#B14BF4" />
          <stop offset="1" stop-color="#4D91FF" />
        </linearGradient>
      </defs>
      <g fill="url(#deleteGradient)">
        <path d="M19.452 7.5H4.547a.5.5 0 00-.5.545l1.287 14.136A2 2 0 007.326 24h9.347a2 2 0 001.992-1.819L19.95 8.045a.5.5 0 00-.129-.382.5.5 0 00-.369-.163zm-9.2 13a.75.75 0 01-1.5 0v-9a.75.75 0 011.5 0zm5 0a.75.75 0 01-1.5 0v-9a.75.75 0 011.5 0zM22 4h-4.75a.25.25 0 01-.25-.25V2.5A2.5 2.5 0 0014.5 0h-5A2.5 2.5 0 007 2.5v1.25a.25.25 0 01-.25.25H2a1 1 0 000 2h20a1 1 0 000-2zM9 3.75V2.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v1.25a.25.25 0 01-.25.25h-5.5A.25.25 0 019 3.75z"></path>
      </g>
    </svg>
  );
};

export default DeleteFilledIcon;
