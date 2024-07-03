'use client';

import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { useCallback, useRef, useEffect, MouseEventHandler } from 'react';

export default function Modal({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const overlay = useRef(null);
  const wrapper = useRef(null);

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const onClick: MouseEventHandler = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, overlay, wrapper]
  );
  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onDismiss();
    },
    [onDismiss]
  );

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onKeyDown]);

  return (
    <div
      ref={overlay}
      className='fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60 p-10'
      onClick={onClick}
    >
      <div
        ref={wrapper}
        className={clsx(
          'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:w-10/12 md:w-8/12 lg:w-2/5 bg-white',
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}
