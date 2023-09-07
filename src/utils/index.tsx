export const isClassNameHidden = (state: boolean, className: string) => {
    return state ? `${className} ${className}--hidden` : className;
  };
