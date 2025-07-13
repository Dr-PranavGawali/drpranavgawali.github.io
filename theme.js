function toggleTheme(mode) {
  if (mode === 'light') {
    document.body.style.background = '#ffffff';
    document.body.style.color = '#000000';
  } else if (mode === 'dark') {
    document.body.style.background = '#0d1b2a';
    document.body.style.color = '#ffffff';
  } else {
    // Default theme
    document.body.style.background = '#112e42';
    document.body.style.color = '#ffffff';
  }
}
