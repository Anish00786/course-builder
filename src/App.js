import React, { useState } from 'react';
// import LinkInput from './LinkInput';
// import ImageUpload from './ImageUpload';
// import PdfUpload from './PdfUpload';
import LinkInput from './components/LinkInput';
import ImageUpload from './components/ImageUpload';
import PdfUpload from './components/PdfUpload';


const App = () => {
  const [resources, setResources] = useState([]);

  const addLink = (link) => {
    setResources([...resources, { ...link, type: 'link' }]);
  };

  const addImage = (image) => {
    setResources([...resources, { ...image, type: 'image' }]);
  };

  const addPdf = (pdf) => {
    setResources([...resources, { ...pdf, type: 'pdf' }]);
  };

  return (
    <div className='myclass'>
      <h1 className='myheading' >Course Builder</h1>
      <LinkInput onAdd={addLink} />
      <ImageUpload onUpload={addImage} />
      <PdfUpload onUpload={addPdf} />
      <div>
        <h2>Resources</h2>
        <ul>
          {resources.map((resource, index) => (
            <li key={index}>
              {resource.type === 'link' && (
                <a href={resource.url} target="_blank" rel="noopener noreferrer">
                  {resource.name}
                </a>
              )}
              {resource.type === 'image' && <img src={resource.url} alt={resource.name} />}
              {resource.type === 'pdf' && (
                <embed src={resource.url} type="application/pdf" width="100%" height="600px" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
