// Just playing around with this - alternate method for dynamically resizing textarea

import React, { useState, ChangeEvent } from "react";

const TextareaForm: React.FC = () => {
  const [text, setText] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  return (
    <form className="w-full" action="#0">
      <div className="grow-wrap hover:bg-van-gogh-blue-hover" data-replicated-value={text}>
        <textarea
          className="focus:outline-none border border-transparent hover:bg-van-gogh-blue-hover focus:border-van-gogh-purple"
          name="text"
          id="text"
          value={text}
          placeholder="Type what you don't want to see in the image (a negative prompt)"
          onChange={handleInputChange}
        ></textarea>
      </div>
    </form>
  );
};

export default TextareaForm;
