export const openNewWindowHandler = (url) => {
  const width = 800;
  const height = 600;
  const left = window.screen.width / 2 - width / 2;
  const top = window.screen.height / 2 - height / 2;

  // Open a new window with initial dimensions
  const newWindow = window.open(
    `${url}`,
    "popup",
    `width=${width},height=${height},top=${top},left=${left},resizable,scrollbars,status`
  );

  if (newWindow) {
    newWindow.focus();
  }
};
