import { useState } from 'react';
import { marked } from 'marked';
import './App.css';

function App() {
const [text, changeText] = useState(`
# H1
## H2
[title](https://www.website.com)
\`code\`
\`\`\`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\`

- First item
- Second item
- Third item

> blockquote

![alt text](image.jpg)

**bold text**
`);

marked.setOptions({
  breaks: true
});

  return (
    <div className="App">
      <h1>Markdown Previewer</h1>
      <textarea cols={40} rows={15} id='editor' onChange={(event) => 
        {changeText(event.target.value);
        }}
        value={text}>
      </textarea>
      <div id='preview' dangerouslySetInnerHTML={{
        __html: marked(text),
      }}></div>
    </div>
  );
}

export default App;