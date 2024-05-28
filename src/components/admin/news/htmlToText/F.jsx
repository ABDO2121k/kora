function HtmlRenderer({ text }) {
  const createMarkup = () => {
    return { __html: text };
  };

  return (
    <div dangerouslySetInnerHTML={createMarkup()} />
  );
}

export default HtmlRenderer;