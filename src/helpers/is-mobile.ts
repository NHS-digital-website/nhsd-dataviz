export default function(desktopViewport: string) {
  return window.innerWidth <= parseInt(desktopViewport);
}
