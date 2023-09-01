'use client';

type Props = {
  error: Error;
  reset: () => void;
};

const Error = ({ error, reset }: Props) => {
  return (
    <div>
      <p>
        Error - {error.name} {error.message}
      </p>
      <button type="button" onClick={reset}>
        Try again
      </button>
    </div>
  );
};

export default Error;
