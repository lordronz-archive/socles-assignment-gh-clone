import clsxm from '@/lib/clsxm';

const GitHubCheck = ({
  className,
  ...rest
}: React.ComponentPropsWithoutRef<'svg'>) => {
  return (
    <svg
      aria-hidden='true'
      height='16'
      viewBox='0 0 16 16'
      version='1.1'
      width='16'
      data-view-component='true'
      className={clsxm(
        'inline-block overflow-visible fill-current align-bottom',
        className
      )}
      {...rest}
    >
      <path
        fillRule='evenodd'
        d='M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z'
      ></path>
    </svg>
  );
};

export default GitHubCheck;