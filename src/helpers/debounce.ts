export default function debounce(func: Function, wait: number, immediate: boolean = false) {
  let timeout: undefined | number;

  return function executedFunction() {
    const context = this;
    const args = arguments;

    const callNow = immediate && !timeout;
	
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }, wait);
	
    if (callNow) func.apply(context, args);
  };
};