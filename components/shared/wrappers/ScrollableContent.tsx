interface ScrollableContentProps {
  children?: React.ReactNode;
  nonScrollable?: boolean;
  showScrollbar?: boolean;
  customClasses?: string;
}

export default function ScrollableContent({
  children,
  nonScrollable,
  showScrollbar,
  customClasses,
}: ScrollableContentProps) {
  const wrapperClasses = () => {
    let classes = '';

    if (nonScrollable) {
      classes = '';
    } else {
      classes = 'overflow-y-auto overflow-x-hidden';
    }

    if (showScrollbar) {
      classes += '';
    } else {
      classes += ' no-scrollbar';
    }

    if (customClasses) {
      classes += ` ${customClasses}`;
    }

    return classes;
  };

  return <div className={wrapperClasses()}>{children}</div>;
}
