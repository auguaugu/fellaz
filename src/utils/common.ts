export const createLangLink = (text: string) => {
  if (text.indexOf('<a>') === -1) return text;

  const array = text.split('<a>');
  const result = array.map((v) => {
    if (v.indexOf('</a>') === -1) return v;
    const [link, text] = v.split('</a>');
    return `<a href=${link} target="_blank" rel="noreferrer" class="underline">${link}</a>${text}`;
  });

  return result.join('');
};
