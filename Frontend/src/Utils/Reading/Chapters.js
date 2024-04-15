const sortPara = (chapters) => {
  const pages = [];
  var contentList = [];
  var para = [];
  const CHUNK_SIZE = 777;
  var currentChunkIndex = 0;

  for (let i = 0; i < chapters.length; i++) {
    const chapter = chapters[i];
    for (let j = 0; j < chapter.length; j++) {
      const element = chapter[j];
      var temp = 0
      // Check if Heading
        if (element.tagName == "H2") {
          contentList.push([element.outerHTML]);
          currentChunkIndex += element.textContent.length;
        }

        // check if its a 'p' tag
        else if (element.tagName == "P") {
          // if para is small then add to temp list
          if (element.textContent.length <= CHUNK_SIZE && para.length == 0) {
            const chunk = element.outerHTML;
            para.push([chunk]);
            currentChunkIndex += element.textContent.length;
          }
          // if temp list has some extra space, then add more
          else if (currentChunkIndex < CHUNK_SIZE && para.length != 0) {
            const chunk = element.textContent;

            let a = chunk.slice(temp, CHUNK_SIZE - currentChunkIndex);
            temp = CHUNK_SIZE - currentChunkIndex
            currentChunkIndex += a.length;
            para.push([`<p>${a}</p>`]);

            if (currentChunkIndex >= CHUNK_SIZE) {
              contentList.push([para.join("")]);
              const tempContainer = document.createElement("div");
              tempContainer.innerHTML = contentList.join("")
              tempContainer.className = "chapter";
              pages.push([tempContainer]);
              currentChunkIndex = 0
              contentList = [];
              para = [];

              // Put the rest in the new paraList
              let b = chunk.slice(temp, CHUNK_SIZE - currentChunkIndex);
              currentChunkIndex = b.length
              para.push([`<p>${b}</p>`]);
              temp += 1
            }
          }
        }
    }
  }
  return pages
};

const Chapters = (chapterData) => {
  const chapters = [];
  for (let i = 0; i < chapterData?.length; i++) {
    const chapter = [];
    const chaptertags = chapterData[i].children;
    for (let j = 0; j < chaptertags.length; j++) {
      chapter.push(chaptertags[j]);
    }
    chapters.push(chapter);
  }

  const result = sortPara(chapters);
  return result;
};

export default Chapters;
